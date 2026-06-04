import { useState } from 'react'
import {
  NAV, FEATURES, PLAYBOOK, COMPARE_ROWS, PROMPTS, FAQ,
} from './data'

/* ---------- Reusable bits ---------- */

function SectionTitle({ children, sub }: { children: any; sub?: any }) {
  return (
    <>
      <div className="flex items-center gap-3 mt-12 mb-4">
        <span className="w-2.5 h-6 rounded bg-gradient-to-b from-brand to-accent" />
        <h2 className="m-0 text-2xl font-bold">{children}</h2>
      </div>
      {sub && <p className="text-muted -mt-2 mb-6 max-w-3xl">{sub}</p>}
    </>
  )
}

function Card({ ic, h, p }) {
  return (
    <div className="bg-gradient-to-b from-card to-card2 border border-line rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[#3a4a78]">
      <div className="w-12 h-12 rounded-xl grid place-items-center text-2xl mb-3 bg-brand/15 border border-brand/30">
        {ic}
      </div>
      <h3 className="m-0 mb-2 text-lg font-bold">{h}</h3>
      <p className="m-0 text-muted text-sm">{p}</p>
    </div>
  )
}

function Tag({ type }) {
  if (type === 'do')
    return <span className="ml-2 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-good/15 text-good border border-good/30">SHOULD DO</span>
  if (type === 'dont')
    return <span className="ml-2 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-bad/15 text-bad border border-bad/30">SHOULDN'T DO</span>
  return null
}

function Callout({ icon, children }) {
  return (
    <div className="flex gap-3.5 bg-gradient-to-br from-brand2/10 to-accent/10 border border-line border-l-4 border-l-brand2 rounded-xl px-5 py-4 my-5">
      <div className="text-2xl">{icon}</div>
      <div className="text-muted text-sm leading-relaxed">{children}</div>
    </div>
  )
}

/* ---------- Pages ---------- */

function Home({ go }) {
  const stats = [
    ['5', 'Playbook sections to complete'],
    ['2', 'Build paths: Lite & Studio'],
    ['20', 'Max knowledge sources (Lite)'],
    ['1', 'Use-case submission form'],
  ]
  return (
    <section className="animate-fade">
      <div className="relative border border-line rounded-3xl overflow-hidden bg-gradient-to-br from-brand/15 to-accent/10 px-10 py-14 shadow-glow">
        <span className="inline-flex items-center gap-2 text-xs font-bold text-brand2 bg-brand2/10 border border-brand2/30 px-3 py-1.5 rounded-full mb-4 tracking-wider">
          ⚡ FISCAL PLATFORM · COPILOT ENABLEMENT
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
          Build the right agent,<br /><span className="gradient-text">the right way.</span>
        </h1>
        <p className="max-w-2xl text-muted text-lg mb-6">
          The Copilot Agent Builder Playbook helps FISCAL teams design, document, and submit Microsoft Copilot agents
          with confidence — from a quick <b>Copilot Lite</b> Q&A helper to an enterprise-grade <b>Copilot Studio</b> managed agent.
        </p>
        <div className="flex gap-3 flex-wrap">
          <button onClick={() => go('playbook')} className="font-bold text-[15px] px-5 py-3 rounded-xl bg-gradient-to-br from-brand to-accent text-white shadow-glow transition hover:-translate-y-0.5">📖 Open the Playbook</button>
          <button onClick={() => go('compare')} className="font-bold text-[15px] px-5 py-3 rounded-xl bg-card text-txt border border-line hover:bg-card2 transition">⚖️ Lite vs Studio</button>
          <button onClick={() => go('prompts')} className="font-bold text-[15px] px-5 py-3 rounded-xl bg-card text-txt border border-line hover:bg-card2 transition">✨ Prompt Library</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-7">
        {stats.map(([b, s]) => (
          <div key={s} className="bg-card border border-line rounded-2xl p-4">
            <b className="text-2xl block gradient-text">{b}</b>
            <span className="text-muted text-[13px]">{s}</span>
          </div>
        ))}
      </div>

      <SectionTitle sub="A consistent, lightweight standard so every agent on the FISCAL Platform is clear, governed, and easy to maintain.">
        What this playbook gives you
      </SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {FEATURES.map((f) => <Card key={f.h} {...f} />)}
      </div>

      <Callout icon="💡">
        <b>New to agent building?</b> Start with <b>Copilot Lite</b> for simple Q&A over Microsoft 365 content.
        Graduate to <b>Copilot Studio</b> when you need connectors, workflows, or enterprise governance.{' '}
        <button onClick={() => go('compare')} className="text-brand2 underline">See the comparison →</button>
      </Callout>
    </section>
  )
}

