const typeMeta = {
  skill: { label: "Skill", code: "SK", color: "#d8ff66" },
  prompt: { label: "提示词", code: "PR", color: "#ffbd82" },
  mcp: { label: "MCP", code: "MC", color: "#b6d8ff" },
  cli: { label: "CLI", code: "CL", color: "#a998ff" },
  agent: { label: "智能体", code: "AG", color: "#72dec4" },
  workflow: { label: "工作流", code: "WF", color: "#f1d67d" },
};

const resources = [
  {
    id: "anthropic-skills", type: "skill", title: "Anthropic Skills", tagline: "把专业流程封装成可复用能力包",
    description: "Anthropic 官方开源的 Agent Skills 集合，覆盖文档、演示、表格、PDF 等高频生产任务。",
    industry: "办公效率", func: "内容生成", tags: ["官方", "文档", "开源"], heat: 98,
    href: "https://github.com/anthropics/skills", command: "git clone https://github.com/anthropics/skills.git",
  },
  {
    id: "openai-skills", type: "skill", title: "OpenAI Skills", tagline: "面向 Codex 的开放技能目录",
    description: "可检查、可组合的任务说明与脚本集合，用于扩展编码智能体处理真实工作的能力。",
    industry: "软件研发", func: "编码开发", tags: ["Codex", "技能", "开源"], heat: 96,
    href: "https://github.com/openai/skills", command: "git clone https://github.com/openai/skills.git",
  },
  {
    id: "superpowers", type: "skill", title: "Superpowers", tagline: "给编码智能体一套完整工程方法",
    description: "通过头脑风暴、计划、测试驱动开发和复核等 Skills，让智能体按成熟工程流程工作。",
    industry: "软件研发", func: "编码开发", tags: ["TDD", "工程化", "Agent"], heat: 95,
    href: "https://github.com/obra/superpowers", command: "git clone https://github.com/obra/superpowers.git",
  },
  {
    id: "agent-browser", type: "skill", title: "Agent Browser", tagline: "为 AI 智能体设计的浏览器自动化",
    description: "使用紧凑的可访问性快照和稳定引用完成网页导航、表单操作、抓取与测试。",
    industry: "软件研发", func: "浏览器操作", tags: ["Browser", "自动化", "CLI"], heat: 94,
    href: "https://github.com/vercel-labs/agent-browser", command: "npm install -g agent-browser",
  },
  {
    id: "frontend-design", type: "skill", title: "Frontend Design", tagline: "让智能体做出有辨识度的前端",
    description: "强调视觉判断、排版、色彩和完整交付的前端设计 Skill，适合网站与界面原型。",
    industry: "内容创作", func: "内容生成", tags: ["设计", "前端", "UI"], heat: 90,
    href: "https://github.com/anthropics/skills/tree/main/skills/frontend-design", command: "npx skills add anthropics/skills",
  },
  {
    id: "skill-creator", type: "skill", title: "Skill Creator", tagline: "从流程中提炼一项可复用技能",
    description: "帮助定义触发条件、任务边界、工具步骤与验证方式，把经验整理成可维护的 Skill。",
    industry: "通用", func: "自动化编排", tags: ["元技能", "标准化", "Agent"], heat: 88,
    href: "https://github.com/anthropics/skills/tree/main/skills/skill-creator", command: "npx skills add anthropics/skills",
  },
  {
    id: "document-skills", type: "skill", title: "Document Skills", tagline: "文档、表格和幻灯片的生产工具箱",
    description: "围绕真实办公文件的创建、编辑和视觉检查构建，适合报告、提案与数据交付。",
    industry: "办公效率", func: "内容生成", tags: ["DOCX", "XLSX", "PPTX"], heat: 87,
    href: "https://github.com/anthropics/skills", command: "npx skills add anthropics/skills",
  },
  {
    id: "prompt-guide", type: "prompt", title: "Prompt Engineering Guide", tagline: "从基础提示到 Agent 设计的系统手册",
    description: "DAIR.AI 维护的提示工程学习资料，覆盖检索增强、工具使用、推理与智能体等主题。",
    industry: "教育研究", func: "内容生成", tags: ["教程", "RAG", "推理"], heat: 97,
    href: "https://www.promptingguide.ai/zh", command: "",
  },
  {
    id: "awesome-prompts", type: "prompt", title: "Awesome ChatGPT Prompts", tagline: "社区维护的角色与任务提示词库",
    description: "从写作、教学到开发的经典提示词集合，适合快速找灵感并改造成自己的模板。",
    industry: "通用", func: "内容生成", tags: ["社区", "模板", "入门"], heat: 95,
    href: "https://github.com/f/awesome-chatgpt-prompts", command: "git clone https://github.com/f/awesome-chatgpt-prompts.git",
  },
  {
    id: "langgpt", type: "prompt", title: "LangGPT", tagline: "用结构化语法写出可维护提示词",
    description: "将角色、技能、规则、工作流和输出格式模块化，适合复杂提示词的团队协作与迭代。",
    industry: "通用", func: "内容生成", tags: ["结构化", "中文", "模板"], heat: 92,
    href: "https://github.com/langgptai/LangGPT", command: "git clone https://github.com/langgptai/LangGPT.git",
  },
  {
    id: "anthropic-courses", type: "prompt", title: "Anthropic Prompt Courses", tagline: "通过练习掌握清晰、可靠的提示",
    description: "从基础结构到复杂场景的互动课程，包含答案与实践材料，适合系统学习。",
    industry: "教育研究", func: "内容生成", tags: ["课程", "Claude", "实践"], heat: 91,
    href: "https://github.com/anthropics/courses", command: "git clone https://github.com/anthropics/courses.git",
  },
  {
    id: "openai-cookbook", type: "prompt", title: "OpenAI Cookbook", tagline: "从提示策略到生产应用的代码范例",
    description: "OpenAI 官方示例库，覆盖提示优化、结构化输出、RAG、评测与智能体模式。",
    industry: "软件研发", func: "编码开发", tags: ["官方", "示例", "评测"], heat: 94,
    href: "https://github.com/openai/openai-cookbook", command: "git clone https://github.com/openai/openai-cookbook.git",
  },
  {
    id: "promptbase-ms", type: "prompt", title: "Microsoft PromptBase", tagline: "版本化、可测试的提示词工程样例",
    description: "面向真实应用的提示词样例与协作方式，强调结构、评估和可维护性。",
    industry: "软件研发", func: "内容生成", tags: ["Microsoft", "工程化", "示例"], heat: 85,
    href: "https://github.com/microsoft/promptbase", command: "git clone https://github.com/microsoft/promptbase.git",
  },
  {
    id: "prompts-chat", type: "prompt", title: "Prompts.chat", tagline: "快速检索社区提示词与使用场景",
    description: "以可浏览界面组织热门提示词，适合寻找角色设定、创作方法和任务模板。",
    industry: "内容创作", func: "内容生成", tags: ["发现", "社区", "写作"], heat: 86,
    href: "https://prompts.chat/", command: "",
  },
  {
    id: "mcp-servers", type: "mcp", title: "MCP Servers", tagline: "Model Context Protocol 参考服务器",
    description: "MCP 官方维护的参考实现与社区服务器索引，是理解工具连接方式的起点。",
    industry: "软件研发", func: "数据连接", tags: ["官方", "协议", "Server"], heat: 99,
    href: "https://github.com/modelcontextprotocol/servers", command: "npx -y @modelcontextprotocol/server-filesystem ./",
  },
  {
    id: "github-mcp", type: "mcp", title: "GitHub MCP Server", tagline: "让智能体理解仓库、Issue 与 PR",
    description: "GitHub 官方 MCP 服务，可查询代码、管理议题与拉取请求，并接入开发协作流程。",
    industry: "软件研发", func: "数据连接", tags: ["GitHub", "官方", "DevOps"], heat: 98,
    href: "https://github.com/github/github-mcp-server", command: "docker run -i --rm ghcr.io/github/github-mcp-server",
  },
  {
    id: "playwright-mcp", type: "mcp", title: "Playwright MCP", tagline: "基于可访问性树的网页操作能力",
    description: "Microsoft 官方浏览器 MCP，适合端到端测试、网页任务执行与结构化页面交互。",
    industry: "软件研发", func: "浏览器操作", tags: ["Microsoft", "Browser", "测试"], heat: 98,
    href: "https://github.com/microsoft/playwright-mcp", command: "npx @playwright/mcp@latest",
  },
  {
    id: "context7", type: "mcp", title: "Context7", tagline: "把最新官方文档送进编码上下文",
    description: "按库与版本提供代码文档，减少智能体依赖过时 API 或凭记忆编程的问题。",
    industry: "软件研发", func: "搜索研究", tags: ["Docs", "Context", "Coding"], heat: 97,
    href: "https://github.com/upstash/context7", command: "npx -y @upstash/context7-mcp",
  },
  {
    id: "browserbase-mcp", type: "mcp", title: "Browserbase MCP", tagline: "云端浏览器、抓取与自动化连接器",
    description: "为智能体提供受控浏览器会话，适合长任务、网页提取和需要隔离环境的自动化。",
    industry: "营销电商", func: "浏览器操作", tags: ["Cloud", "Browser", "抓取"], heat: 89,
    href: "https://github.com/browserbase/mcp-server-browserbase", command: "npx @browserbasehq/mcp-server-browserbase",
  },
  {
    id: "aws-mcp", type: "mcp", title: "AWS MCP Servers", tagline: "把云服务知识和操作接入 Agent",
    description: "AWS Labs 的 MCP 服务器集合，覆盖文档、架构、成本、基础设施与开发工作流。",
    industry: "软件研发", func: "数据连接", tags: ["AWS", "Cloud", "Infra"], heat: 90,
    href: "https://github.com/awslabs/mcp", command: "uvx awslabs.aws-documentation-mcp-server@latest",
  },
  {
    id: "cloudflare-mcp", type: "mcp", title: "Cloudflare MCP Server", tagline: "让智能体连接边缘平台与账户能力",
    description: "用于探索 Cloudflare 文档和服务能力的 MCP 实现，适合边缘应用与部署场景。",
    industry: "软件研发", func: "数据连接", tags: ["Cloudflare", "Edge", "Deploy"], heat: 86,
    href: "https://github.com/cloudflare/mcp-server-cloudflare", command: "npx @cloudflare/mcp-server-cloudflare",
  },
  {
    id: "codex-cli", type: "cli", title: "OpenAI Codex CLI", tagline: "在终端里与编码智能体并肩工作",
    description: "面向本地仓库的开源编码智能体，可阅读、修改与运行代码，并参与完整开发流程。",
    industry: "软件研发", func: "编码开发", tags: ["OpenAI", "Coding", "Terminal"], heat: 99,
    href: "https://github.com/openai/codex", command: "npm install -g @openai/codex",
  },
  {
    id: "claude-code", type: "cli", title: "Claude Code", tagline: "理解代码库并执行终端任务的 Agent",
    description: "Anthropic 的智能编码工具，支持仓库理解、编辑、命令执行和开发工作流。",
    industry: "软件研发", func: "编码开发", tags: ["Anthropic", "Coding", "Terminal"], heat: 98,
    href: "https://github.com/anthropics/claude-code", command: "npm install -g @anthropic-ai/claude-code",
  },
  {
    id: "gemini-cli", type: "cli", title: "Gemini CLI", tagline: "把 Gemini 的 Agent 能力带入终端",
    description: "Google 开源的终端智能体，支持代码理解、工具调用、搜索与自动化任务。",
    industry: "软件研发", func: "编码开发", tags: ["Google", "开源", "Terminal"], heat: 97,
    href: "https://github.com/google-gemini/gemini-cli", command: "npm install -g @google/gemini-cli",
  },
  {
    id: "aider", type: "cli", title: "Aider", tagline: "以 Git 为中心的 AI 结对编程",
    description: "在终端中与模型协作修改代码，自动映射仓库并生成清晰提交，适合渐进式开发。",
    industry: "软件研发", func: "编码开发", tags: ["Git", "Pairing", "Python"], heat: 94,
    href: "https://github.com/Aider-AI/aider", command: "python -m pip install aider-install && aider-install",
  },
  {
    id: "opencode", type: "cli", title: "OpenCode", tagline: "面向终端的开源编码智能体",
    description: "强调模型选择、终端体验和开放生态的 coding agent，可在不同提供商间灵活切换。",
    industry: "软件研发", func: "编码开发", tags: ["开源", "TUI", "Coding"], heat: 93,
    href: "https://github.com/anomalyco/opencode", command: "npm install -g opencode-ai",
  },
  {
    id: "goose", type: "cli", title: "Goose", tagline: "可扩展、本地优先的通用 AI Agent",
    description: "Block 开源的桌面与 CLI 智能体，通过扩展连接开发工具和业务系统。",
    industry: "办公效率", func: "自动化编排", tags: ["Block", "Local", "Extensions"], heat: 90,
    href: "https://github.com/block/goose", command: "pipx install goose-ai",
  },
  {
    id: "crush", type: "cli", title: "Crush", tagline: "把多模型编码工作装进漂亮 TUI",
    description: "Charmbracelet 打造的终端 coding agent，强调跨模型、会话管理与精致交互体验。",
    industry: "软件研发", func: "编码开发", tags: ["TUI", "Multi-model", "Go"], heat: 88,
    href: "https://github.com/charmbracelet/crush", command: "go install github.com/charmbracelet/crush@latest",
  },
  {
    id: "agents-sdk", type: "agent", title: "OpenAI Agents SDK", tagline: "用少量原语编排多智能体系统",
    description: "以 Agent、handoff、guardrail 和 tracing 为核心构建可观察、可组合的智能体应用。",
    industry: "软件研发", func: "自动化编排", tags: ["OpenAI", "Python", "Tracing"], heat: 99,
    href: "https://github.com/openai/openai-agents-python", command: "pip install openai-agents",
  },
  {
    id: "langgraph", type: "agent", title: "LangGraph", tagline: "构建可控、持久化的 Agent 图",
    description: "支持状态、循环、人机协作和长时运行的 Agent 编排框架，适合复杂生产流程。",
    industry: "软件研发", func: "自动化编排", tags: ["Graph", "State", "Python"], heat: 98,
    href: "https://github.com/langchain-ai/langgraph", command: "pip install -U langgraph",
  },
  {
    id: "autogen", type: "agent", title: "AutoGen", tagline: "事件驱动的多智能体应用框架",
    description: "Microsoft 开源的智能体框架，支持多角色协作、工具使用和可扩展运行时。",
    industry: "软件研发", func: "自动化编排", tags: ["Microsoft", "Multi-agent", "Python"], heat: 96,
    href: "https://github.com/microsoft/autogen", command: "pip install -U autogen-agentchat",
  },
  {
    id: "crewai", type: "agent", title: "CrewAI", tagline: "用角色、任务和流程组织 Agent 团队",
    description: "通过 Crew 与 Flow 两种抽象构建协作智能体，适合研究、内容与业务自动化。",
    industry: "营销电商", func: "自动化编排", tags: ["Role", "Crew", "Workflow"], heat: 95,
    href: "https://github.com/crewAIInc/crewAI", command: "pip install crewai",
  },
  {
    id: "smolagents", type: "agent", title: "smolagents", tagline: "轻量、代码优先的 Agent 框架",
    description: "Hugging Face 推出的简洁智能体库，支持代码型 Agent、工具调用与多种模型。",
    industry: "教育研究", func: "编码开发", tags: ["Hugging Face", "Lightweight", "Python"], heat: 93,
    href: "https://github.com/huggingface/smolagents", command: "pip install smolagents",
  },
  {
    id: "openhands", type: "agent", title: "OpenHands", tagline: "能在真实环境中做软件开发的 Agent",
    description: "开源软件开发智能体平台，可运行命令、修改代码、浏览网页并处理端到端任务。",
    industry: "软件研发", func: "编码开发", tags: ["SWE", "Sandbox", "开源"], heat: 96,
    href: "https://github.com/All-Hands-AI/OpenHands", command: "docker pull docker.all-hands.dev/all-hands-ai/runtime:latest",
  },
  {
    id: "browser-use", type: "agent", title: "Browser Use", tagline: "让 AI Agent 可靠地操作网页",
    description: "将浏览器状态转换为模型可理解的信息，适合网页任务、数据收集与业务自动化。",
    industry: "营销电商", func: "浏览器操作", tags: ["Browser", "Python", "Automation"], heat: 95,
    href: "https://github.com/browser-use/browser-use", command: "pip install browser-use",
  },
  {
    id: "n8n", type: "workflow", title: "n8n", tagline: "可自托管的 AI 与业务自动化平台",
    description: "用可视化节点连接数百种服务、代码与 AI Agent，适合快速搭建生产工作流。",
    industry: "办公效率", func: "自动化编排", tags: ["No-code", "Self-host", "Integration"], heat: 99,
    href: "https://github.com/n8n-io/n8n", command: "npx n8n",
  },
  {
    id: "dify", type: "workflow", title: "Dify", tagline: "从提示编排到 Agent 应用的一体化平台",
    description: "支持工作流、知识库、模型管理、观测与发布，适合团队快速交付 AI 应用。",
    industry: "办公效率", func: "自动化编排", tags: ["LLMOps", "RAG", "Visual"], heat: 98,
    href: "https://github.com/langgenius/dify", command: "git clone https://github.com/langgenius/dify.git",
  },
  {
    id: "langflow", type: "workflow", title: "Langflow", tagline: "用可视化画布搭建 Agent 与 RAG",
    description: "拖拽组合模型、向量库、工具与自定义组件，并将流程发布为 API 或 MCP 服务。",
    industry: "教育研究", func: "自动化编排", tags: ["Visual", "RAG", "MCP"], heat: 95,
    href: "https://github.com/langflow-ai/langflow", command: "uv pip install langflow",
  },
  {
    id: "flowise", type: "workflow", title: "Flowise", tagline: "开源的生成式 AI 流程构建器",
    description: "以低代码方式组合 LLM、工具、记忆和 Agent，适合原型验证与内部应用。",
    industry: "办公效率", func: "自动化编排", tags: ["Low-code", "Agent", "Node.js"], heat: 94,
    href: "https://github.com/FlowiseAI/Flowise", command: "npx flowise start",
  },
  {
    id: "activepieces", type: "workflow", title: "Activepieces", tagline: "开源、可扩展的业务自动化",
    description: "连接业务应用与 AI 步骤，支持自托管和人机协作，适合运营与后台流程。",
    industry: "营销电商", func: "自动化编排", tags: ["Automation", "Open-source", "Apps"], heat: 91,
    href: "https://github.com/activepieces/activepieces", command: "docker pull activepieces/activepieces:latest",
  },
  {
    id: "comfyui", type: "workflow", title: "ComfyUI", tagline: "节点式生成图像与视频工作流",
    description: "通过可视化节点精确组织模型、采样、控制与后期处理，是生成媒体流程的热门底座。",
    industry: "内容创作", func: "内容生成", tags: ["Image", "Video", "Nodes"], heat: 97,
    href: "https://github.com/Comfy-Org/ComfyUI", command: "git clone https://github.com/Comfy-Org/ComfyUI.git",
  },
  {
    id: "prefect", type: "workflow", title: "Prefect", tagline: "可观察、可恢复的数据与 AI 工作流",
    description: "用 Python 构建、调度和监控可靠流程，适合数据管道、模型任务与后台自动化。",
    industry: "数据分析", func: "自动化编排", tags: ["Python", "Data", "Orchestration"], heat: 89,
    href: "https://github.com/PrefectHQ/prefect", command: "pip install -U prefect",
  },
];

