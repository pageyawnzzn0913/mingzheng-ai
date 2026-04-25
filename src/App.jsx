import React, { useState } from "react";

const HOME_QR_CODE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAAFICAIAAAC9dvBkAAAGr0lEQVR4nO3dQY4cNxAAQa+h/39ZPujcEAiTKDIRcRZ6RloleKgt9s/v37//AVr+nf4CwH7ChiBhQ5CwIUjYECRsCBI2BAkbgoQNQcKGIGFDkLAhSNgQJGwIEjYECRuChA1BwoYgYUOQsCFI2BAkbAgSNgQJG4KEDUHChiBhQ5CwIUjYECRsCBI2BP06/QE/Pz+nP2KLr/eEf33/qfeKr36f039+1a7/D6vf/zan//84sSFI2BAkbAgSNgQJG4KEDUHChqDjc+wvt82Bv6x+z9Nz4NXnTM23T8+rp56zamqu7sSGIGFDkLAhSNgQJGwIEjYECRuCxubYX26bf345PZ88PW9fdXp/++s5r++HT3FiQ5CwIUjYECRsCBI2BAkbgoQNQdfNsW+za568Oo+d2nN+fV+dP5zYECRsCBI2BAkbgoQNQcKGIGFDkDn2X0zNe2/zyvvD+cOJDUHChiBhQ5CwIUjYECRsCBI2BF03x359/nn6nu3Tc/XT8+rbfr63fZ9dnNgQJGwIEjYECRuChA1BwoYgYUPQ2Bz79Puldzk9T971/Ne/z9T7t6uc2BAkbAgSNgQJG4KEDUHChiBhQ9DxOfbr+667vv/pOerp+72n5s+rXv//tosTG4KEDUHChiBhQ5CwIUjYECRsCLruXvHT+8Zfds1jp+bet91bvuq2OfnU/fC7OLEhSNgQJGwIEjYECRuChA1Bwoag6+4Vn3rf8m1z3al56W171FPz7amf+y5ObAgSNgQJG4KEDUHChiBhQ5CwIei6fewvU3PjXXvRu77/1Puud+2ln37Oqlfm0quc2BAkbAgSNgQJG4KEDUHChiBhQ9DxOfbpuevp53w5vZ982/x81a6f+5fTv3fwOic2BAkbgoQNQcKGIGFDkLAhSNgQNLaPvWsfeNfzp/aBq07fEz71+xFTz1/lxIYgYUOQsCFI2BAkbAgSNgQJG4Kefz/21Hx71W3721P3je8y9XO8bX7+xYkNQcKGIGFDkLAhSNgQJGwIEjYE/Uzti56+//mVe7lP7y1P3cf+yu8pnH7O6vN3cWJDkLAhSNgQJGwIEjYECRuChA1Bx+fYt+3H3nZP+On58K4/P2VqnnzbPH+VExuChA1BwoYgYUOQsCFI2BAkbAgau1f8y+m59NSe8Opzpr7P1Oeetvr3emVe/cWJDUHChiBhQ5CwIUjYECRsCBI2BD2zjz211z117/dte+ZT76Neddu/2+rn7uLEhiBhQ5CwIUjYECRsCBI2BAkbgsb2sW+7b3yX1c89/Z7w0/PSV+bbX16/d/2LExuChA1BwoYgYUOQsCFI2BAkbAg6Psc+vW+86rb3Ua9+7uqff2Xfe9XU/Pm2OfwXJzYECRuChA1BwoYgYUOQsCFI2BA0dq/4qtNz4NvuOX/9c6vv/b7t9zK+OLEhSNgQJGwIEjYECRuChA1Bwoag6/axp/auv9w2v516X/dpt829p56/ixMbgoQNQcKGIGFDkLAhSNgQJGwIOj7HfuU92F/fZ9f+7Stz+9Nen7d/ue3edSc2BAkbgoQNQcKGIGFDkLAhSNgQdN0+9upzdv35L7fN4W+bA++a076y9/4KJzYECRuChA1BwoYgYUOQsCFI2BD0zD726Xnp1HNeuTd76vcRds35T7vtvnEnNgQJG4KEDUHChiBhQ5CwIUjYEDS2j/3Kc07PdU975f3kp+fhq5/7+p62ExuChA1BwoYgYUOQsCFI2BAkbAga28e+zen3Y78+z181NQd+5R7105zYECRsCBI2BAkbgoQNQcKGIGFD0PE59pepvdape6pvu3971+eenqu//vsCU3NvJzYECRuChA1BwoYgYUOQsCFI2BA0Nsf+MjWP3fX80/eQT71v/LZ7tm/bi77t38eJDUHChiBhQ5CwIUjYECRsCBI2BF03x77N1Dz8FVNz9al96dvm1V+c2BAkbAgSNgQJG4KEDUHChiBhQ5A59l/smq/umn/u2uv+8sr7pU/vvX/ZNZ8/Pfd2YkOQsCFI2BAkbAgSNgQJG4KEDUHXzbFv22s9PRddNbW3/OW2/eTb9rrdKw5sI2wIEjYECRuChA1BwoYgYUPQ2Bz7tvcbn7ZrT3vqvu6p/ecvu/4dpvbP7WMDy4QNQcKGIGFDkLAhSNgQJGwI+rlt/xn4/5zYECRsCBI2BAkbgoQNQcKGIGFDkLAhSNgQJGwIEjYECRuChA1BwoYgYUOQsCFI2BAkbAgSNgQJG4KEDUHChiBhQ5CwIUjYECRsCBI2BAkbgoQNQcKGIGFD0H85XPzRvtHafgAAAABJRU5ErkJggg==";

function Icon({ type, size = 22 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    home: <><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></>,
    upload: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8 12 3 7 8"/><path d="M12 3v12"/></>,
    notice: <><path d="M4 4h16v16H4z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></>,
    back: <><path d="m15 18-6-6 6-6"/></>,
    trash: <><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5"/><path d="M14 11v5"/></>,
    right: <><path d="m9 18 6-6-6-6"/></>,
    flame: <><path d="M8.5 14.5A4.5 4.5 0 0 0 17 12c0-3.5-3-5.5-4-9-2 2-2.5 4-1.5 6-1.6-.5-2.8-1.7-3.5-3-1.5 2-2 3.6-2 5.5a4.5 4.5 0 0 0 2.5 4Z"/><path d="M12 22a4 4 0 0 0 4-4c0-1.5-.7-2.7-2-4 .2 2-1.4 3-2 3s-2.2-1-2-3c-1.3 1.3-2 2.5-2 4a4 4 0 0 0 4 4Z"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/></>,
    spark: <><path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3Z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></>,
    qr: <><path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M3 14h7v7H3z"/><path d="M14 14h2"/><path d="M19 14h2"/><path d="M14 17h7"/><path d="M14 21h3"/><path d="M20 21h1"/></>,
  };
  return <svg {...common}>{paths[type] || paths.home}</svg>;
}

