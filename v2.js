(() => {
  Object.assign(typeMeta, {
    api: { label: "模型 / API", code: "API", color: "#b9402d" },
    rag: { label: "知识检索", code: "RAG", color: "#3457a3" },
    eval: { label: "评测观测", code: "EVAL", color: "#426a52" },
    infra: { label: "运行基础", code: "OPS", color: "#6b5948" },
  });

  resources.push(
    {
      id: "openai-api", type: "api", title: "OpenAI API", tagline: "文本、视觉、音频与 Agent 能力接口",
      description: "OpenAI 官方开发平台，提供 Responses、Realtime、Embeddings 等能力与完整开发文档。",
      industry: "软件研发", func: "数据连接", tags: ["API", "多模态", "官方"], heat: 98,
      href: "https://platform.openai.com/docs/", command: "npm install openai",
    },
    {
      id: "anthropic-api", type: "api", title: "Anthropic API", tagline: "面向长上下文与工具使用的模型接口",
      description: "Claude 官方开发文档与 API，覆盖消息、工具调用、批处理、提示缓存等生产能力。",
      industry: "软件研发", func: "数据连接", tags: ["API", "Claude", "官方"], heat: 96,
      href: "https://docs.anthropic.com/", command: "pip install anthropic",
    },
    {
      id: "gemini-api", type: "api", title: "Gemini API", tagline: "Google 的多模态模型开发接口",
      description: "提供文本、图像、音频、视频理解与工具调用能力，并可接入 Google AI Studio。",
      industry: "软件研发", func: "数据连接", tags: ["Google", "API", "多模态"], heat: 95,
      href: "https://ai.google.dev/gemini-api/docs", command: "npm install @google/genai",
    },
    {
      id: "vercel-ai-sdk", type: "api", title: "Vercel AI SDK", tagline: "TypeScript AI 应用开发工具包",
      description: "统一不同模型提供商的接口，包含流式 UI、结构化输出、工具调用和 Agent 抽象。",
      industry: "软件研发", func: "编码开发", tags: ["TypeScript", "SDK", "Streaming"], heat: 95,
      href: "https://github.com/vercel/ai", command: "npm install ai",
    },
    {
      id: "llamaindex", type: "rag", title: "LlamaIndex", tagline: "面向 Agent 的数据与知识框架",
      description: "连接企业数据、构建索引与检索管线，并将知识能力接入 Agent 和工作流。",
      industry: "教育研究", func: "搜索研究", tags: ["RAG", "Data", "Python"], heat: 96,
      href: "https://github.com/run-llama/llama_index", command: "pip install llama-index",
    },
    {
      id: "qdrant", type: "rag", title: "Qdrant", tagline: "面向生产环境的向量检索引擎",
      description: "Rust 构建的开源向量数据库，支持过滤、混合检索、分布式部署与多种 SDK。",
      industry: "数据分析", func: "搜索研究", tags: ["Vector DB", "Rust", "Self-host"], heat: 95,
      href: "https://github.com/qdrant/qdrant", command: "docker run -p 6333:6333 qdrant/qdrant",
    },
    {
      id: "chroma", type: "rag", title: "Chroma", tagline: "为 AI 应用设计的开源检索数据库",
      description: "面向开发者的嵌入式知识存储与检索工具，适合快速搭建本地 RAG 原型。",
      industry: "软件研发", func: "搜索研究", tags: ["Vector DB", "Local", "Python"], heat: 92,
      href: "https://github.com/chroma-core/chroma", command: "pip install chromadb",
    },
    {
      id: "milvus", type: "rag", title: "Milvus", tagline: "可扩展的云原生向量数据库",
      description: "面向大规模向量搜索与 AI 应用的数据基础设施，支持分布式和多种索引。",
      industry: "数据分析", func: "搜索研究", tags: ["Vector DB", "Scale", "Cloud Native"], heat: 91,
      href: "https://github.com/milvus-io/milvus", command: "pip install pymilvus",
    },
    {
      id: "langfuse", type: "eval", title: "Langfuse", tagline: "开源 LLM 工程与可观测平台",
      description: "记录 traces、提示版本、数据集与评测结果，帮助团队定位 Agent 和 RAG 质量问题。",
      industry: "软件研发", func: "数据连接", tags: ["Tracing", "Eval", "Self-host"], heat: 96,
      href: "https://github.com/langfuse/langfuse", command: "pip install langfuse",
    },
    {
      id: "phoenix", type: "eval", title: "Arize Phoenix", tagline: "AI 应用观测、追踪与评测",
      description: "开源可观测平台，用于分析 traces、检索质量、提示与模型行为。",
      industry: "数据分析", func: "数据连接", tags: ["OpenTelemetry", "RAG", "Eval"], heat: 92,
      href: "https://github.com/Arize-ai/phoenix", command: "pip install arize-phoenix",
    },
    {
      id: "promptfoo", type: "eval", title: "Promptfoo", tagline: "提示词、模型与 RAG 的自动化评测",
      description: "用声明式测试比较提示、模型与安全行为，可接入 CI 阻止质量回退。",
      industry: "软件研发", func: "编码开发", tags: ["CI", "Red Team", "Eval"], heat: 94,
      href: "https://github.com/promptfoo/promptfoo", command: "npx promptfoo@latest init",
    },
    {
      id: "deepeval", type: "eval", title: "DeepEval", tagline: "面向 LLM 系统的单元测试框架",
      description: "以熟悉的测试方式评估 RAG、Agent 与对话应用，支持多种指标与数据集。",
      industry: "软件研发", func: "编码开发", tags: ["Testing", "Python", "Metrics"], heat: 90,
      href: "https://github.com/confident-ai/deepeval", command: "pip install -U deepeval",
    },
    {
      id: "vllm", type: "infra", title: "vLLM", tagline: "高吞吐大模型推理与服务引擎",
      description: "开源 LLM 推理系统，强调吞吐、内存效率与 OpenAI 兼容服务接口。",
      industry: "软件研发", func: "数据连接", tags: ["Inference", "GPU", "Serving"], heat: 97,
      href: "https://github.com/vllm-project/vllm", command: "pip install vllm",
    },
    {
      id: "ollama", type: "infra", title: "Ollama", tagline: "在本地快速运行开放模型",
      description: "用统一命令下载和运行模型，提供本地 API，适合隐私敏感与离线原型。",
      industry: "通用", func: "数据连接", tags: ["Local", "Models", "CLI"], heat: 98,
      href: "https://github.com/ollama/ollama", command: "ollama run llama3.2",
    },
    {
      id: "localai", type: "infra", title: "LocalAI", tagline: "自托管的 OpenAI 兼容 AI 服务",
      description: "在本地或私有环境运行多种模型与媒体能力，并通过兼容 API 接入应用。",
      industry: "通用", func: "数据连接", tags: ["Self-host", "API", "Privacy"], heat: 92,
      href: "https://github.com/mudler/LocalAI", command: "docker run -p 8080:8080 localai/localai:latest",
    },
    {
      id: "litellm", type: "infra", title: "LiteLLM", tagline: "统一百余种模型的网关与代理",
      description: "以 OpenAI 兼容格式接入不同模型，集中处理路由、预算、重试与观测。",
      industry: "软件研发", func: "数据连接", tags: ["Gateway", "Routing", "Proxy"], heat: 95,
      href: "https://github.com/BerriAI/litellm", command: "pip install 'litellm[proxy]'",
    },
  );

  const labels = {
    skill: "Skills", prompt: "提示词", mcp: "MCP", cli: "CLI", agent: "智能体",
    workflow: "工作流", api: "模型 / API", rag: "知识检索", eval: "评测观测", infra: "运行基础",
  };
  const typeOrder = ["skill", "prompt", "mcp", "cli", "agent", "workflow", "api", "rag", "eval", "infra"];
  const localTypes = new Set(["skill", "mcp", "cli", "agent", "workflow", "rag", "eval", "infra"]);
  const simpleTypes = new Set(["prompt", "skill", "api"]);
  const appState = { type: "all", industry: "all", requirements: new Set(), query: "", sort: "editor", visible: 10 };
  const healthIndex = new Map();
  let healthData = null;
  let savedIds = new Set(JSON.parse(localStorage.getItem("agentverse-saved") || "[]"));
  let compareIds = JSON.parse(localStorage.getItem("agentverse-compare-v2") || "[]").slice(0, 3);
  let savedStacks = JSON.parse(localStorage.getItem("agentverse-stacks-v2") || "[]");
  let activeStack = null;
  let searchItems = [];
  let searchIndex = 0;

  const one = (selector, scope = document) => scope.querySelector(selector);
  const all = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const platformByType = {
    skill: ["terminal", "python"], prompt: ["browser", "terminal"], mcp: ["terminal", "browser", "python"],
    cli: ["terminal"], agent: ["terminal", "python", "selfhost"], workflow: ["browser", "selfhost"],
    api: ["python", "browser"], rag: ["python", "selfhost"], eval: ["python", "selfhost"], infra: ["terminal", "selfhost"],
  };

  function profile(resource) {
    const openSource = resource.href.includes("github.com/");
    const local = localTypes.has(resource.type) && resource.type !== "workflow" || ["n8n", "dify", "langflow", "flowise", "activepieces", "comfyui"].includes(resource.id);
    const health = healthIndex.get(resource.href);
    const verified = healthData ? Boolean(health?.ok) : true;
    const parts = {
      source: openSource ? 25 : 10,
      link: verified ? 20 : 0,
      install: resource.command ? 15 : 0,
      local: local ? 20 : 5,
      complete: resource.description && resource.tags.length >= 3 ? 20 : 10,
    };
    const score = Object.values(parts).reduce((sum, value) => sum + value, 0);
    const platforms = platformByType[resource.type] || ["browser"];
    const deploy = resource.type === "api" ? "云端 API" : local ? "本地 / 自托管" : "浏览器资源";
    const auth = resource.type === "api" ? "通常需要密钥" : resource.type === "prompt" ? "通常不需要" : "视项目而定";
    return { openSource, local, verified, parts, score, platforms, deploy, auth, simple: simpleTypes.has(resource.type), health };
  }

  function markColor(type) { return typeMeta[type]?.color || "#1c1c1a"; }
  function typeCode(type) { return typeMeta[type]?.code || type.slice(0, 2).toUpperCase(); }
  function resourceById(id) { return resources.find((resource) => resource.id === id); }

  function renderEditorPicks() {
    const picks = ["ollama", "playwright-mcp", "promptfoo", "superpowers"].map(resourceById).filter(Boolean);
    one("#editor-picks").innerHTML = picks.map((resource, index) => `<li><span>0${index + 1}</span><i style="--pick:${markColor(resource.type)}">${typeCode(resource.type)}</i><b>${resource.title}</b><em>${profile(resource).score}</em></li>`).join("");
  }

  function renderMovingIndex() {
    const terms = [
      ...typeOrder.map((type) => [labels[type], `门类 ${resources.filter((r) => r.type === type).length}`, "type", type]),
      ...["软件研发", "内容创作", "营销电商", "教育研究", "数据分析", "办公效率"].map((item) => [item, "行业", "industry", item]),
      ...["搜索研究", "内容生成", "编码开发", "数据连接", "自动化编排", "浏览器操作"].map((item) => [item, "功能", "query", item]),
    ];
    const doubled = [...terms, ...terms];
    one("#moving-track").innerHTML = doubled.map((term, index) => `<button type="button" data-move-kind="${term[2]}" data-move-value="${term[3]}" ${index >= terms.length ? 'tabindex="-1" aria-hidden="true"' : ""}>${term[0]} <b>${term[1]}</b></button>`).join("");
  }

  function renderCategories() {
    one("#category-ledger").innerHTML = typeOrder.map((type, index) => {
      const count = resources.filter((resource) => resource.type === type).length;
      const descriptions = {
        skill: "可复用任务方法", prompt: "语言与约束模板", mcp: "外部工具连接", cli: "终端执行入口", agent: "自主任务执行",
        workflow: "多步骤流程", api: "模型能力接口", rag: "数据与知识层", eval: "质量与可观测", infra: "部署与运行底座",
      };
      return `<button class="category-item" type="button" data-category="${type}"><small>${String(index + 1).padStart(2, "0")} / ${descriptions[type]}</small><strong>${labels[type]}</strong><span>${String(count).padStart(2, "0")} →</span></button>`;
    }).join("");
  }

  function renderTypeFilters() {
    one("#type-filters").innerHTML = [`<button class="active" type="button" data-filter-type="all">全部门类</button>`, ...typeOrder.map((type) => `<button type="button" data-filter-type="${type}">${labels[type]} <span>${resources.filter((r) => r.type === type).length}</span></button>`)].join("");
  }

  function matches(resource) {
    const info = profile(resource);
    const text = [resource.title, resource.tagline, resource.description, resource.industry, resource.func, labels[resource.type], ...resource.tags, info.local ? "本地" : "云端", info.openSource ? "开源 开放源码" : ""].join(" ").toLowerCase();
    if (appState.type !== "all" && resource.type !== appState.type) return false;
    if (appState.industry !== "all" && resource.industry !== appState.industry) return false;
    if (appState.query && !text.includes(appState.query.toLowerCase())) return false;
    if (appState.requirements.has("open") && !info.openSource) return false;
    if (appState.requirements.has("local") && !info.local) return false;
    if (appState.requirements.has("install") && !resource.command) return false;
    if (appState.requirements.has("verified") && !info.verified) return false;
    return true;
  }

  function sortedResources() {
    const filtered = resources.filter(matches);
    if (appState.sort === "trust") return filtered.sort((a, b) => profile(b).score - profile(a).score || b.heat - a.heat);
    if (appState.sort === "heat") return filtered.sort((a, b) => b.heat - a.heat);
    if (appState.sort === "name") return filtered.sort((a, b) => a.title.localeCompare(b.title));
    return filtered.sort((a, b) => typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type) || b.heat - a.heat);
  }

  function environmentText(info) {
    const names = { terminal: "终端", browser: "浏览器", python: "Python", selfhost: "自托管" };
    return info.platforms.slice(0, 2).map((item) => names[item]).join(" + ");
  }

  function resourceRow(resource) {
    const info = profile(resource);
    const inCompare = compareIds.includes(resource.id);
    const isSaved = savedIds.has(resource.id);
    return `<article class="resource-row" data-resource="${resource.id}">
      <div class="resource-main"><i class="resource-mark" style="--mark:${markColor(resource.type)}">${typeCode(resource.type)}</i><div class="resource-copy"><span><i></i>${labels[resource.type]} · ${resource.industry}</span><h3>${resource.title}</h3><p>${resource.tagline}</p></div></div>
      <div class="resource-env"><b>${environmentText(info)}</b><span>${info.deploy}</span></div>
      <div class="trust-score"><b>${info.score}</b><span class="score-line"><i style="width:${info.score}%;--score-color:${info.score >= 80 ? "#426a52" : "#b9402d"}"></i></span></div>
      <div class="resource-actions"><button class="${inCompare ? "active" : ""}" type="button" data-compare="${resource.id}">${inCompare ? "已加入" : "对比"}</button><button class="${isSaved ? "active" : ""}" type="button" data-save-v2="${resource.id}">${isSaved ? "已收藏" : "收藏"}</button><button class="detail-button" type="button" data-detail-v2="${resource.id}">查看档案 →</button></div>
    </article>`;
  }

  function renderResources(resetVisible = false) {
    if (resetVisible) appState.visible = 10;
    const list = sortedResources();
    one("#result-count").textContent = list.length;
    one("#resource-list").innerHTML = list.slice(0, appState.visible).map(resourceRow).join("");
    one("#empty-state").hidden = list.length !== 0;
    one("#load-more").hidden = list.length === 0 || appState.visible >= list.length;
  }

  function selectType(type) {
    appState.type = type;
    all("[data-filter-type]").forEach((button) => button.classList.toggle("active", button.dataset.filterType === type));
    renderResources(true);
  }

  function resetFilters() {
    appState.type = "all";
    appState.industry = "all";
    appState.requirements.clear();
    appState.query = "";
    appState.sort = "editor";
    one("#hero-search").value = "";
    one("#library-search").value = "";
    one("#sort-select").value = "editor";
    one('input[name="industry"][value="all"]').checked = true;
    all('input[name="requirement"]').forEach((input) => { input.checked = false; });
    selectType("all");
  }

  function setQuery(query) {
    resetFilters();
    appState.query = query.trim();
    one("#library-search").value = appState.query;
    renderResources(true);
    one("#library").scrollIntoView({ behavior: "smooth" });
  }

  function toggleSaveV2(id) {
    if (savedIds.has(id)) savedIds.delete(id); else savedIds.add(id);
    localStorage.setItem("agentverse-saved", JSON.stringify([...savedIds]));
    updateSavedCount();
    renderResources(false);
    renderSavedDialog();
    toast(savedIds.has(id) ? "已加入收藏" : "已移出收藏");
  }

  function updateSavedCount() { one("#saved-count").textContent = savedIds.size; }

  function toggleCompare(id) {
    if (compareIds.includes(id)) compareIds = compareIds.filter((item) => item !== id);
    else if (compareIds.length >= 3) { toast("对比台最多保留 3 项"); return; }
    else compareIds.push(id);
    localStorage.setItem("agentverse-compare-v2", JSON.stringify(compareIds));
    renderCompareDock();
    renderResources(false);
  }

  function renderCompareDock() {
    const dock = one("#compare-dock");
    dock.hidden = compareIds.length === 0;
    one("#compare-count").textContent = compareIds.length;
    one("#compare-items").innerHTML = compareIds.map((id) => {
      const resource = resourceById(id);
      return resource ? `<span class="compare-token">${resource.title}<button type="button" data-remove-compare="${id}" aria-label="移除 ${resource.title}">×</button></span>` : "";
    }).join("");
  }

  function renderCompareTable() {
    const selected = compareIds.map(resourceById).filter(Boolean);
    if (!selected.length) { one("#compare-table-wrap").innerHTML = `<div class="empty-state"><b>对比台还是空的</b><p>先在资源索引中加入两到三个条目。</p></div>`; return; }
    const rows = [
      ["资源门类", (r) => labels[r.type]], ["核心用途", (r) => r.tagline], ["可信度", (r) => `${profile(r).score} / 100`],
      ["来源", (r) => profile(r).openSource ? "开放源码" : "官方网页 / 服务"], ["部署", (r) => profile(r).deploy],
      ["适用环境", (r) => environmentText(profile(r))], ["鉴权", (r) => profile(r).auth], ["安装入口", (r) => r.command || "网页直接使用"],
      ["链接核验", (r) => profile(r).verified ? `可访问${profile(r).health?.status ? ` · HTTP ${profile(r).health.status}` : ""}` : "待复核"],
    ];
    one("#compare-table-wrap").innerHTML = `<table class="decision-table"><thead><tr><th>维度</th>${selected.map((r) => `<th>${r.title}</th>`).join("")}</tr></thead><tbody>${rows.map(([label, getter]) => `<tr><td>${label}</td>${selected.map((r) => `<td>${getter(r)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }

  function scorePartsHtml(info) {
    const labelsByPart = { source: "源码可审查", link: "官方入口", install: "接入说明", local: "本地能力", complete: "资料完整" };
    return Object.entries(info.parts).map(([key, value]) => `<div><span>${labelsByPart[key]}</span><b>+${value}</b></div>`).join("");
  }

  function showDetailV2(id) {
    const resource = resourceById(id);
    if (!resource) return;
    const info = profile(resource);
    const checkedText = info.health?.checkedAt ? new Date(info.health.checkedAt).toLocaleDateString("zh-CN") : healthData?.generatedAt ? new Date(healthData.generatedAt).toLocaleDateString("zh-CN") : "待自动核验";
    one("#detail-content").innerHTML = `<div class="detail-head" style="--detail-color:${markColor(resource.type)}"><span>${labels[resource.type]} / TRUST ${info.score}</span><h2>${resource.title}</h2><p>${resource.tagline}</p></div><div class="detail-body"><p>${resource.description}</p><div class="detail-facts"><div><span>行业</span><b>${resource.industry}</b></div><div><span>部署</span><b>${info.deploy}</b></div><div><span>源码</span><b>${info.openSource ? "可审查" : "未公开 / 不适用"}</b></div><div><span>最近核验</span><b>${checkedText}</b></div></div><div class="score-breakdown"><b>可信度拆分 · ${info.score}/100</b><div class="score-parts">${scorePartsHtml(info)}</div></div>${resource.command ? `<div class="detail-command"><code>${resource.command}</code><button type="button" data-copy="${encodeURIComponent(resource.command)}">复制命令</button></div>` : ""}<div class="detail-actions"><a href="${resource.href}" target="_blank" rel="noopener noreferrer">访问官方入口 →</a><button type="button" data-save-v2="${resource.id}">${savedIds.has(resource.id) ? "取消收藏" : "加入收藏"}</button><button type="button" data-compare="${resource.id}">${compareIds.includes(resource.id) ? "移出对比" : "加入对比"}</button></div></div>`;
    openDialog("detail-dialog");
  }

  const matrix = {
    skill: [["high", "mid", "mid", "mid", "low"], "任务方法与标准流程"],
    prompt: [["mid", "high", "mid", "low", "high"], "表达约束与输出格式"],
    mcp: [["high", "high", "mid", "mid", "low"], "工具和数据连接"],
    cli: [["high", "low", "mid", "mid", "low"], "本地任务执行"],
    agent: [["high", "mid", "high", "high", "mid"], "自主规划与执行"],
    workflow: [["mid", "high", "mid", "high", "high"], "跨系统流程编排"],
    api: [["mid", "high", "high", "mid", "mid"], "模型能力供给"],
    rag: [["mid", "low", "high", "high", "mid"], "知识存储与检索"],
    eval: [["high", "mid", "high", "high", "low"], "质量验证与追踪"],
    infra: [["high", "low", "high", "high", "low"], "模型运行与路由"],
  };

  function renderMatrix() {
    one("#compat-matrix tbody").innerHTML = typeOrder.map((type) => `<tr><td><span class="matrix-type"><i style="--matrix-color:${markColor(type)}">${typeCode(type)}</i>${labels[type]}</span></td>${matrix[type][0].map((fit) => `<td><i class="fit ${fit}" title="${fit === "high" ? "天然适配" : fit === "mid" ? "需要配置" : "非主要场景"}"></i></td>`).join("")}<td class="matrix-role">${matrix[type][1]}</td></tr>`).join("");
  }

  const goalConfig = {
    dev: { title: "软件功能交付栈", types: ["skill", "cli", "mcp", "eval"], industry: "软件研发", func: "编码开发", reason: ["把工程方法固定下来", "在本地仓库执行改动", "连接浏览器与外部工具", "阻止质量回退"] },
    research: { title: "持续行业研究栈", types: ["mcp", "rag", "agent", "workflow"], industry: "教育研究", func: "搜索研究", reason: ["采集多来源信息", "保存与检索证据", "聚类并交叉研判", "定期触发与分发"] },
    content: { title: "内容生产与分发栈", types: ["prompt", "agent", "workflow", "eval"], industry: "内容创作", func: "内容生成", reason: ["统一品牌语气和结构", "完成选题与初稿", "串联审核和发布", "检查事实与输出质量"] },
    knowledge: { title: "团队知识库栈", types: ["api", "rag", "agent", "eval"], industry: "办公效率", func: "搜索研究", reason: ["提供理解和生成能力", "存储企业知识", "回答问题并调用工具", "持续评估检索质量"] },
    automation: { title: "重复办公自动化栈", types: ["mcp", "agent", "workflow", "infra"], industry: "办公效率", func: "自动化编排", reason: ["连接业务系统", "理解任务并做决策", "管理触发与异常分支", "稳定承载模型与路由"] },
  };

  function candidateScore(resource, config, platform, constraints) {
    const info = profile(resource);
    let score = Math.round(info.score * .35 + resource.heat * .2);
    if (resource.industry === config.industry) score += 12;
    if (resource.func === config.func) score += 10;
    if (info.platforms.includes(platform)) score += 15;
    if (constraints.has("open") && info.openSource) score += 12;
    if (constraints.has("local") && info.local) score += 12;
    if (constraints.has("simple") && info.simple) score += 10;
    if (constraints.has("verified") && info.verified) score += 10;
    return score;
  }

  function generateStack(goal, platform, constraints) {
    const config = goalConfig[goal];
    const chosen = config.types.map((type) => resources.filter((r) => r.type === type).sort((a, b) => candidateScore(b, config, platform, constraints) - candidateScore(a, config, platform, constraints))[0]).filter(Boolean);
    const match = Math.min(96, Math.round(chosen.reduce((sum, resource) => sum + candidateScore(resource, config, platform, constraints), 0) / chosen.length));
    activeStack = { id: `${Date.now()}`, goal, platform, constraints: [...constraints], title: config.title, resources: chosen.map((resource) => resource.id), match, createdAt: new Date().toISOString() };
    renderStack();
  }

  function stackWarnings(stackResources, platform) {
    const warnings = [];
    if (stackResources.some((r) => r.type === "api")) warnings.push("模型 API 通常需要密钥，并会把请求发送到云端；敏感数据应先做脱敏和权限评估。");
    if (platform === "browser" && stackResources.some((r) => r.type === "cli")) warnings.push("浏览器环境与 CLI 之间需要一个本地执行器或远程沙箱作为桥接层。");
    if (!stackResources.some((r) => r.type === "eval")) warnings.push("当前组合没有独立评测层，建议先定义人工抽检与失败回放机制。");
    if (!warnings.length) warnings.push("未发现明显的层级冲突；正式采用前仍需核对各项目的许可证、密钥权限和数据边界。");
    return warnings.join(" ");
  }

  function renderStack() {
    if (!activeStack) return;
    const config = goalConfig[activeStack.goal];
    const stackResources = activeStack.resources.map(resourceById).filter(Boolean);
    const layers = stackResources.map((resource, index) => {
      const options = resources.filter((item) => item.type === resource.type).sort((a, b) => profile(b).score - profile(a).score);
      return `<div class="stack-layer"><span>0${index + 1}</span><div class="stack-layer-name"><i style="--layer-color:${markColor(resource.type)}">${typeCode(resource.type)}</i><b>${resource.title}</b></div><p>${config.reason[index]}。可信度 ${profile(resource).score}，主要环境：${environmentText(profile(resource))}。</p><select data-layer-index="${index}" aria-label="替换 ${resource.title}">${options.map((item) => `<option value="${item.id}" ${item.id === resource.id ? "selected" : ""}>替换为 ${item.title}</option>`).join("")}</select></div>`;
    }).join("");
    one("#stack-output").innerHTML = `<div class="stack-result-head"><div><span>STACK / ${new Date().toLocaleDateString("zh-CN")}</span><h3>${activeStack.title}</h3></div><div class="stack-match"><span>综合匹配</span><b>${activeStack.match}</b></div></div><div class="stack-layers">${layers}</div><div class="stack-warnings"><b>采用前提示：</b> ${stackWarnings(stackResources, activeStack.platform)}</div><div class="stack-actions"><button type="button" data-stack-action="copy">复制 Markdown</button><button type="button" data-stack-action="json">导出 JSON</button><button class="primary" type="button" data-stack-action="save">保存这套栈</button></div>`;
  }

  function stackMarkdown(stack = activeStack) {
    const config = goalConfig[stack.goal];
    return `# ${stack.title}\n\n- 运行环境：${stack.platform}\n- 综合匹配：${stack.match}/100\n- 生成日期：${new Date(stack.createdAt).toLocaleDateString("zh-CN")}\n\n${stack.resources.map((id, index) => { const r = resourceById(id); return `${index + 1}. **${r.title}**（${labels[r.type]}）— ${config.reason[index]}\n   - ${r.href}`; }).join("\n")}`;
  }

  function saveActiveStack() {
    if (!activeStack) return;
    savedStacks = [activeStack, ...savedStacks.filter((stack) => stack.id !== activeStack.id)].slice(0, 8);
    localStorage.setItem("agentverse-stacks-v2", JSON.stringify(savedStacks));
    renderSavedStacks();
    toast("技术栈已保存在当前浏览器");
  }

  function renderSavedStacks() {
    const section = one("#saved-stacks");
    section.hidden = savedStacks.length === 0;
    one("#saved-stack-list").innerHTML = savedStacks.slice(0, 3).map((stack) => `<button class="saved-stack-card" type="button" data-load-stack="${stack.id}"><span>${new Date(stack.createdAt).toLocaleDateString("zh-CN")} · ${stack.match}/100</span><b>${stack.title} →</b></button>`).join("");
  }

  function downloadJson() {
    if (!activeStack) return;
    const detail = { ...activeStack, resources: activeStack.resources.map((id) => { const r = resourceById(id); return { id: r.id, title: r.title, type: r.type, url: r.href, trust: profile(r).score }; }) };
    const blob = new Blob([JSON.stringify(detail, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `agentverse-stack-${activeStack.goal}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    toast("JSON 已导出");
  }

  const collections = [
    { no: "01", goal: "dev", title: "可审查的软件交付栈", desc: "从需求拆解、代码修改到浏览器验证和质量回归，默认优先开放源码与本地执行。", ids: ["superpowers", "codex-cli", "playwright-mcp", "promptfoo"] },
    { no: "02", goal: "research", title: "持续行业研究雷达", desc: "连接外部信息、保存证据、交叉研判，再按周期生成一份结构化简报。", ids: ["mcp-servers", "llamaindex", "smolagents", "n8n"] },
    { no: "03", goal: "knowledge", title: "私有知识问答底座", desc: "用本地模型与自托管检索减少数据外发，并给检索质量保留独立评测位置。", ids: ["ollama", "qdrant", "agents-sdk", "phoenix"] },
  ];

  function renderCollections() {
    one("#collection-grid").innerHTML = collections.map((collection) => `<button class="collection-card" type="button" data-collection="${collection.goal}"><span>CASE ${collection.no} / 4 COMPONENTS</span><h3>${collection.title}</h3><p>${collection.desc}</p><div class="collection-tools">${collection.ids.map((id) => { const resource = resourceById(id); return `<i style="--tool-color:${markColor(resource.type)}">${typeCode(resource.type)}</i>`; }).join("")}<b>放入工作台 →</b></div></button>`).join("");
  }

  function renderSavedDialog() {
    const selected = [...savedIds].map(resourceById).filter(Boolean);
    one("#saved-dialog-content").innerHTML = selected.length ? selected.map((resource) => `<div class="saved-resource"><i style="--item-color:${markColor(resource.type)}">${typeCode(resource.type)}</i><b>${resource.title}</b><button type="button" data-save-v2="${resource.id}">移除</button></div>`).join("") : `<div class="empty-state"><b>还没有收藏</b><p>在资源索引中选择“收藏”，条目会保存在当前浏览器。</p></div>`;
  }

  function searchMatch(query) {
    const value = query.trim().toLowerCase();
    return resources.filter((resource) => !value || [resource.title, resource.tagline, resource.industry, resource.func, labels[resource.type], ...resource.tags].join(" ").toLowerCase().includes(value)).sort((a, b) => profile(b).score - profile(a).score).slice(0, 9);
  }

  function renderSearch(query = "") {
    searchItems = searchMatch(query);
    searchIndex = Math.min(searchIndex, Math.max(0, searchItems.length - 1));
    one("#command-results").innerHTML = searchItems.length ? searchItems.map((resource, index) => `<button class="command-item ${index === searchIndex ? "active" : ""}" type="button" data-command-id-v2="${resource.id}"><i style="--item-color:${markColor(resource.type)}">${typeCode(resource.type)}</i><span><b>${resource.title}</b><small>${resource.tagline}</small></span><span>${labels[resource.type]} · ${profile(resource).score}</span></button>`).join("") : `<div class="empty-state"><b>没有找到</b><p>试试更短的关键词。</p></div>`;
  }

  function openDialog(id) {
    const dialog = one(`#${id}`);
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("modal-open");
  }

  function closeDialog(id) {
    const dialog = one(`#${id}`);
    if (dialog?.open) dialog.close();
    if (!all("dialog").some((item) => item.open)) document.body.classList.remove("modal-open");
  }

  function openSearch() {
    renderSearch("");
    one("#command-search").value = "";
    searchIndex = 0;
    openDialog("search-dialog");
    requestAnimationFrame(() => one("#command-search").focus());
  }

  async function copyTextV2(text, message = "已复制") {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const area = document.createElement("textarea"); area.value = text; area.style.position = "fixed"; area.style.opacity = "0"; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove();
    }
    toast(message);
  }

  function toast(message) {
    const element = one("#toast");
    element.textContent = message;
    element.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => element.classList.remove("show"), 1800);
  }

  async function loadHealth() {
    try {
      const response = await fetch(`data/health.json?v=${Date.now()}`);
      if (!response.ok) throw new Error("health data unavailable");
      healthData = await response.json();
      Object.entries(healthData.links || {}).forEach(([url, value]) => healthIndex.set(url, value));
      const summary = healthData.summary;
      const percent = summary.total ? Math.round(summary.healthy / summary.total * 100) : 0;
      one("#verified-total").textContent = `${percent}%`;
      one("#health-label").textContent = `公开验链记录 · ${summary.healthy}/${summary.total} 可访问`;
      one("#health-summary").textContent = `${percent}% 的官方入口在最近一次核验中可访问`;
      one("#health-bar").style.width = `${percent}%`;
      one("#last-checked").textContent = new Date(healthData.generatedAt).toLocaleString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
      one("#healthy-links").textContent = summary.healthy;
      one("#failed-links").textContent = summary.failed;
      renderResources(false);
      renderEditorPicks();
    } catch {
      one("#verified-total").textContent = "待更新";
      one("#health-label").textContent = "核验记录暂时不可用";
      one("#health-summary").textContent = "自动验链记录暂时不可用";
    }
  }

  function bind() {
    one("#menu-button").addEventListener("click", () => {
      const nav = one("#main-nav"); const isOpen = nav.classList.toggle("open"); one("#menu-button").setAttribute("aria-expanded", String(isOpen));
    });
    all("#main-nav a").forEach((link) => link.addEventListener("click", () => one("#main-nav").classList.remove("open")));
    one("#open-search").addEventListener("click", openSearch);
    one("#open-saved").addEventListener("click", () => { renderSavedDialog(); openDialog("saved-dialog"); });
    one("#hero-search-submit").addEventListener("click", () => setQuery(one("#hero-search").value));
    one("#hero-search").addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); setQuery(event.target.value); } });
    all("[data-query]").forEach((button) => button.addEventListener("click", () => setQuery(button.dataset.query)));

    one("#category-ledger").addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]"); if (!button) return; resetFilters(); selectType(button.dataset.category); one("#library").scrollIntoView({ behavior: "smooth" });
    });
    one("#moving-track").addEventListener("click", (event) => {
      const button = event.target.closest("[data-move-kind]"); if (!button || button.getAttribute("aria-hidden") === "true") return;
      if (button.dataset.moveKind === "type") { resetFilters(); selectType(button.dataset.moveValue); one("#library").scrollIntoView({ behavior: "smooth" }); }
      else if (button.dataset.moveKind === "industry") { resetFilters(); appState.industry = button.dataset.moveValue; one(`input[name="industry"][value="${appState.industry}"]`).checked = true; renderResources(true); one("#library").scrollIntoView({ behavior: "smooth" }); }
      else setQuery(button.dataset.moveValue);
    });
    one("#type-filters").addEventListener("click", (event) => { const button = event.target.closest("[data-filter-type]"); if (button) selectType(button.dataset.filterType); });
    all('input[name="industry"]').forEach((input) => input.addEventListener("change", () => { appState.industry = input.value; renderResources(true); }));
    all('input[name="requirement"]').forEach((input) => input.addEventListener("change", () => { if (input.checked) appState.requirements.add(input.value); else appState.requirements.delete(input.value); renderResources(true); }));
    one("#library-search").addEventListener("input", (event) => { appState.query = event.target.value.trim(); renderResources(true); });
    one("#sort-select").addEventListener("change", (event) => { appState.sort = event.target.value; renderResources(true); });
    one("#reset-filters").addEventListener("click", resetFilters);
    one("#load-more").addEventListener("click", () => { appState.visible += 10; renderResources(false); });
    one("#resource-list").addEventListener("click", (event) => {
      const detail = event.target.closest("[data-detail-v2]"); const save = event.target.closest("[data-save-v2]"); const compare = event.target.closest("[data-compare]");
      if (detail) showDetailV2(detail.dataset.detailV2); if (save) toggleSaveV2(save.dataset.saveV2); if (compare) toggleCompare(compare.dataset.compare);
    });

    one("#compare-dock").addEventListener("click", (event) => {
      const remove = event.target.closest("[data-remove-compare]"); if (remove) toggleCompare(remove.dataset.removeCompare);
    });
    one("#clear-compare").addEventListener("click", () => { compareIds = []; localStorage.setItem("agentverse-compare-v2", "[]"); renderCompareDock(); renderResources(false); });
    one("#open-compare").addEventListener("click", () => { renderCompareTable(); openDialog("compare-dialog"); });

    one("#stack-form").addEventListener("submit", (event) => {
      event.preventDefault(); const constraints = new Set(all('#stack-form input[type="checkbox"]:checked').map((input) => input.value)); generateStack(one("#stack-goal").value, one("#stack-platform").value, constraints);
    });
    one("#stack-output").addEventListener("change", (event) => {
      const select = event.target.closest("[data-layer-index]"); if (!select || !activeStack) return; activeStack.resources[Number(select.dataset.layerIndex)] = select.value; renderStack();
    });
    one("#stack-output").addEventListener("click", (event) => {
      const button = event.target.closest("[data-stack-action]"); if (!button) return;
      if (button.dataset.stackAction === "copy") copyTextV2(stackMarkdown(), "技术栈 Markdown 已复制");
      if (button.dataset.stackAction === "json") downloadJson();
      if (button.dataset.stackAction === "save") saveActiveStack();
    });
    one("#saved-stack-list").addEventListener("click", (event) => { const button = event.target.closest("[data-load-stack]"); if (!button) return; const stack = savedStacks.find((item) => item.id === button.dataset.loadStack); if (stack) { activeStack = stack; renderStack(); one("#workbench").scrollIntoView({ behavior: "smooth" }); } });
    one("#collection-grid").addEventListener("click", (event) => { const button = event.target.closest("[data-collection]"); if (!button) return; one("#stack-goal").value = button.dataset.collection; generateStack(button.dataset.collection, "selfhost", new Set(["open", "verified"])); one("#workbench").scrollIntoView({ behavior: "smooth" }); });

    one("#command-search").addEventListener("input", (event) => { searchIndex = 0; renderSearch(event.target.value); });
    one("#command-results").addEventListener("click", (event) => { const button = event.target.closest("[data-command-id-v2]"); if (!button) return; closeDialog("search-dialog"); showDetailV2(button.dataset.commandIdV2); });
    all("[data-close-dialog]").forEach((button) => button.addEventListener("click", () => closeDialog(button.dataset.closeDialog)));
    all("dialog").forEach((dialog) => dialog.addEventListener("close", () => { if (!all("dialog").some((item) => item.open)) document.body.classList.remove("modal-open"); }));
    one("#detail-dialog").addEventListener("click", (event) => {
      const save = event.target.closest("[data-save-v2]"); const compare = event.target.closest("[data-compare]"); const copy = event.target.closest("[data-copy]");
      if (save) { toggleSaveV2(save.dataset.saveV2); showDetailV2(save.dataset.saveV2); }
      if (compare) { toggleCompare(compare.dataset.compare); showDetailV2(compare.dataset.compare); }
      if (copy) copyTextV2(decodeURIComponent(copy.dataset.copy), "安装命令已复制");
    });
    one("#saved-dialog").addEventListener("click", (event) => { const button = event.target.closest("[data-save-v2]"); if (button) toggleSaveV2(button.dataset.saveV2); });

    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openSearch(); }
      if (one("#search-dialog").open && ["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) {
        event.preventDefault();
        if (event.key === "ArrowDown") searchIndex = Math.min(searchItems.length - 1, searchIndex + 1);
        if (event.key === "ArrowUp") searchIndex = Math.max(0, searchIndex - 1);
        if (event.key === "Enter" && searchItems[searchIndex]) { const id = searchItems[searchIndex].id; closeDialog("search-dialog"); showDetailV2(id); return; }
        renderSearch(one("#command-search").value);
      }
    });
  }

  function initV2() {
    one("#resource-total").textContent = resources.length;
    one("#hero-headline-total").textContent = resources.length;
    one("#type-total").textContent = typeOrder.length;
    renderEditorPicks();
    renderMovingIndex();
    renderCategories();
    renderTypeFilters();
    renderResources(true);
    renderCompareDock();
    renderMatrix();
    renderCollections();
    renderSavedStacks();
    renderSavedDialog();
    renderSearch();
    updateSavedCount();
    bind();
    loadHealth();
  }

  document.addEventListener("DOMContentLoaded", initV2);
})();
