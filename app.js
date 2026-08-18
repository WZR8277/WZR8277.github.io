const details = {
  zju: {
    kind: "education",
    meta: "教育 · 2022.09—2025.03",
    title: "浙江大学",
    subtitle: "电子信息硕士 · 全日制",
    lead: "硕士研究方向为人工智能与计算机视觉，围绕医学图像处理完成相关 SCI 研究。",
    tags: ["电子信息", "人工智能", "计算机视觉", "医学图像处理"],
    role: "硕士研究生",
    background: "在浙江大学电子信息专业完成全日制硕士学习，研究重点为人工智能、计算机视觉与医学图像处理。",
    contributions: [
      "围绕计算机视觉与医学图像处理开展研究，完成相关 SCI 工作。",
      "完成研究问题拆解、实验设计、结果对比与误差分析。",
      "完成研究成果整理、SCI 论文写作与结果表达。"
    ],
    approach: ["研究问题拆解与文献调研", "实验设计、复现与误差分析", "SCI 论文写作与结果表达"]
  },
  ustb: {
    kind: "education",
    meta: "教育 · 2018.09—2022.06",
    title: "北京科技大学",
    subtitle: "智能科学与技术本科 · 全日制",
    lead: "以机器学习、算法与工程实践打底，并通过竞赛和科研建立持续解决问题的能力。",
    tags: ["智能科学与技术", "机器学习", "工程基础"],
    role: "本科生",
    background: "本科阶段系统学习人工智能基础，并在小模型 Finetune 方向完成 SCI 研究训练。",
    metrics: [
      { value: "国家级", label: "国家奖学金" },
      { value: "一等奖", label: "全国大学生数学竞赛" },
      { value: "1 篇", label: "小模型 Finetune SCI" }
    ],
    contributions: [
      "完成智能科学与技术专业课程及多项工程实践。",
      "通过数学竞赛训练逻辑推导、计算与快速校验能力。",
      "参与小模型 Finetune 研究，形成早期模型实验与论文经验。"
    ],
    quote: "算法基础、工程实现和研究表达，是后来进入 Agent 系统工作的三条底线。"
  },
  rag: {
    kind: "project",
    meta: "公司项目 · 携程火车票研发部",
    title: "出境火车票多跳检索 Agent",
    subtitle: "全仿真闭世界 · Hybrid RAG · Agentic Multi-hop",
    lead: "面向拆票、改签子单、搜索优惠价、消息事件与规则版本冲突，构建纯文档的 2–4 跳 Agentic RAG，并用固定评测验证答案与证据链。",
    tags: ["BM25 + BGE-M3 / FAISS", "Graph Search", "RRF + CrossEncoder", "LangGraph"],
    role: "项目主导 / Agentic RAG 方案设计与评测",
    images: [
      { src: "./assets/rag-agent-architecture.svg", alt: "出境火车票多跳检索 Agent 的 LangGraph 控制闭环", label: "Agent 控制闭环" },
      { src: "./assets/rag-retrieval-architecture.svg", alt: "出境火车票多跳检索 Agent 的 Hybrid RAG 检索链路", label: "Hybrid RAG 检索链路" }
    ],
    background: "项目基于 64 篇全仿真业务文档、1,920 个结构化 Chunk 与 480 道 2–4 跳 QA 构建闭世界 Benchmark。它只验证冻结文档上的检索与 Agentic Search，不连接生产接口、订单数据、代码仓库或 Elasticsearch。",
    flow: [
      { title: "Query Router", text: "区分单跳、多文档合成与真正条件依赖的多跳问题" },
      { title: "Planner–Executor", text: "按前跳新证据生成下一子问题并调用同一套 Hybrid RAG" },
      { title: "Evidence Registry", text: "登记 doc、chunk、version、scope 与逐 Claim 支持关系" },
      { title: "Verifier", text: "根据证据缺口决定 PASS、差异化 REPLAN 或 ABSTAIN" },
      { title: "Synthesizer", text: "只基于通过校验的原文证据生成逐 Claim 引用答案", accent: true }
    ],
    metrics: [
      { value: "60.8 → 77.9%", label: "Answer Correctness · 292/480 → 374/480" },
      { value: "68.5 → 85.5%", label: "Gold Evidence Slot Recall@5" },
      { value: "111 / 120", label: "Router 控制题正确分流 · 92.5%" }
    ],
    contributions: [
      "构造 64 篇全仿真业务文档、1,920 个结构化 Chunk、480 道 2–4 跳 QA 与 1,272 个 Gold Evidence Slot；用 single-span、删跳、反事实和 next-query dependency 排除伪多跳。",
      "构建 BM25、BGE-M3 / FAISS 与有来源 Graph Search 的三路候选，经 RRF 融合、版本与范围过滤和 CrossEncoder 统一重排；通过 read_chunk 回读父级上下文。",
      "基于 LangGraph 实现 Router 与 Planner–Executor–Evidence Registry–Verifier–Synthesizer 闭环；后续检索必须依赖前跳新发现的字段、对象、规则或版本。",
      "在固定 Corpus、生成模型与评分器的五折 OOF 上，与强 single-shot Hybrid RAG 基线进行逐题配对评测。"
    ],
    approach: [
      "普通事实题和多文档合成题不进入 Agent 循环；只有后一跳必须使用前一跳新变量时才进入 Agentic Search。",
      "Graph path 只用于发现候选，最终 Claim 必须由通过版本、范围与权威性校验后的原文 Chunk 支持。",
      "最多 4 轮规划、8 次检索调用、16 次 read_chunk 与 5 条最终证据；关键证据缺失或版本冲突无法裁决时拒答。"
    ],
    star: {
      S: "出境火车票文档中的字段、状态、事件和版本关系跨文档分散，single-shot 检索容易在证据未闭合时提前作答。",
      T: "在不引入生产数据的前提下，构造可复现的困难多跳评测，并验证迭代检索能否提高答案和证据覆盖。",
      A: "建立三路 Hybrid RAG、条件化 Router、最小一步规划、Evidence Registry、证据缺口驱动的 replan 与拒答机制。",
      R: "Answer Correctness 提升 17.1 个百分点，Gold Evidence Slot Recall@5 提升 17.0 个百分点；Router 控制题 111/120 正确分流。"
    },
    tradeoff: "Agentic RAG 将平均检索调用从 1.0 增至 3.1、相对延迟从 1.00 增至 1.76；因此通过 Router 仅把真正条件依赖的问题送入多跳闭环。"
  },
  "research-skill": {
    kind: "project",
    meta: "公司项目 · Multi-repo Skill",
    title: "需求调研 Skill",
    subtitle: "L1→L2→L3 渐进式检索 · 主—子 Agent 分仓协作",
    lead: "把跨仓需求调研从一次性全局搜索，改造成先定位、再分仓、最后构建证据链的分阶段协作。",
    tags: ["Skill", "Multi-agent", "Code Evidence", "Claude Code"],
    role: "方案设计与实现",
    background: "跨仓需求常同时涉及入口、服务调用和下游实现。直接全量搜索噪声高，单 Agent 又容易在不同仓库间丢失上下文。",
    flow: [
      { title: "L1 语义定位", text: "提炼需求词、模块与入口" },
      { title: "L2 分仓探索", text: "主 Agent 分配仓库任务" },
      { title: "L3 深入取证", text: "子 Agent 追踪符号与调用" },
      { title: "合并报告", text: "去重、冲突检查、证据链", accent: true }
    ],
    metrics: [
      { value: "80%+", label: "跨仓分析准确率" },
      { value: "3 层", label: "渐进式检索" },
      { value: "1→N", label: "主—子 Agent 协作" }
    ],
    contributions: [
      "设计 L1 到 L3 的检索深度升级条件，避免一开始就进入高成本全仓分析。",
      "主 Agent 维护需求目标、仓库边界与全局证据；子 Agent 在单仓内查找文件、符号和调用关系。",
      "融合 Claude Code 推理规范，要求结论绑定可回看的代码位置与推导路径。"
    ],
    approach: [
      "先用需求词和业务实体确定可能的仓库与模块。",
      "各子 Agent 返回高密度摘要和证据，不把完整探索过程灌回主上下文。",
      "合并阶段检查跨仓调用是否闭环，并显式记录尚未证实的假设。"
    ],
    star: {
      S: "跨仓需求同时涉及入口、服务调用和下游实现，全量搜索噪声高，单 Agent 也容易在仓库切换中丢失上下文。",
      T: "让调研过程按信息充分度逐层深入，并把每个结论绑定到可回看的代码证据。",
      A: "设计 L1 语义定位、L2 分仓探索、L3 深入取证三级流程；主 Agent 维护全局目标，子 Agent 在单仓内追踪符号与调用。",
      R: "跨仓分析准确率达到 80%+，最终报告保留调用链、证据位置和未证实假设。"
    },
    quote: "跨仓协作的关键不是增加 Agent 数量，而是让每个 Agent 只承担边界清晰的取证任务。"
  },
  memoworld: {
    kind: "paper",
    meta: "研究论文 · AAAI 2027 在投",
    title: "MemoWorld",
    subtitle: "Training Transferable Memory for LLM Agents by Evolving Their Worlds",
    lead: "固定任务流会奖励从表面线索到记忆动作的捷径。MemoWorld 让训练世界沿真实的记忆失败而演化。",
    tags: ["Agent Memory", "World Evolution", "Exact Oracle", "Curriculum"],
    role: "共一作者 · 问题定义、方法与实验",
    image: { src: "./assets/paper-memoworld-2027.png", alt: "MemoWorld 论文首页" },
    background: "记忆控制器在固定任务流中可能学到‘最新信息总应覆盖’等表面规则，却无法泛化到临时覆盖回滚、分支、冲突与遗忘等未见依赖结构。论文将这一现象定义为 static-world overfitting。",
    flow: [
      { title: "Executable Worlds", text: "DSL 编译隐藏状态与延迟后果" },
      { title: "Exact Oracle", text: "定位最小充分记忆与失败模体" },
      { title: "Failure Fingerprint", text: "把错误归因到记忆动作" },
      { title: "World Evolution", text: "以留出兄弟实例的学习进步准入", accent: true }
    ],
    metrics: [
      { value: "+12.2", label: "三项未见基准 Zero-shot SSR" },
      { value: "5.4×", label: "更低组合泛化差距" },
      { value: "+4.5", label: "MemoryArena native success" }
    ],
    contributions: [
      "提出‘记忆依赖模体’作为记忆泛化单元，并用精确 Oracle 区分记忆错误与普通推理错误。",
      "构建可执行 world DSL，使写入、修订、分支、临时覆盖与遗忘等依赖结构可被控制和组合。",
      "根据失败 fingerprint 生成候选世界，仅当其在永久留出的兄弟实例上产生学习进步时进入训练 archive。",
      "通过匹配任务量、token 长度和基础 actor 难度的控制实验，隔离 motif coverage 的作用。"
    ],
    approach: [
      "训练 actor 保持冻结，只更新轻量 Memory Controller。",
      "FMC 衡量训练中被 Oracle 判定为必要的模体覆盖，MGG 衡量 ID 与组合 OOD 的差距。",
      "外部基准与无记忆子集共同检查 transfer 及能力副作用。"
    ],
    star: {
      S: "固定训练流会让记忆控制器学习表面线索到记忆动作的捷径，遇到未见依赖结构时失效。",
      T: "构造能暴露真实记忆失败、并持续提升组合泛化能力的训练环境。",
      A: "以可执行 world DSL、Exact Oracle 和 failure fingerprint 定位失败模体，再用留出兄弟实例上的学习进步筛选演化世界。",
      R: "三项未见基准 Zero-shot SSR 平均提升 12.2，组合泛化差距降低 5.4 倍，MemoryArena native success 提升 4.5。"
    },
    tradeoff: "一个无梯度架构没有获得收益，说明覆盖不是充分条件；记忆结构还必须能被控制器表示和学习。",
    quote: "To train memory that transfers, evolve the world, not the dataset.",
    link: { url: "./assets/mnemoworld-interview-deck.pdf", label: "查看研究汇报 · 加密 PDF" }
  },
  evowork: {
    kind: "project",
    meta: "公司项目 · 携程火车票研发部",
    title: "EvoWork",
    subtitle: "自进化 Agent Harness · Runtime / Memory / Skills / Eval / Safety",
    lead: "从零实现 Runtime、Memory、Skills 自进化、Eval 与安全五大子系统，以出境火车票订单状态核验与高噪日志证据定位为领域工作负载，打通 Agent 自改进闭环。",
    tags: ["Advanced Runtime", "Layered Memory", "Skill Evolution", "Eval & Safety"],
    role: "项目主导 / 系统设计与独立实现",
    images: [
      { src: "./assets/evowork-architecture.svg", alt: "EvoWork 六层架构与领域只读边界", label: "六层架构与只读领域边界" }
    ],
    background: "传统 Agent Loop 往往把工具调度、上下文、评测和权限揉进核心循环，导致新增工具侵入主流程、长任务上下文膨胀，失败也难以转化为可验证改进。EvoWork 位于 C 端内部研发与订单运营侧，只编排已有授权的只读订单、中台状态与 C 端日志查询能力。",
    flow: [
      { title: "评测驱动", text: "固定任务集与隔离测试集暴露稳定失败" },
      { title: "失败归因", text: "分析轨迹并定位 Runtime、Memory 或 Skill 问题" },
      { title: "技能提案", text: "从失败模式生成可审查的新技能或修订" },
      { title: "沙箱回归", text: "以成功率门控验证收益并检查副作用" },
      { title: "确认集成", text: "用户确认后进入技能库并持续回归", accent: true }
    ],
    metrics: [
      { value: "−45%", label: "多工具任务 LLM 调用总量" },
      { value: "12.3k → 5.6k", label: "长程任务单任务 Token" },
      { value: "52% → 80%", label: "6 轮技能进化后任务成功率" }
    ],
    contributions: [
      "Runtime 与工具调度：设计 Dispatch Table 动态注册、Batch Tool Calling 与 Interrupt 中断恢复机制，新增工具平均约 30 行即可接入核心循环；在 120 任务 × 3 个固定 seed 的配对评测中，LLM 调用总量降低 45%，端到端耗时降低 38%。",
      "Memory 与 Context Engineering：构建 Episodic JSONL + SemanticVector 双层记忆，并实现 Context 四操作（Write / Select / Compress / Isolate）与工具结果外部化；在 80 组多步骤任务 × 5 个固定 seed 的评测中，单任务 Token 从 12.3k 降至 5.6k，成功率从 71% 提升至 76%。",
      "Eval 驱动的技能自进化：搭建轨迹分析、失败归因、技能提案、沙箱回归与用户确认集成流程，以 60 Case 隔离测试集进行成功率门控。6 轮迭代后成功率从 52% 提升至 80%，失败自动归因覆盖率 85%，技能提案回归通过率 60%。",
      "安全与权限：实现三级权限模型、Dry-run 副作用预览与成本守卫；预设高危操作 100% 被权限门禁拦截或转审批，单任务成本上限 $0.5，实际越权执行 0 次。"
    ],
    approach: [
      "Dispatch Table 将工具发现、Schema 与执行器从 Agent Loop 解耦；Batch Tool Calling 合并无依赖调用，Interrupt 保存可恢复状态。",
      "Episodic JSONL 保留可回放事件，SemanticVector 负责语义召回；Context 四操作按任务阶段主动控制上下文规模。",
      "所有技能提案先进入隔离沙箱，只有通过固定回归集且得到用户确认后才集成，避免自进化直接污染生产技能。",
      "权限、Dry-run 与成本守卫位于统一执行边界，在工具真正产生副作用前完成校验。"
    ],
    star: {
      S: "传统 Agent Loop 扩展性差，工具调度、长上下文、失败归因和权限控制相互耦合，改进难以被稳定验证。",
      T: "构建可扩展、可恢复、可评测且受安全边界约束的 Agent Runtime，并让失败能够转化为可回归的技能改进。",
      A: "拆分五大子系统，以动态工具注册、批量调用、双层记忆、主动压缩、隔离评测和用户确认门控组成自改进闭环。",
      R: "多工具任务 LLM 调用总量降低 45%、端到端耗时降低 38%、长任务 Token 降低 54.5%；6 轮技能进化后成功率提升 28 个百分点。"
    },
    tradeoff: "技能进化不会直接自动写入生产技能库：沙箱回归与用户确认增加了一步延迟，但把错误提案和能力回退限制在隔离环境内。"
  },
  workbuddy: {
    kind: "opensource",
    meta: "开源项目 · 核心作者",
    title: "learn-workbuddy",
    subtitle: "Agent Harness · 分层 Memory · RAG / Context",
    lead: "主导 learn-workbuddy 中 Agent Harness、分层 Memory 与 RAG/Context 关键章节设计与实现。",
    tags: ["Agent Harness", "Layered Memory", "RAG / Context", "Regression Evaluation"],
    role: "核心作者 / 章节设计与实现",
    background: "项目以可运行章节拆解桌面 Agent 的工程边界。我的贡献集中在运行循环与工具协议、跨会话记忆，以及可解释检索和回归评测。",
    flow: [
      { title: "Agent Harness", text: "有界 Loop、工具注册、权限、错误与 Replay" },
      { title: "Layered Memory", text: "user / workspace / session 三层作用域" },
      { title: "RAG / Context", text: "来源、作用域、评分与入选原因" },
      { title: "Regression", text: "Recall@K、MRR 与稳定回归", accent: true }
    ],
    metrics: [
      { value: "有界", label: "Agent Loop / Transcript Replay" },
      { value: "3 层", label: "user / workspace / session" },
      { value: "2 项", label: "Recall@K / MRR 回归指标" }
    ],
    contributions: [
      "Agent Harness：设计并实现有界 Agent Loop，统一工具注册与参数校验、权限决策、结构化错误及 Transcript Replay。",
      "Memory：设计并实现 user / workspace / session 分层记忆体系，覆盖作用域隔离、持久化、跨重启恢复和泄漏防护。",
      "RAG / Context：设计并实现可解释检索与上下文组装，呈现召回来源、作用域、评分及入选原因，并以 Recall@K、MRR 建立检索回归。"
    ],
    approach: [
      "将工具注册、Schema 校验、权限判断和错误结构收敛到统一调用边界。",
      "以分层作用域约束记忆读写，支持持久化、恢复和跨作用域泄漏防护。",
      "检索结果保留来源、评分和选择理由，并用固定查询集持续执行 Recall@K / MRR 回归。"
    ],
    star: {
      S: "桌面 Agent 的运行循环、权限、记忆与上下文往往被揉成一个整体，学习者难以单独理解和验证。",
      T: "把关键工程边界拆成可运行章节，并让每一章都能被测试、回放和逐步扩展。",
      A: "主导 Agent Harness、分层 Memory 与 RAG/Context 章节，统一工具协议和错误结构，建立三层记忆作用域及检索回归。",
      R: "形成覆盖有界 Loop、Transcript Replay、跨重启记忆恢复与 Recall@K / MRR 的可运行教学实现。"
    },
    link: { label: "在 GitHub 查看 learn-workbuddy", url: "https://github.com/adongwanai/learn-workbuddy" }
  }
};