function Playbook({ go }) {
  return (
    <section className="animate-fade">
      <SectionTitle sub="Complete these five sections for every agent. The same content powers your documentation and your agent/app description — write it once, use it everywhere.">
        The Copilot Agent Builder Playbook
      </SectionTitle>

      {PLAYBOOK.map((b) => (
        <div key={b.n} className="bg-card border border-line rounded-2xl p-6 mb-4 shadow-glow">
          <div className="flex items-center gap-3.5 mb-1">
            <div className="min-w-[42px] h-[42px] rounded-xl grid place-items-center font-extrabold text-lg text-white bg-gradient-to-br from-brand to-accent">
              {b.n}
            </div>
            <h3 className="m-0 text-xl font-bold">{b.title}</h3>
          </div>
          <ul className="mt-3.5 p-0 list-none">
            {b.items.map((it, i) => (
              <li key={i} className="relative pl-7 py-2 border-b border-dashed border-white/5 last:border-0 text-muted">
                <span className="absolute left-1.5 top-4 w-2 h-2 rounded bg-brand2" />
                <span dangerouslySetInnerHTML={{ __html: it.html }} />
                <Tag type={it.tag} />
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Callout icon="📝">
        <b>Tip:</b> Copy these five headings straight into your submission. A complete playbook = a faster approval.
        See the{' '}
        <button onClick={() => go('prompts')} className="text-brand2 underline">Prompt Library →</button>
      </Callout>
    </section>
  )
}

function Compare() {
  return (
    <section className="animate-fade">
      <SectionTitle sub="Pick the lightest tool that meets your need. You can always start in Lite and upgrade — agents built in the lite maker can be copied and extended into the full Copilot Studio.">
        Copilot Lite vs Copilot Studio
      </SectionTitle>

      <div className="overflow-auto border border-line rounded-2xl">
        <table className="w-full border-collapse min-w-[680px]">
          <thead>
            <tr>
              <th className="p-4 text-left bg-card2 text-muted w-52"></th>
              <th className="p-4 text-left bg-card2 border-l-2 border-l-brand2/40 text-sm">🪶 Copilot Lite (Agent Builder)</th>
              <th className="p-4 text-left bg-card2 border-l-2 border-l-accent/40 text-sm">🛠️ Copilot Studio</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map(([k, lite, studio]) => (
              <tr key={k} className="hover:bg-white/5">
                <td className="p-4 border-b border-line text-muted text-sm">{k}</td>
                <td className="p-4 border-b border-line border-l-2 border-l-brand2/40 text-sm" dangerouslySetInnerHTML={{ __html: lite.replace('✗', '<span class="text-bad font-bold">✗</span>').replace('✓', '<span class="text-good font-bold">✓</span>') }} />
                <td className="p-4 border-b border-line border-l-2 border-l-accent/40 text-sm" dangerouslySetInnerHTML={{ __html: studio.replace('✗', '<span class="text-bad font-bold">✗</span>').replace('✓', '<span class="text-good font-bold">✓</span>') }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-5">
        <Card ic="🪶" h="Choose Lite when…" p="You need a quick FAQ/onboarding/doc assistant grounded in SharePoint or uploaded files, for yourself or your team, with no external data or workflows." />
        <Card ic="🛠️" h="Choose Studio when…" p="You need connectors to external systems, multi-step automation, autonomous actions, enterprise governance, or publishing to channels beyond M365 Copilot." />
      </div>

      <SectionTitle>Personal vs Managed agents</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        <Card ic="👤" h="Personal agent" p="No-code, created by an individual within M365 Copilot, creator-managed, internal productivity focus. Great for low-risk, single-team scenarios." />
        <Card ic="🏢" h="Managed agent" p="Built in Copilot Studio, IT-governed across environments (dev/test/prod) with DLP, audit logs, and ALM. Required for sensitive data or enterprise-wide deployment." />
      </div>
    </section>
  )
}

function PromptCard({ p }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(p.code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <div className="bg-[#0c1530] border border-line rounded-2xl overflow-hidden mb-5">
      <div className="flex items-center justify-between px-4 py-3 bg-card2 border-b border-line">
        <b className="text-sm">{p.title}</b>
        <div className="flex gap-2.5 items-center">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${p.badgeClass}`}>{p.badge}</span>
          <button onClick={copy} className={`cursor-pointer border border-line rounded-lg px-3 py-1 text-xs font-bold transition ${copied ? 'bg-good text-white' : 'bg-card text-muted hover:text-white hover:bg-brand'}`}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <pre className="m-0 p-4 whitespace-pre-wrap font-mono text-[13.5px] text-[#cdd7f5] leading-relaxed">{p.code}</pre>
    </div>
  )
}

function Prompts() {
  return (
    <section className="animate-fade">
      <SectionTitle sub="The exact prompts people should use to generate an agent — one tuned for Copilot Studio, one for the Copilot Lite agent builder. Copy, paste, and adjust the bracketed parts.">
        Prompt Library
      </SectionTitle>
      {PROMPTS.map((p) => <PromptCard key={p.title} p={p} />)}
      <Callout icon="🎯">
        <b>Rule of thumb:</b> If your generation prompt mentions <b>connectors, workflows, approvals, or external systems</b> →
        you need <b>Copilot Studio</b>. If it's purely <b>"answer questions from these documents"</b> → <b>Lite</b> is enough.
      </Callout>
    </section>
  )
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-card border border-line rounded-2xl mb-3 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-3.5 font-bold text-base hover:bg-card2 transition"
      >
        {item.q}
        <span className={`text-brand2 text-xl transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 m-0 text-muted text-[14.5px]">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

function Faq() {
  return (
    <section className="animate-fade">
      <SectionTitle sub="Answer these as you plan — they double as the questions on the use-case submission form.">
        Frequently Asked Questions
      </SectionTitle>
      {FAQ.map((f) => <FaqItem key={f.q} item={f} />)}
    </section>
  )
}

/* ---------- Root App ---------- */

export default function App() {
  const [page, setPage] = useState('home')
  const go = (id) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3.5">
          <button onClick={() => go('home')} className="flex items-center gap-3 font-bold tracking-wide">
            <span className="w-9 h-9 rounded-xl grid place-items-center text-lg bg-gradient-to-br from-brand to-accent shadow-glow">🧭</span>
            <span className="text-left leading-none">
              Copilot Agent Builder Playbook
              <small className="block font-medium text-muted text-[11px] tracking-wider mt-0.5">FISCAL PLATFORM</small>
            </span>
          </button>
          <nav className="hidden md:flex gap-1.5">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition ${
                  page === n.id
                    ? 'text-white bg-gradient-to-br from-brand to-accent'
                    : 'text-muted hover:text-txt hover:bg-card'
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-5 pt-8 pb-20">
        {page === 'home' && <Home go={go} />}
        {page === 'playbook' && <Playbook go={go} />}
        {page === 'compare' && <Compare />}
        {page === 'prompts' && <Prompts />}
        {page === 'faq' && <Faq />}

        {/* Sources */}
        <div className="max-w-6xl mx-auto mt-8 text-xs text-muted">
          <b>Reference guidance (Microsoft Learn):</b><br />
          • <a className="text-brand2 hover:underline" href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/" target="_blank" rel="noreferrer">Microsoft Copilot Studio documentation</a><br />
          • <a className="text-brand2 hover:underline" href="https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/" target="_blank" rel="noreferrer">Build agents for Microsoft 365 Copilot (Agent Builder / lite)</a><br />
          • <a className="text-brand2 hover:underline" href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/" target="_blank" rel="noreferrer">Copilot Studio guidance, governance & ALM best practices</a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-line py-7 text-center text-muted text-[13px]">
        Copilot Agent Builder Playbook · <b>FISCAL Platform</b> · Prototype — content for internal enablement only.
      </footer>
    </>
  )
}