const initNotices = [
  {
    title: "江西新余佳乐苑临街店铺“1·24”特别重大火灾事故",
    tag: "官方调查报告",
    summary: "国务院调查组认定，该事故由违法违规改变地下空间用途、冷库施工起火、防火分隔缺失、培训机构和宾馆违规经营、属地监管失职等多因素导致。事故造成39人死亡、9人受伤。",
    source: "中国政府网 / 应急管理部",
    result: "已公布调查报告",
    score: 96,
    timeline: ["2024-01-24 事故发生", "国务院调查组成立", "2024-09-21 调查报告公布", "提出整改和防范措施"],
    evidenceLinks: [
      { title: "事故调查报告 PDF", url: "https://www.mem.gov.cn/gk/zfxxgkpt/fdzdgknr/202409/P020240921579004545441.pdf", desc: "应急管理部公开的国务院调查组事故调查报告，包含事故经过、原因认定、责任追究和整改建议。" }
    ]
  },
  {
    title: "陕西商洛“7·19”高速公路桥梁垮塌灾害",
    tag: "调查评估报告",
    summary: "应急管理部调查报告栏目收录该灾害调查评估报告，适合作为官方通报板块的道路交通与自然灾害类案例。",
    source: "中华人民共和国应急管理部",
    result: "已发布调查评估报告",
    score: 94,
    timeline: ["灾害发生", "部门组织调查评估", "2025-03-27 报告发布", "推动整改落实"],
    evidenceLinks: [
      { title: "灾害调查评估报告 PDF", url: "https://www.mem.gov.cn/gk/zfxxgkpt/fdzdgknr/202503/P020250507619451391681.pdf", desc: "应急管理部公开的陕西商洛高速公路桥梁垮塌灾害调查评估报告。" }
    ]
  },
  {
    title: "宁夏银川富洋烧烤店“6·21”特别重大燃气爆炸事故",
    tag: "官方调查报告",
    summary: "应急管理部公开了该事故调查报告，可用于展示重大安全事故从调查、追责到整改的完整闭环。",
    source: "中华人民共和国应急管理部",
    result: "事故调查报告已公开",
    score: 95,
    timeline: ["事故发生", "事故调查", "事故调查报告公开", "整改措施推进"],
    evidenceLinks: [
      { title: "事故调查报告 PDF", url: "https://www.mem.gov.cn/gk/sgcc/tbzdsgdcbg/2024dcbg/202401/P020240127592753517397.pdf", desc: "应急管理部公开的宁夏银川富洋烧烤店燃气爆炸事故调查报告，包含事故原因和责任认定。" }
    ]
  },
  {
    title: "市场监管总局食品安全专题新闻发布会",
    tag: "食品安全通报",
    summary: "市场监管总局从2025年起定期举办食品安全专题新闻发布会，通报食品安全监管动态并发布典型案例。",
    source: "国家市场监督管理总局",
    result: "监管动态持续发布",
    score: 90,
    timeline: ["发布监管安排", "通报食品安全情况", "发布典型案例", "回应公众关切"],
    evidenceLinks: [
      { title: "食品安全专题新闻发布会实录", url: "https://www.samr.gov.cn/xw/xwfbt/art/2025/art_ee3145d2ae484b879213f2a46ca0ee6c.html", desc: "国家市场监督管理总局官网发布的食品安全专题新闻发布会实录。" }
    ]
  },
  {
    title: "网络谣言核验：以中国互联网联合辟谣平台为权威信源",
    tag: "辟谣入口",
    summary: "中国互联网联合辟谣平台持续汇总各地辟谣信息，可作为求真板块的权威对照库。",
    source: "中国互联网联合辟谣平台",
    result: "持续更新辟谣信息",
    score: 88,
    timeline: ["用户提交疑似谣言", "平台检索权威辟谣", "比对官方回应", "形成求真结论"],
    evidenceLinks: [
      { title: "中国互联网联合辟谣平台首页", url: "https://www.piyao.org.cn/", desc: "聚合权威辟谣信息、联动辟谣平台和热点谣言澄清。" },
      { title: "关于中国互联网联合辟谣平台", url: "https://www.piyao.org.cn/pypt_gywm/index.html", desc: "平台介绍其宗旨为发布权威辟谣信息、提升网民媒介素养、营造清朗网络空间。" }
    ]
  }
];

const initHelps = [
  { name: "儿童手术援助", target: 80000, raised: 53620, desc: "演示案例：医院诊断证明、费用清单、监护人信息已提交，等待公益机构或平台审核。", verified: "材料已核验", score: 72 },
  { name: "暴雨受灾家庭临时安置", target: 50000, raised: 31880, desc: "演示案例：社区证明、受灾照片、临时住宿费用清单已提交，用于展示凭证上传与资金流向透明。", verified: "社区证明已核验", score: 68 },
];

function Pill({ children, type = "blue" }) {
  const map = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    red: "bg-rose-50 text-rose-700",
    slate: "bg-slate-100 text-slate-700",
    purple: "bg-violet-50 text-violet-700",
  };
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${map[type]}`}>{children}</span>;
}

function Card({ children, dark = false }) {
  return <div className={`rounded-[28px] p-5 shadow-sm ${dark ? "bg-slate-900 text-white" : "bg-white text-slate-900"}`}>{children}</div>;
}

function ScoreBar({ score = 50 }) {
  const tone = score >= 80 ? "bg-emerald-500" : score >= 60 ? "bg-blue-500" : score >= 40 ? "bg-amber-500" : "bg-rose-500";
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
        <span>可信度评分</span><span>{score}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div className={`h-3 rounded-full ${tone}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}

function UserBadge({ role = "普通用户" }) {
  const type = role.includes("专业") ? "purple" : role.includes("核验") ? "green" : role.includes("认证") ? "blue" : "slate";
  return <Pill type={type}>{role}</Pill>;
}

function EvidenceBox({ links = [] }) {
  if (!links.length) {
    return <p className="text-sm text-slate-400">暂无外部证据链接，可由用户或核验者补充。</p>;
  }
  return (
    <div className="space-y-3">
      {links.map((link, idx) => (
        <div key={idx} className="rounded-2xl bg-white p-3 text-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-bold text-slate-900">{link.title}</p>
              <p className="mt-1 text-slate-500">{link.desc}</p>
            </div>
            <Icon type="link" size={18} />
          </div>
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-3 block w-full rounded-2xl bg-blue-50 py-2 text-center text-sm font-bold text-blue-700"
          >
            打开原文
          </a>
        </div>
      ))}
    </div>
  );
}


