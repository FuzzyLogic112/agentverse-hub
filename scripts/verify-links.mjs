import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [appSource, catalogSource, v2Source] = await Promise.all([
  readFile(path.join(root, "app.js"), "utf8"),
  readFile(path.join(root, "catalog.js"), "utf8"),
  readFile(path.join(root, "v2.js"), "utf8"),
]);

const objectLinks = [appSource, v2Source].flatMap((source) =>
  [...source.matchAll(/href:\s*["'](https?:\/\/[^"']+)["']/g)].map((match) => match[1])
);
const catalogLinks = [...catalogSource.matchAll(/^\s+\["[^"]+",\s*"[^"]+",\s*"[^"]+",\s*"[^"]+",\s*"[^"]+",\s*"(https?:\/\/[^"]+)"/gm)]
  .map((match) => match[1]);
const links = [...new Set([...objectLinks, ...catalogLinks])].sort();

async function request(url, method) {
  const outputTarget = process.platform === "win32" ? "NUL" : "/dev/null";
  const args = [
    "--location", "--silent", "--show-error", "--max-time", "15",
    "--user-agent", "AgentVerse-Hub-Link-Health/2.0 (+https://github.com/FuzzyLogic112/agentverse-hub)",
    "--output", outputTarget, "--write-out", "%{http_code}|%{time_total}",
  ];
  if (method === "HEAD") args.push("--head");
  args.push(url);

  return new Promise((resolve) => {
    const child = spawn("curl", args, { windowsHide: true });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("error", (error) => resolve({ ok: false, status: 0, latencyMs: 0, error: error.message }));
    child.on("close", () => {
      const [statusText = "0", secondsText = "0"] = stdout.trim().split("|");
      const status = Number(statusText) || 0;
      const latencyMs = Math.round((Number(secondsText) || 0) * 1000);
      resolve({
        ok: status >= 200 && status < 400,
        status,
        latencyMs,
        ...(status ? {} : { error: stderr.trim().slice(0, 160) || "request failed" }),
      });
    });
  });
}

async function verify(url) {
  const head = await request(url, "HEAD");
  const result = head.ok ? head : await request(url, "GET");
  return { ...result, checkedAt: new Date().toISOString() };
}

const results = new Map();
let cursor = 0;
async function worker() {
  while (cursor < links.length) {
    const index = cursor++;
    const url = links[index];
    results.set(url, await verify(url));
  }
}

await Promise.all(Array.from({ length: Math.min(8, links.length) }, worker));

const orderedLinks = Object.fromEntries(links.map((url) => [url, results.get(url)]));
const healthy = Object.values(orderedLinks).filter((entry) => entry.ok).length;
const payload = {
  generatedAt: new Date().toISOString(),
  methodology: "Each official entry is requested with HEAD, then GET on failure. HTTP 2xx/3xx is considered reachable.",
  summary: { total: links.length, healthy, failed: links.length - healthy },
  links: orderedLinks,
};

await writeFile(path.join(root, "data", "health.json"), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`Verified ${links.length} links: ${healthy} reachable, ${links.length - healthy} require review.`);
if (!links.length) process.exitCode = 1;
