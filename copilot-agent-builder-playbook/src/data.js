export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'playbook', label: 'Playbook' },
  { id: 'compare', label: 'Lite vs Studio' },
  { id: 'prompts', label: 'Prompts' },
  { id: 'faq', label: 'FAQ' },
]

export const FEATURES = [
  { ic: '🎯', h: 'Purpose & Use Cases', p: 'Define what the agent does, what it should do, and the explicit non-goals.' },
  { ic: '👥', h: 'User Groups & Scope', p: 'Who it serves and whether it lives at team, function, or enterprise scope.' },
  { ic: '🗄️', h: 'Data & Tools', p: 'Knowledge sources, actions, flows and connectors — at a glance.' },
  { ic: '📚', h: 'User Enablement', p: 'A simple QRG plus example prompts so users get value on day one.' },
  { ic: '🔄', h: 'Ownership & Lifecycle', p: 'Business owner, maintainers, and how updates are handled.' },
  { ic: '✅', h: 'Submit Your Use Case', p: 'Answer the FAQ checklist, pick a build path, and submit with confidence.' },
]

export const PLAYBOOK = [
  {
    n: 1,
    title: 'Purpose & Use Cases',
    items: [
      { html: '<b>Clear description</b> of what the agent does — usable in docs <i>and</i> the agent/app description.' },
      { html: '<b>Primary use cases</b> — the specific jobs the agent is built for.', tag: 'do' },
      { html: '<b>Explicit non-goals</b> — out-of-scope topics to prevent misuse.', tag: 'dont' },
    ],
  },
  {
    n: 2,
    title: 'User Groups & Scope',
    items: [
      { html: '<b>Intended users</b> — the specific roles / teams who will use this agent.' },
      { html: '<b>Scope</b> — is this for a <b>team</b>, a <b>function</b>, or the <b>enterprise</b>? Scope drives the build path and governance.' },
    ],
  },
  {
    n: 3,
    title: 'Data & Tools (high-level)',
    items: [
      { html: '<b>Knowledge sources used</b> — SharePoint sites, files, OneNote, web, etc.' },
      { html: '<b>Actions / flows / connectors</b> — no deep tech detail, just visibility into what the agent can reach or trigger.' },
    ],
  },
  {
    n: 4,
    title: 'User Enablement',
    items: [
      { html: '<b>Simple user guide or QRG</b> — a one-pager so anyone can get started.' },
      { html: '<b>Example prompts</b> — show users exactly how to interact with the agent.' },
    ],
  },
  {
    n: 5,
    title: 'Ownership & Lifecycle',
    items: [
      { html: '<b>Business owner</b> — accountable for the agent\'s value and decisions.' },
      { html: '<b>Maintainer</b> — who keeps the content / logic current.' },
      { html: '<b>Updates</b> — how changes are requested, reviewed, and published.' },
    ],
  },
]

export const COMPARE_ROWS = [
  ['Best for', 'Simple Q&A over your content', 'Complex workflows & automation'],
  ['Where you build', 'Inside Microsoft 365 Copilot Chat', 'Standalone Copilot Studio app'],
  ['Data access', 'Microsoft 365 only (SharePoint, files, web)', 'M365 + external systems (ERP, CRM, APIs)'],
  ['Workflows / logic', '✗ No multi-step automation', '✓ Topics, branching, Power Automate'],
  ['Connectors', '✗ Limited', '✓ Hundreds of connectors'],
  ['Governance', 'Basic usage metrics', 'Enterprise ALM, DLP, environments, audit'],
  ['Publishing', 'Within M365 Copilot', 'Teams, web, external channels & apps'],
  ['Licensing', 'Included with M365 Copilot', 'Copilot Credits (packs / pay-as-you-go)'],
  ['Typical owner', 'Individual / small team (personal)', 'IT-governed (managed)'],
]

export const PROMPTS = [
  {
    title: '🪶 Generate a Copilot Lite agent',
    badge: 'LITE / AGENT BUILDER',
    badgeClass: 'bg-brand2/15 text-brand2 border-brand2/30',
    code: `Create an agent that helps [TEAM/ROLE] quickly find answers about [TOPIC].

Name: [Agent name]
Description: A simple Q&A assistant that answers questions about [topic] using our team's documents.

Instructions:
- Answer only using the connected knowledge sources below. If the answer isn't there, say so and point the user to [owner/contact].
- Keep answers short, friendly, and cite the source document where possible.
- Do NOT answer questions about [explicit non-goals].

Knowledge sources: [SharePoint site / folder / files — up to 20]

Starter prompts:
1) "How do I [common task]?"
2) "What is the policy for [X]?"
3) "Where can I find [document]?"`,
  },
  {
    title: '🛠️ Generate a Copilot Studio agent',
    badge: 'COPILOT STUDIO',
    badgeClass: 'bg-accent/15 text-accent border-accent/30',
    code: `Build an agent for [FUNCTION/ENTERPRISE] that [primary outcome], integrating with [systems].

Purpose: [What the agent does — 1-2 sentences usable as the app description]
Primary use cases:
- [Use case 1]
- [Use case 2]
Non-goals (do NOT handle):
- [Out-of-scope 1]

Intended users: [roles/teams]   |   Scope: [team / function / enterprise]

Knowledge sources: [SharePoint, files, web]
Actions / connectors: [e.g., ServiceNow, SAP, Power Automate flow to do X]
Workflow: When a user asks to [trigger], the agent should [step 1 → step 2 → step 3],
ask for confirmation before [any write/destructive action], then [outcome].

Tone: professional, concise. Always state that responses are AI-generated.
Escalation: if unable to resolve, hand off to [team/queue] with conversation context.`,
  },
]

export const FAQ = [
  {
    q: 'When should I use Copilot Lite?',
    a: 'Use Lite for simple, internal Q&A scenarios grounded in Microsoft 365 content — FAQs, onboarding guides, policy lookups, document assistants. No external data, no multi-step workflows, and it\'s included with your M365 Copilot license.',
  },
  {
    q: 'When should I use Copilot Studio?',
    a: 'Use Studio when you need connectors to external systems (ERP/CRM/APIs), multi-step automation or branching logic, autonomous actions, enterprise governance (DLP, environments, audit), or publishing beyond M365 Copilot. It uses Copilot Credits.',
  },
  {
    q: 'Personal agent or managed agent?',
    a: 'Personal: created by an individual, creator-managed, low-risk single-team productivity. Managed: IT-governed across dev/test/prod with DLP and ALM — required for sensitive data, broad audiences, or mission-critical processes.',
  },
  {
    q: 'Can I start in Lite and move to Studio later?',
    a: 'Yes. Agents built in the lite agent maker can be copied and extended into the full Copilot Studio app, unlocking lifecycle management, analytics, more connectors, and broader publishing. Start small, upgrade when needed.',
  },
  {
    q: "What's the best practice for submitting a use case?",
    a: '① Complete all 5 playbook sections. ② Pick a build path using the Lite vs Studio guide and justify it. ③ List knowledge sources & connectors/flows. ④ Name a business owner and a maintainer. ⑤ Add 3 example prompts + a short QRG. ⑥ State data sensitivity & audience size. A complete submission = faster approval.',
  },
  {
    q: 'How do I keep my agent accurate over time?',
    a: 'Connect only trusted sources, review/clean knowledge regularly, test before publishing, include a version note, and follow the update process you defined in the Ownership & Lifecycle section.',
  },
]