const backdrop = document.querySelector("#detail-backdrop");
const modal = document.querySelector("#detail-modal");
const content = document.querySelector("#detail-content");
const closeButton = document.querySelector(".modal-close");
const viewer = document.querySelector("#image-viewer");
const viewerImage = document.querySelector("#viewer-image");
const viewerClose = document.querySelector(".viewer-close");

let returnFocus = null;
let returnHash = "";

function flowMarkup(items = [], title = "系统链路") {
  if (!items.length) return "";
  return `<section class="detail-section"><h3>${title}</h3><div class="detail-flow">${items.map(item => `
    <div class="flow-step${item.accent ? " is-accent" : ""}"><b>${item.title}</b><span>${item.text}</span></div>`).join("")}</div></section>`;
}

function metricsMarkup(items = []) {
  if (!items.length) return "";
  return `<section class="detail-section detail-results"><h3>核心指标</h3><div class="detail-metrics">${items.map(item => `
    <div class="detail-metric"><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}</div></section>`;
}

function listMarkup(title, items = []) {
  if (!items.length) return "";
  return `<section class="detail-section"><h3>${title}</h3><ol class="detail-list">${items.map(item => `<li>${item}</li>`).join("")}</ol></section>`;
}

function starMarkup(star) {
  if (!star) return "";
  const labels = { S: "背景", T: "任务", A: "行动", R: "结果" };
  return `<section class="detail-section"><h3>STAR 提炼</h3><div class="star-grid">${Object.entries(star).map(([key, value]) => `
    <article class="star-card"><div class="star-card-head"><b>${key}</b><span>${labels[key]}</span></div><p>${value}</p></article>`).join("")}</div></section>`;
}

function imageMarkup(image) {
  if (!image) return "";
  return `<figure class="detail-paper">
    <button type="button" data-full-image="${image.src}" data-full-alt="${image.alt}" aria-label="全屏查看${image.alt}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy"><span><b>论文首页</b><small>点击全屏查看</small></span>
    </button>
  </figure>`;
}

function galleryMarkup(images = []) {
  if (!images.length) return "";
  return `<section class="detail-section detail-gallery" aria-label="项目架构图">
    <h3>项目架构图</h3>
    <div class="detail-gallery-grid">${images.map(image => `
      <figure>
        <button type="button" data-full-image="${image.src}" data-full-alt="${image.alt}" aria-label="全屏查看${image.alt}">
          <img src="${image.src}" alt="${image.alt}" loading="lazy">
          <span><b>${image.label}</b><small>项目文档架构 · 点击放大</small></span>
        </button>
      </figure>`).join("")}
    </div>
  </section>`;
}

function renderDetail(detail) {
  const isPaper = detail.kind === "paper";
  const tags = detail.tags?.length ? `<div class="detail-tags">${detail.tags.map(tag => `<span>${tag}</span>`).join("")}</div>` : "";
  const intro = `<div class="detail-intro"><p>${detail.lead}</p>${tags}</div>`;
  const leadBlock = isPaper
    ? `<div class="detail-paper-overview">${imageMarkup(detail.image)}<div class="detail-paper-summary">${intro}${metricsMarkup(detail.metrics)}</div></div>`
    : `${imageMarkup(detail.image)}${intro}${metricsMarkup(detail.metrics)}${galleryMarkup(detail.images)}`;
  const contextTitle = detail.kind === "education" ? "学习与研究" : isPaper ? "研究问题" : "背景与痛点";
  const context = detail.background ? `<article class="detail-context"><h3>${contextTitle}</h3><p>${detail.background}</p></article>` : "";
  const role = detail.role ? `<article class="detail-context detail-role"><h3>${isPaper ? "作者角色" : "我的角色"}</h3><strong>${detail.role}</strong></article>` : "";
  const overview = context || role ? `<section class="detail-overview">${context}${role}</section>` : "";
  const tradeoff = detail.tradeoff ? `<section class="detail-section"><h3>${isPaper ? "研究边界" : "技术权衡"}</h3><blockquote class="detail-quote">${detail.tradeoff}</blockquote></section>` : "";
  const link = detail.link ? `<section class="detail-section"><a class="detail-link" href="${detail.link.url}" target="_blank" rel="noreferrer">${detail.link.label} ↗</a></section>` : "";

  return `
    <header class="detail-head">
      <p class="entry-meta">${detail.meta}</p>
      <h2 id="detail-title">${detail.title}</h2>
      <p class="paper-title">${detail.subtitle}</p>
    </header>
    <div class="detail-body">
      ${leadBlock}
      ${overview}
      ${flowMarkup(detail.flow, isPaper ? "方法框架" : "系统链路")}
      ${listMarkup(isPaper ? "核心贡献" : detail.kind === "education" ? "主要经历" : "技术方案", detail.contributions)}
      ${listMarkup(isPaper ? "实验与验证" : detail.kind === "education" ? "能力沉淀" : "实现要点", detail.approach)}
      ${starMarkup(detail.star)}
      ${tradeoff}
      ${link}
    </div>`;
}

function openDetail(id, trigger) {
  const detail = details[id];
  if (!detail) return;
  returnFocus = trigger || document.activeElement;
  returnHash = location.hash && !location.hash.startsWith("#detail=") ? location.hash : "";
  content.innerHTML = renderDetail(detail);
  backdrop.hidden = false;
  document.body.classList.add("modal-open");
  history.replaceState(null, "", `#detail=${id}`);
  modal.focus();

  content.querySelectorAll("[data-full-image]").forEach(fullImageButton => {
    fullImageButton.addEventListener("click", () => openViewer(fullImageButton.dataset.fullImage, fullImageButton.dataset.fullAlt));
  });
}

