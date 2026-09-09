# AgentVerse Hub

AgentVerse Hub 是一份面向中文开发者的 AI 能力索引，也是一套可以在浏览器本地运行的技术栈决策工具。

线上地址：https://fuzzylogic112.github.io/agentverse-hub/

## 核心能力

- 200+ 个官方资源入口，覆盖 Skills、提示词、MCP、CLI、智能体、工作流、API、RAG、评测和推理基础设施
- 使用专属生成的产品级生态主视觉，建立更鲜明的品牌识别与视觉层级
- 类型、行业、决策要求三组筛选与全文搜索
- 本地技术栈工作台：根据目标、运行环境和约束生成四层方案，并支持逐层替换
- 最多三个资源的同维度对比、浏览器本地收藏与技术栈存档
- 公开的 100 分信任评分、评分明细和机器可读方法说明
- GitHub Actions 每周自动核验全部官方入口并发布公开记录
- 为搜索引擎和智能体准备的 `llms.txt`、`data/health.json` 与 `data/methodology.json`

所有个性化状态只写入浏览器 `localStorage`，项目不包含追踪脚本。

## 本地预览

```bash
python -m http.server 4173
```

访问 `http://localhost:4173`。链接健康数据可手动刷新：

```bash
node scripts/verify-links.mjs
```

## 部署

项目是无构建步骤的纯静态站点。推送到 `main` 后由 GitHub Pages 发布；每周验链工作流会在数据变化时自动提交新的 `data/health.json`。