const flows = {
  content: {
    title: "内容增长引擎", time: "预计节省 6h / 周", summary: "把分散的信息源变成可持续运转的内容流水线。",
    steps: [
      ["MC", "MCP", "采集趋势信号", "连接搜索、社区与竞品数据", "#b6d8ff"],
      ["AG", "Agent", "提炼选题角度", "聚类信息并判断受众价值", "#72dec4"],
      ["PR", "Prompt", "生成品牌初稿", "按语气、结构和平台重写", "#ffbd82"],
      ["WF", "Workflow", "审核后分发", "人工确认并进入发布队列", "#f1d67d"],
    ],
  },
  dev: {
    title: "研发提效回路", time: "预计缩短 35% 交付时间", summary: "从任务澄清到测试复盘，让编码智能体在受控工程流程里工作。",
    steps: [
      ["SK", "Skill", "拆解需求边界", "生成验收条件与影响清单", "#d8ff66"],
      ["CL", "CLI", "修改本地代码", "读取仓库并执行最小变更", "#a998ff"],
      ["MC", "MCP", "运行浏览器测试", "验证关键路径与响应式页面", "#b6d8ff"],
      ["AG", "Agent", "复核并沉淀", "检查差异、记录经验与风险", "#72dec4"],
    ],
  },
  research: {
    title: "行业洞察雷达", time: "预计节省 1.5d / 次", summary: "把多来源信息加工成有证据、有判断、可追踪的决策简报。",
    steps: [
      ["MC", "MCP", "聚合多源数据", "抓取新闻、论文与行业数据", "#b6d8ff"],
      ["WF", "Workflow", "清洗与去重", "统一字段、时间与来源可信度", "#f1d67d"],
      ["AG", "Agent", "交叉研判", "寻找共识、冲突和弱信号", "#72dec4"],
      ["PR", "Prompt", "生成决策简报", "以结论、证据和行动项交付", "#ffbd82"],
    ],
  },
};