function closeDetail() {
  if (backdrop.hidden) return;
  backdrop.hidden = true;
  document.body.classList.remove("modal-open");
  history.replaceState(null, "", returnHash || `${location.pathname}${location.search}`);
  if (returnFocus instanceof HTMLElement) returnFocus.focus();
}

function openViewer(src, alt) {
  viewerImage.src = src;
  viewerImage.alt = alt;
  viewer.hidden = false;
  viewerClose.focus();
}

function closeViewer() {
  if (viewer.hidden) return;
  viewer.hidden = true;
  viewerImage.src = "";
  modal.focus();
}

document.querySelectorAll("[data-detail]").forEach(card => {
  card.addEventListener("click", () => openDetail(card.dataset.detail, card));
});

const filterTabs = document.querySelectorAll("[data-filter]");
const timelineItems = document.querySelectorAll(".timeline-item[data-kind]");

filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    filterTabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    timelineItems.forEach(item => {
      item.hidden = filter !== "all" && item.dataset.kind !== filter;
    });
  });
});

closeButton.addEventListener("click", closeDetail);
backdrop.addEventListener("click", event => { if (event.target === backdrop) closeDetail(); });
viewerClose.addEventListener("click", closeViewer);
viewer.addEventListener("click", event => { if (event.target === viewer) closeViewer(); });

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (!viewer.hidden) closeViewer();
  else if (!backdrop.hidden) closeDetail();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach(item => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

const detailHash = location.hash.match(/^#detail=([\w-]+)$/);
if (detailHash && details[detailHash[1]]) openDetail(detailHash[1], null);