function AIEnhanceCard({ onStart }) {
  return (
    <Card>
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white"><Icon type="spark" size={20} /></div>
        <div>
          <h2 className="text-lg font-black">AI 核验引擎</h2>
          <p className="text-xs text-slate-500">模拟多源检索、证据链评分、风险提示</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded-2xl bg-slate-50 p-3"><b className="block text-lg text-slate-900">3s</b>生成结论</div>
        <div className="rounded-2xl bg-slate-50 p-3"><b className="block text-lg text-slate-900">5类</b>权威来源</div>
        <div className="rounded-2xl bg-slate-50 p-3"><b className="block text-lg text-slate-900">96%</b>最高可信</div>
      </div>
      <button onClick={onStart} className="mt-4 w-full rounded-2xl bg-blue-600 py-3 font-bold text-white">演示 AI 自动核验</button>
    </Card>
  );
}



function HomeQRCodeCard() {
  return (
    <Card>
      <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
        <Icon type="qr" size={18} /> 扫码体验
      </div>
      <div className="mt-4 flex flex-col items-center">
        <img
          src={HOME_QR_CODE}
          alt="明证 AI 手机演示二维码"
          className="h-44 w-44 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"
        />
        <p className="mt-3 text-center text-sm font-bold text-slate-900">手机扫码打开 Demo</p>
        <p className="mt-1 break-all rounded-2xl bg-slate-50 p-3 text-center text-xs font-semibold text-blue-700">
          https://mingzheng-ai.vercel.app
        </p>
      </div>
    </Card>
  );
}