const rankSets = {
  rising: ["codex-cli", "playwright-mcp", "superpowers", "n8n", "browser-use"],
  stars: ["mcp-servers", "dify", "awesome-prompts", "openhands", "comfyui"],
  starter: ["prompt-guide", "agent-browser", "aider", "smolagents", "flowise"],
};

const typeNames = { skill: "Skills", prompt: "提示词", mcp: "MCP", cli: "CLI", agent: "智能体", workflow: "工作流" };
const state = { type: "all", industry: "all", func: "all", query: "", visible: 9, view: "grid", selectedFlow: "content" };
let saved = new Set(JSON.parse(localStorage.getItem("agentverse-saved") || "[]"));
let commandIndex = 0;
let commandItems = [];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function matchesResource(resource) {
  const haystack = [resource.title, resource.tagline, resource.description, resource.industry, resource.func, ...resource.tags].join(" ").toLowerCase();
  return (state.type === "all" || resource.type === state.type)
    && (state.industry === "all" || resource.industry === state.industry)
    && (state.func === "all" || resource.func === state.func)
    && (!state.query || haystack.includes(state.query.toLowerCase()));
}

function resourceCard(resource) {
  const meta = typeMeta[resource.type];
  const isSaved = saved.has(resource.id);
  return `
    <article class="resource-card" data-id="${resource.id}" style="--accent:${meta.color}">
      <div class="card-top">
        <span class="card-type"><i>${meta.code}</i>${meta.label}</span>
        <button class="card-save ${isSaved ? "saved" : ""}" type="button" data-save="${resource.id}" aria-label="${isSaved ? "取消收藏" : "收藏"} ${resource.title}">${isSaved ? "♥" : "♡"}</button>
      </div>
      <h3><a href="${resource.href}" target="_blank" rel="noopener noreferrer">${resource.title}</a></h3>
      <p class="tagline">${resource.tagline}</p>
      <p class="description">${resource.description}</p>
      <div class="card-tags">${resource.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="card-bottom">
        <span class="card-score"><span>✦</span> 热度 ${resource.heat}</span>
        <button class="card-detail" type="button" data-detail="${resource.id}">快速了解 ↗</button>
      </div>
    </article>`;
}