function DetailView({ post, onBack, onDelete, onSupport, onAdvanceReview, onAddTruthEvidence, truthEvidenceFiles, onTruthEvidenceFiles, truthEvidenceNote, onTruthEvidenceNote, comments, commentText, commentType, onCommentInput, onCommentTypeInput, onAddComment, onDeleteComment, currentUserName, currentUserRole, isLoggedIn, requireLogin }) {
  const { type, item } = post;
  const isTruth = type === "truth";
  const isNotice = type === "notice";
  const isHelp = type === "help";
  const title = isTruth ? item.text : isHelp ? item.name : item.title;
  const badge = isTruth ? item.result || "暂无定论" : isHelp ? item.verified : item.tag;
  const score = item.score || (isNotice ? 90 : isHelp ? 72 : 50);
  const evidenceList = item.evidence || ["用户提交内容", "等待更多来源", "可由评论区补充证据"];
  const evidenceLinks = item.evidenceLinks || [];
  const badgeType = badge === "存在误导风险" ? "red" : badge === "待审核" || badge === "待核验" || badge === "用户上传" ? "amber" : "green";
  const percent = isHelp ? Math.min(100, Math.round((item.raised / item.target) * 100)) : 0;

  return (
    <div className="space-y-4">
      <button onClick={onBack} className="flex items-center gap-1 text-sm font-bold text-blue-700">
        <Icon type="back" size={18} /> 返回列表
      </button>

      <Card>
        <Pill type={badgeType}>{badge}</Pill>
        <h2 className="mt-4 text-2xl font-black leading-snug">{title}</h2>
        <div className="mt-3"><ScoreBar score={score} /></div>
        {isLoggedIn && (
          <div className="mt-4 rounded-2xl bg-slate-50 p-3 text-xs leading-5 text-slate-600">
            当前身份：<b className="text-slate-900">{currentUserRole}</b>
            {currentUserRole === "普通用户" && " · 可浏览、评论、提交求真、支持求助"}
            {currentUserRole === "已认证用户" && " · 可补充证据、发起求助、录入通报"}
            {currentUserRole === "志愿核验者" && " · 可发表核验评论、推进审核流程"}
            {currentUserRole === "专业人士" && " · 可发布最终真伪结论"}
          </div>
        )}

        {isTruth && (
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
            <div className="rounded-2xl bg-blue-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-slate-900">审核真伪流程</p>
                  <p className="mt-1 text-xs text-slate-500">当前状态：{item.reviewStatus || "待核验"}</p>
                </div>
                <Pill type="blue">{item.result || "待核验"}</Pill>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-1 text-center text-[10px] font-bold">
                {["提交", "AI初筛", "补证", "复核", "发布"].map((step, idx) => (
                  <div key={step} className={`rounded-xl px-1 py-2 ${idx <= (item.reviewStep || 1) ? "bg-blue-600 text-white" : "bg-white text-slate-400"}`}>
                    {step}
                  </div>
                ))}
              </div>
              <button onClick={isLoggedIn ? onAdvanceReview : requireLogin} className="mt-4 w-full rounded-2xl bg-blue-600 py-3 font-bold text-white">
                {isLoggedIn ? "推进审核（核验者以上）" : "登录后推进审核"}
              </button>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-4">
              <div className="flex items-center gap-2 text-sm font-black text-emerald-700">
                <Icon type="upload" size={18} /> 附上证据
              </div>
              <p className="mt-1 text-xs leading-5 text-emerald-600">可上传截图、视频、原始链接截图、官方文件、现场照片等材料，辅助判断真伪。</p>
              <textarea value={truthEvidenceNote} onChange={(e) => onTruthEvidenceNote(e.target.value)} placeholder="填写证据说明，例如：这张截图来自官方账号 2025-xx-xx 发布内容" className="mt-3 h-20 w-full rounded-2xl border border-emerald-100 bg-white p-3 text-sm outline-none"></textarea>
              <label className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-emerald-200 bg-white p-5 text-sm font-bold text-emerald-700">
                <Icon type="upload" />选择证据材料
                <input type="file" multiple className="hidden" onChange={e => isLoggedIn ? onTruthEvidenceFiles(Array.from(e.target.files || [])) : requireLogin()} />
              </label>
              <div className="mt-2 text-xs text-slate-500">已选择 {truthEvidenceFiles.length} 个文件</div>
              {truthEvidenceFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  {truthEvidenceFiles.map((file, idx) => (
                    <div key={idx} className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600">{idx + 1}. {file.name}</div>
                  ))}
                </div>
              )}
              <button onClick={isLoggedIn ? onAddTruthEvidence : requireLogin} className="mt-3 w-full rounded-2xl bg-emerald-600 py-3 font-bold text-white">
                {isLoggedIn ? "提交补充证据（认证用户以上）" : "登录后提交证据"}
              </button>
            </div>

            <p><b className="text-slate-900">链接：</b>{item.link}</p>
            <p><b className="text-slate-900">上传文件数：</b>{item.files}</p>
            <p><b className="text-slate-900">核验状态：</b>{item.status}</p>
            <p><b className="text-slate-900">提交时间：</b>{item.createdAt || "示例内置内容"}</p>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-bold text-slate-900">证据链</p>
              <div className="mt-2 space-y-1">
                {evidenceList.map((e, idx) => <p key={idx}>• {e}</p>)}
              </div>
              {item.evidenceFiles && item.evidenceFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  <p className="font-bold text-slate-900">已上传证据文件</p>
                  {item.evidenceFiles.map((file, idx) => (
                    <p key={idx} className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600">{idx + 1}. {file}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-bold text-slate-900">真实证据 / 辟谣来源</p>
              <div className="mt-3"><EvidenceBox links={evidenceLinks} /></div>
            </div>
          </div>
        )}

        {isNotice && (
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
            <p><b className="text-slate-900">事件摘要：</b>{item.summary}</p>
            <p><b className="text-slate-900">来源：</b>{item.source || "用户上传材料"}</p>
            <p><b className="text-slate-900">结论：</b>{item.result || "待整理"}</p>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-bold text-slate-900">事件时间线</p>
              <div className="mt-2 space-y-2">
                {(item.timeline || ["最初传播", "官方介入", "调查结论", "后续处理"]).map((t, idx) => (
                  <p key={idx}>{idx + 1}. {t}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-bold text-slate-900">真实证据 / 官方来源</p>
              <div className="mt-3"><EvidenceBox links={evidenceLinks} /></div>
            </div>
          </div>
        )}

        {isHelp && (
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
            <p><b className="text-slate-900">求助说明：</b>{item.desc}</p>
            <p><b className="text-slate-900">审核状态：</b>{item.verified}</p>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-bold text-slate-900">求助证据材料</p>
              {item.evidenceFiles && item.evidenceFiles.length > 0 ? (
                <div className="mt-2 space-y-2">
                  {item.evidenceFiles.map((file, idx) => (
                    <p key={idx} className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600">{idx + 1}. {file}</p>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-sm text-slate-400">暂无上传材料，建议补充证明文件提升可信度。</p>
              )}
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-3 rounded-full bg-blue-600" style={{ width: `${percent}%` }} />
            </div>
            <div className="flex justify-between text-sm text-slate-500"><span>已筹 ¥{item.raised}</span><span>目标 ¥{item.target}</span></div>
            <button onClick={isLoggedIn ? onSupport : requireLogin} className="w-full rounded-2xl bg-blue-600 py-3 font-bold text-white">{isLoggedIn ? "模拟支持 +10 元" : "登录后支持"}</button>
          </div>
        )}

        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <p className="font-bold text-slate-900">评论区</p>
          <div className="mt-3 space-y-3">
            {comments.length === 0 && <p className="text-sm text-slate-400">暂无评论，来发表第一条看法。</p>}
            {comments.some(c => c.type === "核验评论") && <p className="rounded-2xl bg-emerald-50 p-3 text-sm font-bold text-emerald-700">已有核验评论，可作为可信度参考。</p>}
            {comments.map((c, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-3 text-sm text-slate-600">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-slate-900">{c.user}</div>
                    {c.role && <UserBadge role={c.role} />}
                  </div>
                  {isLoggedIn && c.user === currentUserName && (
                    <button
                      onClick={() => onDeleteComment(idx)}
                      className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-600"
                    >
                      删除
                    </button>
                  )}
                </div>
                <div className="mt-1">{c.type === "核验评论" && <span className="mr-2 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700">核验评论</span>}{c.text}</div>
                <div className="mt-1 text-xs text-slate-400">{c.time}</div>
              </div>
            ))}
          </div>
          <select disabled={!isLoggedIn} value={commentType} onChange={(e) => onCommentTypeInput(e.target.value)} className="mt-3 w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none">
            <option>普通评论</option>
            <option>核验评论</option>
            <option>补充证据</option>
            <option>纠错反馈</option>
          </select>
          <textarea disabled={!isLoggedIn} value={commentText} onChange={(e) => onCommentInput(e.target.value)} placeholder={isLoggedIn ? "写下你的评论、补充证据或反馈" : "登录后才能发表评论"} className="mt-3 h-20 w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none"></textarea>
          <button onClick={isLoggedIn ? onAddComment : requireLogin} className="mt-2 w-full rounded-2xl bg-slate-900 py-3 font-bold text-white">{isLoggedIn ? "发表评论" : "登录后评论"}</button>
        </div>

        {item.isUserSubmitted && (
          <button onClick={onDelete} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-50 py-3 font-bold text-rose-600">
            <Icon type="trash" size={18} /> 删除我的提交
          </button>
        )}
      </Card>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("home");
  const [truthText, setTruthText] = useState("");
  const [truthLink, setTruthLink] = useState("");
  const [truthFiles, setTruthFiles] = useState([]);
  const [truthEvidenceFiles, setTruthEvidenceFiles] = useState([]);
  const [truthEvidenceNote, setTruthEvidenceNote] = useState("");
  const [records, setRecords] = useState([
    { text: "网传“某地出现罕见天价自然矿石，人人可去捡”", link: "示例：短视频/朋友圈截图", files: 0, status: "建议核验来源：地方警方、自然资源部门或中国互联网联合辟谣平台", result: "待核验", reviewStatus: "AI 初筛中", score: 42, evidence: ["仅有短视频传播截图", "暂未匹配到官方通报", "建议核验地方警方或自然资源部门信息"], evidenceLinks: [{ title: "中国互联网联合辟谣平台", url: "https://www.piyao.org.cn/", desc: "用于检索各地权威辟谣信息和官方回应。" }] },
    { text: "网传食品添加剂等同于有毒物质", link: "示例：短视频标题", files: 0, status: "建议结合国家标准、剂量、适用范围判断，避免断章取义", result: "存在误导风险", reviewStatus: "人工复核中", score: 58, evidence: ["标题表达绝对化", "缺少剂量和适用标准", "需要对照食品安全国家标准"], evidenceLinks: [{ title: "食品安全与健康：巧辨谣言，科学饮食", url: "https://www.piyao.org.cn/20231215/7cea234c83a940cfb432d8cac6ae6745/c.html", desc: "中国互联网联合辟谣平台发布的食品安全科普和谣言辨析内容。" }] }
  ]);
  const [notices, setNotices] = useState(initNotices);
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeSummary, setNoticeSummary] = useState("");
  const [noticeSourceTitle, setNoticeSourceTitle] = useState("");
  const [noticeSourceUrl, setNoticeSourceUrl] = useState("");
  const [noticeSourceDesc, setNoticeSourceDesc] = useState("");
  const [helps, setHelps] = useState(initHelps);
  const [helpName, setHelpName] = useState("");
  const [helpTarget, setHelpTarget] = useState("");
  const [helpDesc, setHelpDesc] = useState("");
  const [helpEvidenceFiles, setHelpEvidenceFiles] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginName, setLoginName] = useState("测试用户");
  const [loginEmail, setLoginEmail] = useState("demo@example.com");
  const [loginPassword, setLoginPassword] = useState("123456");
  const [loginError, setLoginError] = useState("");
  const [userRole, setUserRole] = useState("普通用户");
  const [commentType, setCommentType] = useState("普通评论");
  const [aiDemo, setAiDemo] = useState(false);

  const uploadFiles = (e, setter) => {
    if (!isLoggedIn) {
      requireLogin();
      e.target.value = "";
      return;
    }
    setter(Array.from(e.target.files || []));
  };

  function requireLogin() {
    setShowLogin(true);
    return false;
  }

  function login() {
    if (!loginName.trim()) return setLoginError("请输入用户名");
    if (!loginEmail.includes("@") || !loginEmail.includes(".")) return setLoginError("请输入有效邮箱");
    if (loginPassword.length < 6) return setLoginError("密码至少 6 位");
    setIsLoggedIn(true);
    setShowLogin(false);
    setLoginError("");
  }

  function logout() {
    setIsLoggedIn(false);
    setSelectedPost(null);
    setCommentText("");
    setLoginPassword("");
  }

  function hasRolePermission(action) {
    const levelMap = {
      "普通用户": 1,
      "已认证用户": 2,
      "志愿核验者": 3,
      "专业人士": 4,
    };

    const requiredMap = {
      submitTruth: 1,
      comment: 1,
      support: 1,
      submitHelp: 2,
      submitNotice: 2,
      addEvidence: 2,
      review: 3,
      finalConclusion: 4,
      deleteOwn: 1,
    };

    return (levelMap[userRole] || 1) >= (requiredMap[action] || 1);
  }

  function denyPermission(message) {
    alert(message || "当前账号权限不足，请切换更高权限角色后再操作。");
    return false;
  }

  function submitTruth() {
    if (!isLoggedIn) return requireLogin();
    if (!truthText && !truthLink && truthFiles.length === 0) return alert("请先输入或上传内容");
    setRecords([
      {
        id: Date.now(),
        text: truthText || "用户上传了待核验内容",
        link: truthLink || "无链接",
        files: truthFiles.length,
        status: "已进入审核流程：AI 初筛中",
        reviewStatus: "AI 初筛中",
        reviewStep: 1,
        result: truthLink ? "待核验" : "暂无定论",
        score: Math.min(85, 40 + truthFiles.length * 8 + (truthLink ? 15 : 0) + (truthText.length > 30 ? 10 : 0)),
        evidence: [truthLink ? "用户提供了外部链接" : "未提供外部链接", truthFiles.length > 0 ? `用户上传了 ${truthFiles.length} 个原始文件` : "未上传原始文件", truthText.length > 30 ? "描述信息较完整" : "描述信息较少"],
        evidenceFiles: truthFiles.map(file => file.name),
        evidenceLinks: truthLink ? [{ title: "用户提交链接", url: truthLink, desc: "用户提交的原始链接，需进一步人工核验。" }] : [],
        isUserSubmitted: true,
        createdAt: new Date().toLocaleString(),
      },
      ...records,
    ]);
    setTruthText(""); setTruthLink(""); setTruthFiles([]);
  }

  function advanceTruthReview() {
    if (!selectedPost || selectedPost.type !== "truth") return;
    if (!hasRolePermission("review")) return denyPermission("只有志愿核验者或专业人士可以推进审核流程。");

    const steps = ["待提交", "AI 初筛中", "证据补充中", "人工复核中", "结论已发布"];
    const currentStep = selectedPost.item.reviewStep || 1;
    const nextStep = Math.min(currentStep + 1, 4);
    if (nextStep >= 4 && !hasRolePermission("finalConclusion")) return denyPermission("只有专业人士可以发布最终真伪结论。");
    const nextStatus = steps[nextStep];

    const nextResult =
      nextStep >= 4
        ? selectedPost.item.score >= 70
          ? "倾向真实"
          : selectedPost.item.score >= 50
            ? "需要更多证据"
            : "存在误导风险"
        : selectedPost.item.result || "待核验";

    const updatedItem = {
      ...selectedPost.item,
      reviewStep: nextStep,
      reviewStatus: nextStatus,
      status: `审核流程：${nextStatus}`,
      result: nextResult,
      score: Math.min(96, (selectedPost.item.score || 50) + 6),
    };

    setRecords(records.map((item, idx) => idx === selectedPost.index ? updatedItem : item));
    setSelectedPost({ ...selectedPost, item: updatedItem });
  }

  function addTruthEvidence() {
    if (!isLoggedIn) return requireLogin();
    if (!hasRolePermission("addEvidence")) return denyPermission("只有已认证用户、志愿核验者或专业人士可以补充证据。");
    if (!selectedPost || selectedPost.type !== "truth") return;
    if (truthEvidenceFiles.length === 0 && !truthEvidenceNote.trim()) return alert("请先上传证据或填写证据说明");

    const newEvidenceTexts = [
      ...(selectedPost.item.evidence || []),
      truthEvidenceNote.trim() ? `补充说明：${truthEvidenceNote.trim()}` : null,
      truthEvidenceFiles.length > 0 ? `补充上传了 ${truthEvidenceFiles.length} 份证据材料` : null,
    ].filter(Boolean);

    const newEvidenceFiles = [
      ...(selectedPost.item.evidenceFiles || []),
      ...truthEvidenceFiles.map(file => file.name),
    ];

    const updatedItem = {
      ...selectedPost.item,
      evidence: newEvidenceTexts,
      evidenceFiles: newEvidenceFiles,
      reviewStep: Math.max(selectedPost.item.reviewStep || 1, 2),
      reviewStatus: "证据补充中",
      status: "审核流程：证据补充中",
      score: Math.min(96, (selectedPost.item.score || 50) + truthEvidenceFiles.length * 5 + (truthEvidenceNote.trim() ? 5 : 0)),
    };

    setRecords(records.map((item, idx) => idx === selectedPost.index ? updatedItem : item));
    setSelectedPost({ ...selectedPost, item: updatedItem });
    setTruthEvidenceFiles([]);
    setTruthEvidenceNote("");
  }

  function submitNotice() {
    if (!isLoggedIn) return requireLogin();
    if (!hasRolePermission("submitNotice")) return denyPermission("只有已认证用户、志愿核验者或专业人士可以录入官方通报。");
    if (!noticeTitle && !noticeSummary) return alert("请填写通报内容");

    const hasTrustedSource = noticeSourceUrl.trim() || noticeSourceTitle.trim() || noticeSourceDesc.trim();

    setNotices([
      {
        id: Date.now(),
        title: noticeTitle || "用户上传的官方通报材料",
        tag: hasTrustedSource ? "用户上传 · 含可信来源" : "用户上传",
        summary: noticeSummary || "等待补充事件经过。",
        source: noticeSourceTitle || "用户上传材料",
        result: hasTrustedSource ? "待核验来源" : "待整理",
        score: hasTrustedSource ? 78 : 65,
        timeline: ["用户提交材料", hasTrustedSource ? "已补充可信来源" : "等待补充来源", "等待核验", "形成结果"],
        evidenceLinks: hasTrustedSource ? [
          {
            title: noticeSourceTitle || "用户补充的可信来源",
            url: noticeSourceUrl || "https://www.gov.cn/",
            desc: noticeSourceDesc || "用户补充的官方通报、权威媒体、政府网站或机构公告链接。"
          }
        ] : [],
        isUserSubmitted: true,
        createdAt: new Date().toLocaleString(),
      },
      ...notices,
    ]);
    setNoticeTitle("");
    setNoticeSummary("");
    setNoticeSourceTitle("");
    setNoticeSourceUrl("");
    setNoticeSourceDesc("");
  }

  function submitHelp() {
    if (!isLoggedIn) return requireLogin();
    if (!hasRolePermission("submitHelp")) return denyPermission("只有已认证用户、志愿核验者或专业人士可以发起求助。");
    if (!helpName && !helpDesc) return alert("请填写求助信息");

    const evidenceCount = helpEvidenceFiles.length;

    setHelps([
      {
        id: Date.now(),
        name: helpName || "用户发起的求助",
        target: Number(helpTarget) || 10000,
        raised: 0,
        desc: helpDesc || "等待审核。",
        verified: evidenceCount > 0 ? "材料待核验" : "待审核",
        score: evidenceCount > 0 ? Math.min(85, 60 + evidenceCount * 5) : 60,
        evidenceFiles: helpEvidenceFiles.map(file => file.name),
        evidence: evidenceCount > 0
          ? [`用户上传了 ${evidenceCount} 份证明材料`, "等待平台或公益机构核验", "审核通过后可展示资金用途"]
          : ["暂未上传证明材料", "等待补充医院/社区/学校/机构证明", "等待平台审核"],
        isUserSubmitted: true,
        createdAt: new Date().toLocaleString()
      },
      ...helps,
    ]);
    setHelpName("");
    setHelpTarget("");
    setHelpDesc("");
    setHelpEvidenceFiles([]);
  }

  function support(i) {
    if (!isLoggedIn) return requireLogin();
    setHelps(helps.map((x, idx) => idx === i ? { ...x, raised: x.raised + 10 } : x));
  }

  function getPostKey(type, item, index) {
    return `${type}-${item.id || item.title || item.text || item.name}-${index}`;
  }

  function openPost(type, item, index) {
    setSelectedPost({ type, item, index });
    setCommentText("");
  }

  function addComment() {
    if (!isLoggedIn) return requireLogin();
    if (commentType === "核验评论" && !hasRolePermission("review")) return denyPermission("只有志愿核验者或专业人士可以发表核验评论。");
    if (!selectedPost || !commentText.trim()) return alert("请先输入评论内容");
    const key = getPostKey(selectedPost.type, selectedPost.item, selectedPost.index);
    const newComment = { user: loginName || "当前用户", role: userRole, type: commentType, text: commentText.trim(), time: new Date().toLocaleString() };
    setComments({ ...comments, [key]: [...(comments[key] || []), newComment] });
    setCommentText("");
  }

  function deleteComment(index) {
    if (!selectedPost) return;
    if (!confirm("确定删除这条评论吗？")) return;

    const key = getPostKey(selectedPost.type, selectedPost.item, selectedPost.index);
    const updated = [...(comments[key] || [])];
    updated.splice(index, 1);

    setComments({
      ...comments,
      [key]: updated,
    });
  }

  function deleteUserPost(type, index) {
    if (!isLoggedIn) return requireLogin();
    if (!confirm("确定删除这条自己提交的内容吗？")) return;
    if (type === "truth") setRecords(records.filter((_, i) => i !== index));
    if (type === "notice") setNotices(notices.filter((_, i) => i !== index));
    if (type === "help") setHelps(helps.filter((_, i) => i !== index));
    setSelectedPost(null);
  }

  const totalPosts = records.length + notices.length + helps.length;
  const userPosts = records.filter(x => x.isUserSubmitted).length + notices.filter(x => x.isUserSubmitted).length + helps.filter(x => x.isUserSubmitted).length;
  const totalComments = Object.values(comments).reduce((sum, list) => sum + list.length, 0);

  const NavButton = ({ id, icon, label }) => (
    <button onClick={() => setTab(id)} className={`flex flex-1 flex-col items-center gap-1 rounded-2xl py-2 text-xs ${tab === id ? "bg-blue-50 text-blue-700" : "text-slate-400"}`}>
      <Icon type={icon} size={21} />{label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto min-h-screen max-w-[430px] bg-slate-100 pb-24">
        <header className="sticky top-0 z-10 bg-white/90 px-5 py-4 backdrop-blur border-b border-slate-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white"><Icon type="shield" /></div>
              <div>
                <div className="text-lg font-black">明证 AI</div>
                <div className="text-xs text-slate-500">黑客松强化 Demo</div>
              </div>
            </div>
            <button onClick={isLoggedIn ? logout : () => setShowLogin(true)} className={`rounded-full px-3 py-1 text-xs font-bold ${isLoggedIn ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"}`}>{isLoggedIn ? `${loginName} · 退出` : "登录"}</button>
          </div>
        </header>

        {showLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-6">
            <div className="w-full max-w-[360px] rounded-[28px] bg-white p-5 shadow-xl">
              <h2 className="text-xl font-black">登录后继续操作</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">浏览内容不需要登录；上传、评论、删除和支持需要先登录。</p>
              <input value={loginName} onChange={(e) => setLoginName(e.target.value)} placeholder="用户名" className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none" />
              <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="邮箱，例如 demo@example.com" className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none" />
              <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="password" placeholder="密码，至少 6 位" className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none" />
              <select value={userRole} onChange={(e) => setUserRole(e.target.value)} className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none">
                <option>普通用户</option><option>已认证用户</option><option>志愿核验者</option><option>专业人士</option>
              </select>
              {loginError && <div className="mt-3 rounded-2xl bg-rose-50 p-3 text-sm font-bold text-rose-600">{loginError}</div>}
              <button onClick={login} className="mt-4 w-full rounded-2xl bg-blue-600 py-3 font-bold text-white">确认登录</button>
              <button onClick={() => setShowLogin(false)} className="mt-2 w-full rounded-2xl bg-slate-100 py-3 font-bold text-slate-600">暂不登录</button>
            </div>
          </div>
        )}

        {aiDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-6">
            <div className="w-full max-w-[360px] rounded-[30px] bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-2xl bg-blue-600 text-white"><Icon type="spark" /></div>
                <div>
                  <h2 className="text-xl font-black">AI 核验完成</h2>
                  <p className="text-sm text-slate-500">已生成可解释证据链</p>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-2xl bg-blue-50 p-4"><b className="text-blue-700">1. 传播源识别：</b>检测到短视频/截图类信息，需重点核验原始出处。</div>
                <div className="rounded-2xl bg-emerald-50 p-4"><b className="text-emerald-700">2. 权威源比对：</b>优先匹配政府网站、应急管理、市场监管、联合辟谣平台。</div>
                <div className="rounded-2xl bg-amber-50 p-4"><b className="text-amber-700">3. 风险提示：</b>标题绝对化、缺少时间地点、无官方来源时降低可信度。</div>
              </div>
              <button onClick={() => { setAiDemo(false); setTab("truth"); }} className="mt-5 w-full rounded-2xl bg-blue-600 py-3 font-bold text-white">去体验求真流程</button>
            </div>
          </div>
        )}


        <main className="space-y-4 p-4">
          {selectedPost && (
            <DetailView post={selectedPost} onBack={() => setSelectedPost(null)} onDelete={() => deleteUserPost(selectedPost.type, selectedPost.index)} onSupport={() => selectedPost.type === "help" && support(selectedPost.index)} onAdvanceReview={advanceTruthReview} onAddTruthEvidence={addTruthEvidence} truthEvidenceFiles={truthEvidenceFiles} onTruthEvidenceFiles={setTruthEvidenceFiles} truthEvidenceNote={truthEvidenceNote} onTruthEvidenceNote={setTruthEvidenceNote} comments={comments[getPostKey(selectedPost.type, selectedPost.item, selectedPost.index)] || []} commentText={commentText} commentType={commentType} onCommentInput={setCommentText} onCommentTypeInput={setCommentType} onAddComment={addComment} onDeleteComment={deleteComment} currentUserName={loginName || "当前用户"} currentUserRole={userRole} isLoggedIn={isLoggedIn} requireLogin={requireLogin} />
          )}

          {!selectedPost && (
            <>
              {tab === "home" && <>
                <Card dark>
                  <Pill type="amber">谣言预警</Pill>
                  <h1 className="mt-4 text-2xl font-black">让每一次转发都有证据</h1>
                  <p className="mt-2 text-sm leading-6 text-slate-300">求真核验、官方通报、可信求助，全部在手机端完成交互演示。</p>
                  <button onClick={() => setTab("truth")} className="mt-5 w-full rounded-2xl bg-white py-3 font-bold text-slate-900">立即上传求真</button>
                </Card>
                <AIEnhanceCard onStart={() => setAiDemo(true)} />
                <Card>
                  <h2 className="text-lg font-black">分级权限体系</h2>
                  <div className="mt-3 space-y-2 text-xs leading-5 text-slate-600">
                    <div className="rounded-2xl bg-slate-50 p-3"><b className="text-slate-900">普通用户：</b>提交求真、普通评论、支持求助</div>
                    <div className="rounded-2xl bg-blue-50 p-3"><b className="text-blue-700">已认证用户：</b>补充证据、发起求助、录入官方通报</div>
                    <div className="rounded-2xl bg-emerald-50 p-3"><b className="text-emerald-700">志愿核验者：</b>发表核验评论、推进审核流程</div>
                    <div className="rounded-2xl bg-violet-50 p-3"><b className="text-violet-700">专业人士：</b>发布最终真伪结论</div>
                  </div>
                </Card>
                <HomeQRCodeCard />
                <div className="grid grid-cols-3 gap-3">
                  <Card><div className="text-2xl font-black">{records.length}</div><div className="text-xs text-slate-500">求真帖子</div></Card>
                  <Card><div className="text-2xl font-black">{notices.length}</div><div className="text-xs text-slate-500">通报帖子</div></Card>
                  <Card><div className="text-2xl font-black">{helps.length}</div><div className="text-xs text-slate-500">求助帖子</div></Card>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <Card><div className="text-2xl font-black">{totalPosts}</div><div className="text-xs text-slate-500">全部帖子</div></Card>
                  <Card><div className="text-2xl font-black">{userPosts}</div><div className="text-xs text-slate-500">用户提交</div></Card>
                  <Card><div className="text-2xl font-black">{totalComments}</div><div className="text-xs text-slate-500">评论数</div></Card>
                </div>
                <Card>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><Icon type="flame" size={18} />可信体系</div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-500">
                    <div className="rounded-2xl bg-slate-50 p-3"><b className="text-slate-900">真实来源</b><br/>详情页可打开官方原文或辟谣证据</div>
                    <div className="rounded-2xl bg-slate-50 p-3"><b className="text-slate-900">核验评论</b><br/>志愿者或专业人士补充证据</div>
                  </div>
                </Card>
                {notices.slice(0, 4).map((n, i) => <button key={i} onClick={() => openPost("notice", n, i)} className="block w-full text-left"><Card><div className="flex items-start justify-between gap-3"><Pill type={i === 0 ? "green" : "amber"}>{n.tag}</Pill><Icon type="right" size={18} /></div><h3 className="mt-3 font-bold">{n.title}</h3><p className="mt-2 text-sm text-slate-500">{n.summary}</p><p className="mt-3 text-xs font-semibold text-blue-700">来源：{n.source || "用户上传"}</p></Card></button>)}
              </>}

              {tab === "truth" && <>
                <Card>
                  <h2 className="text-xl font-black">上传内容求真</h2>
                  <textarea value={truthText} onChange={e => setTruthText(e.target.value)} placeholder="请输入你想求真的内容" className="mt-4 h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none"></textarea>
                  <input value={truthLink} onChange={e => setTruthLink(e.target.value)} placeholder="粘贴链接，可选" className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none" />
                  <label className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-5 text-sm font-bold text-blue-700"><Icon type="upload" />上传图片/视频<input type="file" multiple className="hidden" onChange={e => uploadFiles(e, setTruthFiles)} /></label>
                  <div className="mt-2 text-xs text-slate-400">已选择 {truthFiles.length} 个文件</div>
                  <button onClick={submitTruth} className="mt-4 w-full rounded-2xl bg-blue-600 py-3 font-bold text-white">{isLoggedIn ? "提交求真" : "登录后提交求真"}</button>
                </Card>
                {records.map((r, i) => <button key={i} onClick={() => openPost("truth", r, i)} className="block w-full text-left"><Card><div className="flex items-start justify-between gap-3"><Pill type={r.result === "存在误导风险" ? "red" : "amber"}>{r.result || "暂无定论"}</Pill><Icon type="right" size={18} /></div><h3 className="mt-3 font-bold">{r.text}</h3><p className="mt-2 text-sm text-slate-500">链接：{r.link}</p><p className="mt-2 text-sm font-semibold text-blue-700">{r.status}</p>{r.isUserSubmitted && <button onClick={(e) => { e.stopPropagation(); deleteUserPost("truth", i); }} className="mt-3 rounded-xl bg-rose-50 px-3 py-2 text-xs font-bold text-rose-600">删除我的提交</button>}</Card></button>)}
              </>}

              {tab === "notice" && <>
                <Card>
                  <h2 className="text-xl font-black">录入官方通报</h2>
                  <input value={noticeTitle} onChange={e => setNoticeTitle(e.target.value)} placeholder="事件标题" className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none" />
                  <textarea value={noticeSummary} onChange={e => setNoticeSummary(e.target.value)} placeholder="事件摘要 / 官方处理结果" className="mt-3 h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none"></textarea>
                  <div className="mt-4 rounded-2xl bg-blue-50 p-4">
                    <div className="flex items-center gap-2 text-sm font-black text-blue-700">
                      <Icon type="link" size={18} /> 增加可信来源
                    </div>
                    <p className="mt-1 text-xs leading-5 text-blue-600">可填写政府网站、权威媒体、应急管理、市场监管、学校/医院/机构公告等来源。</p>
                    <input value={noticeSourceTitle} onChange={e => setNoticeSourceTitle(e.target.value)} placeholder="来源名称，例如：应急管理部通报 / 中国政府网" className="mt-3 w-full rounded-2xl border border-blue-100 bg-white p-3 text-sm outline-none" />
                    <input value={noticeSourceUrl} onChange={e => setNoticeSourceUrl(e.target.value)} placeholder="可信来源链接，例如 https://..." className="mt-3 w-full rounded-2xl border border-blue-100 bg-white p-3 text-sm outline-none" />
                    <textarea value={noticeSourceDesc} onChange={e => setNoticeSourceDesc(e.target.value)} placeholder="来源说明，例如：官方发布的事故调查报告，包含原因认定和处理结果" className="mt-3 h-20 w-full rounded-2xl border border-blue-100 bg-white p-3 text-sm outline-none"></textarea>
                  </div>
                  <button onClick={submitNotice} className="mt-4 w-full rounded-2xl bg-blue-600 py-3 font-bold text-white">{isLoggedIn ? "添加通报（认证用户以上）" : "登录后添加通报"}</button>
                </Card>
                {notices.map((n, i) => <button key={i} onClick={() => openPost("notice", n, i)} className="block w-full text-left"><Card><div className="flex items-start justify-between gap-3"><Pill type={n.tag === "用户上传" ? "amber" : "green"}>{n.tag}</Pill><Icon type="right" size={18} /></div><h3 className="mt-3 font-bold">{n.title}</h3><p className="mt-2 text-sm text-slate-500">{n.summary}</p><p className="mt-3 text-xs font-semibold text-blue-700">来源：{n.source || "用户上传材料"}</p>{n.isUserSubmitted && <button onClick={(e) => { e.stopPropagation(); deleteUserPost("notice", i); }} className="mt-3 rounded-xl bg-rose-50 px-3 py-2 text-xs font-bold text-rose-600">删除我的提交</button>}</Card></button>)}
              </>}

              {tab === "help" && <>
                <Card>
                  <h2 className="text-xl font-black">发起求助</h2>
                  <input value={helpName} onChange={e => setHelpName(e.target.value)} placeholder="求助标题" className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none" />
                  <input value={helpTarget} onChange={e => setHelpTarget(e.target.value)} placeholder="目标金额，例如 80000" className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none" />
                  <textarea value={helpDesc} onChange={e => setHelpDesc(e.target.value)} placeholder="求助说明" className="mt-3 h-28 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none"></textarea>
                  <div className="mt-4 rounded-2xl bg-emerald-50 p-4">
                    <div className="flex items-center gap-2 text-sm font-black text-emerald-700">
                      <Icon type="upload" size={18} /> 上传求助证据
                    </div>
                    <p className="mt-1 text-xs leading-5 text-emerald-600">
                      可上传医院证明、费用清单、社区证明、受灾照片、身份/关系证明等材料。
                    </p>
                    <label className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-emerald-200 bg-white p-5 text-sm font-bold text-emerald-700">
                      <Icon type="upload" />选择证明材料
                      <input type="file" multiple className="hidden" onChange={e => uploadFiles(e, setHelpEvidenceFiles)} />
                    </label>
                    <div className="mt-2 text-xs text-slate-500">
                      已选择 {helpEvidenceFiles.length} 个文件
                    </div>
                    {helpEvidenceFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {helpEvidenceFiles.map((file, idx) => (
                          <div key={idx} className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600">
                            {idx + 1}. {file.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button onClick={submitHelp} className="mt-4 w-full rounded-2xl bg-blue-600 py-3 font-bold text-white">{isLoggedIn ? "提交求助（认证用户以上）" : "登录后提交求助"}</button>
                </Card>
                {helps.map((h, i) => { const p = Math.min(100, Math.round(h.raised / h.target * 100)); return <button key={i} onClick={() => openPost("help", h, i)} className="block w-full text-left"><Card><div className="flex items-start justify-between gap-3"><Pill type={h.verified === "待审核" ? "amber" : "green"}>{h.verified}</Pill><Icon type="right" size={18} /></div><h3 className="mt-3 font-bold">{h.name}</h3><p className="mt-2 text-sm text-slate-500">{h.desc}</p><div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100"><div className="h-3 rounded-full bg-blue-600" style={{ width: `${p}%` }} /></div><div className="mt-2 flex justify-between text-sm text-slate-500"><span>¥{h.raised}</span><span>¥{h.target}</span></div><button onClick={(e) => { e.stopPropagation(); support(i); }} className="mt-4 w-full rounded-2xl bg-blue-600 py-3 font-bold text-white">模拟支持 +10 元</button>{h.isUserSubmitted && <button onClick={(e) => { e.stopPropagation(); deleteUserPost("help", i); }} className="mt-3 w-full rounded-2xl bg-rose-50 py-3 font-bold text-rose-600">删除我的提交</button>}</Card></button>; })}
              </>}
            </>
          )}
        </main>

        <nav className="fixed bottom-0 left-1/2 z-20 w-full max-w-[430px] -translate-x-1/2 border-t border-slate-100 bg-white px-3 py-2">
          <div className="flex gap-1">
            <NavButton id="home" icon="home" label="首页" />
            <NavButton id="truth" icon="shield" label="求真" />
            <NavButton id="notice" icon="notice" label="通报" />
            <NavButton id="help" icon="heart" label="求助" />
          </div>
        </nav>
      </div>
    </div>
  );
}