function renderResources({ preserve = false } = {}) {
  if (!preserve) state.visible = 9;
  const filtered = resources.filter(matchesResource);
  const shown = filtered.slice(0, state.visible);
  const grid = $("#resource-grid");
  grid.classList.toggle("list-view", state.view === "list");
  grid.innerHTML = shown.map(resourceCard).join("");
  $("#result-count").textContent = filtered.length;
  $("#empty-state").hidden = filtered.length !== 0;
  $("#load-more").hidden = state.visible >= filtered.length || filtered.length === 0;
}

function resetAllFilters() {
  Object.assign(state, { type: "all", industry: "all", func: "all", query: "", visible: 9 });
  $("#library-search").value = "";
  $("#industry-filter").value = "all";
  $("#function-filter").value = "all";
  $$(".type-tab").forEach((tab) => {
    const active = tab.dataset.type === "all";
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderResources();
}

function setType(type) {
  state.type = type;
  $$(".type-tab").forEach((tab) => {
    const active = tab.dataset.type === type;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderResources();
}

function showDetail(id) {
  const resource = resources.find((item) => item.id === id);
  if (!resource) return;
  const meta = typeMeta[resource.type];
  $("#resource-detail").innerHTML = `
    <div class="detail-hero" style="--detail-color:${meta.color}">
      <span class="card-type"><i style="background:rgba(255,255,255,.55)">${meta.code}</i>${meta.label} · 精选资源</span>
      <h2>${resource.title}</h2>
      <p>${resource.tagline}</p>
    </div>
    <div class="detail-body">
      <p>${resource.description}</p>
      <div class="detail-meta">
        <div><span>行业</span><b>${resource.industry}</b></div>
        <div><span>功能</span><b>${resource.func}</b></div>
        <div><span>社区热度</span><b>${resource.heat} / 100</b></div>
      </div>
      ${resource.command ? `<div class="command-box"><code>${resource.command}</code><button type="button" data-copy-command>复制</button></div>` : ""}
      <div class="detail-actions">
        <a href="${resource.href}" target="_blank" rel="noopener noreferrer">访问官方项目 ↗</a>
        <button type="button" data-save="${resource.id}">${saved.has(resource.id) ? "已收藏" : "加入收藏"}</button>
      </div>
    </div>`;
  const dialog = $("#resource-dialog");
  if (!dialog.open) {
    dialog.dataset.openedAt = String(performance.now());
    dialog.showModal();
  }
  document.body.classList.add("modal-open");
}

function toggleSave(id) {
  if (saved.has(id)) saved.delete(id); else saved.add(id);
  localStorage.setItem("agentverse-saved", JSON.stringify([...saved]));
  renderResources({ preserve: true });
  if ($("#resource-dialog").open) showDetail(id);
  showToast(saved.has(id) ? "已加入收藏" : "已取消收藏");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyText(text, message = "已复制到剪贴板") {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  showToast(message);
}

function renderMarquees() {
  const rows = [
    {
      label: "按行业", color: "#d8ff66",
      items: [
        ["软件研发", "代码与 DevOps", "⌘", "#d8ff66"], ["内容创作", "图文与视频", "✦", "#ffbd82"],
        ["营销电商", "增长与转化", "↗", "#a998ff"], ["教育研究", "学习与知识", "⌁", "#b6d8ff"],
        ["数据分析", "洞察与预测", "◫", "#72dec4"], ["办公效率", "文档与协作", "▤", "#f1d67d"], ["通用", "跨行业能力", "∞", "#e5e4dd"],
      ], filter: "industry",
    },
    {
      label: "按功能", color: "#b6d8ff",
      items: [
        ["搜索研究", "Search & Research", "⌕", "#b6d8ff"], ["内容生成", "Create & Write", "✦", "#ffbd82"],
        ["编码开发", "Code & Test", "&gt;_", "#a998ff"], ["数据连接", "Connect & Query", "⌁", "#72dec4"],
        ["自动化编排", "Orchestrate", "⌘", "#f1d67d"], ["浏览器操作", "Browse & Act", "◎", "#d8ff66"],
      ], filter: "func",
    },
    {
      label: "按类型", color: "#ffbd82",
      items: Object.entries(typeMeta).map(([key, meta]) => [typeNames[key], `${resources.filter((r) => r.type === key).length} 个精选`, meta.code, meta.color, key]), filter: "type",
    },
  ];

  $("#marquee-stack").innerHTML = rows.map((row, rowIndex) => {
    const chips = [...row.items, ...row.items].map((item, index) => {
      const value = item[4] || item[0];
      return `<button class="marquee-chip" type="button" data-radar-filter="${row.filter}" data-radar-value="${value}" style="--chip-color:${item[3]}" ${index >= row.items.length ? "aria-hidden=\"true\" tabindex=\"-1\"" : ""}><i>${item[2]}</i><span><b>${item[0]}</b><small>${item[1]}</small></span></button>`;
    }).join("");
    return `<div class="marquee-row ${rowIndex === 1 ? "reverse" : ""}" style="--label-color:${row.color}"><span class="marquee-label">${row.label}</span><div class="marquee-window"><div class="marquee-track">${chips}</div></div></div>`;
  }).join("");
}

function renderFlow(key) {
  state.selectedFlow = key;
  const flow = flows[key];
  $("#flow-title").textContent = flow.title;
  $("#flow-time").textContent = flow.time;
  $("#flow-summary").textContent = flow.summary;
  $("#flow-steps").innerHTML = flow.steps.map((step) => `
    <article class="flow-step" style="--step-color:${step[4]}">
      <span>${step[0]}</span><small>${step[1]}</small><b>${step[2]}</b><p>${step[3]}</p>
    </article>`).join("");
  $$(".flow-tab").forEach((tab) => {
    const active = tab.dataset.flow === key;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}

function flowText() {
  const flow = flows[state.selectedFlow];
  return `${flow.title}\n${flow.summary}\n\n${flow.steps.map((step, index) => `${index + 1}. ${step[2]}：${step[3]}`).join("\n")}`;
}

function renderRanking(key = "rising") {
  const list = rankSets[key].map((id) => resources.find((resource) => resource.id === id));
  $("#ranking-list").innerHTML = list.map((resource, index) => {
    const meta = typeMeta[resource.type];
    const delta = Math.max(9, resource.heat - 64 - index * 2);
    return `<a class="rank-item" href="${resource.href}" target="_blank" rel="noopener noreferrer">
      <span class="rank-number">0${index + 1}</span><span class="rank-icon" style="--rank-color:${meta.color}">${meta.code}</span>
      <span class="rank-name"><b>${resource.title}</b><span>${resource.tagline}</span></span>
      <span class="rank-type">${meta.label}</span><span class="rank-trend">↗ ${delta}%</span>
    </a>`;
  }).join("");
  $$(".ranking-tabs button").forEach((button) => {
    const active = button.dataset.rank === key;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function commandMatches(query) {
  const normalized = query.trim().toLowerCase();
  return resources.filter((resource) => {
    const haystack = [resource.title, resource.tagline, resource.industry, resource.func, typeNames[resource.type], ...resource.tags].join(" ").toLowerCase();
    return !normalized || haystack.includes(normalized);
  }).slice(0, 8);
}

function renderCommandResults(query = "") {
  commandItems = commandMatches(query);
  commandIndex = Math.min(commandIndex, Math.max(0, commandItems.length - 1));
  $("#command-results").innerHTML = commandItems.length
    ? commandItems.map((resource, index) => {
        const meta = typeMeta[resource.type];
        return `<button class="command-item ${index === commandIndex ? "active" : ""}" type="button" data-command-id="${resource.id}" style="--item-color:${meta.color}">
          <i>${meta.code}</i><span><b>${resource.title}</b><small>${resource.tagline}</small></span><span>${meta.label} ↗</span>
        </button>`;
      }).join("")
    : `<div class="empty-state"><span>⌁</span><h3>没有找到</h3><p>试试更短的关键词。</p></div>`;
}

function openSearchDialog() {
  const dialog = $("#search-dialog");
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("modal-open");
  $("#command-search").value = "";
  commandIndex = 0;
  renderCommandResults();
  requestAnimationFrame(() => $("#command-search").focus());
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
  document.body.classList.remove("modal-open");
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#151714" : "#f5f3ee";
  localStorage.setItem("agentverse-theme", theme);
}

function initTheme() {
  const stored = localStorage.getItem("agentverse-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(stored || preferred);
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((element) => observer.observe(element));
}

function initCounters() {
  const counters = $$("[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.count);
      const started = performance.now();
      const draw = (now) => {
        const progress = Math.min(1, (now - started) / 900);
        entry.target.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(draw);
      };
      requestAnimationFrame(draw);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  counters.forEach((counter) => observer.observe(counter));
}

function bindEvents() {
  $$(".type-tab").forEach((tab) => tab.addEventListener("click", () => setType(tab.dataset.type)));
  $("#library-search").addEventListener("input", (event) => { state.query = event.target.value.trim(); renderResources(); });
  $("#industry-filter").addEventListener("change", (event) => { state.industry = event.target.value; renderResources(); });
  $("#function-filter").addEventListener("change", (event) => { state.func = event.target.value; renderResources(); });
  $("#clear-filters").addEventListener("click", resetAllFilters);
  $("#load-more").addEventListener("click", () => { state.visible += 9; renderResources({ preserve: true }); });
  $("#random-pick").addEventListener("click", () => showDetail(resources[Math.floor(Math.random() * resources.length)].id));

  $("#resource-grid").addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save]");
    const detailButton = event.target.closest("[data-detail]");
    if (saveButton) { event.preventDefault(); toggleSave(saveButton.dataset.save); }
    if (detailButton) showDetail(detailButton.dataset.detail);
  });

  $$(".view-switch button").forEach((button) => button.addEventListener("click", () => {
    state.view = button.dataset.view;
    $$(".view-switch button").forEach((item) => item.classList.toggle("active", item === button));
    renderResources({ preserve: true });
  }));

  $("#marquee-stack").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-radar-filter]");
    if (!chip || chip.getAttribute("aria-hidden") === "true") return;
    resetAllFilters();
    if (chip.dataset.radarFilter === "type") setType(chip.dataset.radarValue);
    if (chip.dataset.radarFilter === "industry") {
      state.industry = chip.dataset.radarValue;
      $("#industry-filter").value = state.industry;
      renderResources();
    }
    if (chip.dataset.radarFilter === "func") {
      state.func = chip.dataset.radarValue;
      $("#function-filter").value = state.func;
      renderResources();
    }
    $("#library").scrollIntoView({ behavior: "smooth" });
  });

  $$(".flow-tab").forEach((tab) => tab.addEventListener("click", () => renderFlow(tab.dataset.flow)));
  $("#copy-flow").addEventListener("click", () => copyText(flowText(), "工作流说明已复制"));
  $$(".ranking-tabs button").forEach((button) => button.addEventListener("click", () => renderRanking(button.dataset.rank)));

  $("#theme-toggle").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  $("#menu-button").addEventListener("click", () => {
    const menu = $("#nav-links");
    const open = menu.classList.toggle("open");
    $("#menu-button").setAttribute("aria-expanded", String(open));
  });
  $$("#nav-links a").forEach((link) => link.addEventListener("click", () => $("#nav-links").classList.remove("open")));

  $("#open-search").addEventListener("click", openSearchDialog);
  $("#command-search").addEventListener("input", (event) => { commandIndex = 0; renderCommandResults(event.target.value); });
  $("#command-results").addEventListener("click", (event) => {
    const item = event.target.closest("[data-command-id]");
    if (!item) return;
    closeDialog($("#search-dialog"));
    showDetail(item.dataset.commandId);
  });
  $("#resource-close").addEventListener("click", () => closeDialog($("#resource-dialog")));
  $("#resource-dialog").addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save]");
    const copyButton = event.target.closest("[data-copy-command]");
    if (saveButton) toggleSave(saveButton.dataset.save);
    if (copyButton) copyText($(".command-box code", $("#resource-dialog")).textContent, "安装命令已复制");
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearchDialog();
    }
    if ($("#search-dialog").open && ["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) {
      event.preventDefault();
      if (event.key === "ArrowDown") commandIndex = Math.min(commandItems.length - 1, commandIndex + 1);
      if (event.key === "ArrowUp") commandIndex = Math.max(0, commandIndex - 1);
      if (event.key === "Enter" && commandItems[commandIndex]) {
        closeDialog($("#search-dialog"));
        showDetail(commandItems[commandIndex].id);
        return;
      }
      renderCommandResults($("#command-search").value);
    }
  });

  $$("dialog").forEach((dialog) => dialog.addEventListener("close", () => {
    if (!$("#search-dialog").open && !$("#resource-dialog").open) document.body.classList.remove("modal-open");
  }));
}

function init() {
  initTheme();
  $("[data-count='64']").dataset.count = resources.length;
  renderResources();
  renderMarquees();
  renderFlow("content");
  renderRanking("rising");
  renderCommandResults();
  bindEvents();
  initReveal();
  initCounters();
}

document.addEventListener("DOMContentLoaded", init);
