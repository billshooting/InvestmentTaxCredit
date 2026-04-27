import React from 'react';

const focusAreas = [
  {
    label: 'Investments',
    metric: '3 streams',
    value: 'Holdings, contributions, dividends, and account activity',
    tone: 'mint',
  },
  {
    label: 'Tax',
    metric: 'Yearly view',
    value: 'Deductions, credits, slips, receipts, and filing notes',
    tone: 'amber',
  },
  {
    label: 'Credit',
    metric: 'Monthly pulse',
    value: 'Cards, balances, utilization, due dates, and payments',
    tone: 'sky',
  },
];

const roadmapItems = [
  {
    label: 'Backend',
    value: 'Connect to the Azure-hosted .NET Core APIs',
  },
  {
    label: 'Workspace',
    value: 'Add account, tax year, and credit tracking views',
  },
  {
    label: 'Mobile',
    value: 'Prepare shared API contracts for future mobile clients',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Investment Tax Credit home">
          <span className="brand-mark" aria-hidden="true">ITC</span>
          <span>
            <strong>Investment Tax Credit</strong>
            <small>Canada personal tracker</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#overview">Overview</a>
          <a href="#focus">Focus</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="overview" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">Bright, simple, Azure-ready</p>
            <h1 id="page-title">Track investment, tax, and credit details with less friction.</h1>
            <p className="intro">
              A lightweight React website for organizing personal Canadian finance records,
              starting with static content and ready to grow into connected workflows.
            </p>
          </div>

          <div className="hero-visual" aria-label="Project snapshot">
            <div className="visual-toolbar">
              <span />
              <span />
              <span />
            </div>
            <div className="visual-heading">
              <span>Frontend</span>
              <strong>React static site</strong>
            </div>
            <div className="progress-stack" aria-hidden="true">
              <span className="progress-row investments" />
              <span className="progress-row tax" />
              <span className="progress-row credit" />
            </div>
            <div className="mini-grid" aria-hidden="true">
              <span>Azure</span>
              <span>.NET API</span>
              <span>Mobile ready</span>
            </div>
            <p>
              Built as a static app that can be deployed quickly, then connected to
              backend APIs as the product matures.
            </p>
          </div>
        </section>

        <section className="metric-strip" aria-label="Website design priorities">
          <div>
            <strong>Static-first</strong>
            <span>Simple Azure deployment</span>
          </div>
          <div>
            <strong>Readable</strong>
            <span>Clear personal finance views</span>
          </div>
          <div>
            <strong>Expandable</strong>
            <span>Backend and mobile friendly</span>
          </div>
        </section>

        <section className="section-heading" id="focus" aria-labelledby="focus-title">
          <p className="eyebrow">Core tracking areas</p>
          <h2 id="focus-title">A clean place for the records that usually scatter.</h2>
        </section>

        <section className="content-grid" aria-label="Project areas">
          {focusAreas.map((area) => (
            <article className={`info-card ${area.tone}`} key={area.label}>
              <span className="card-metric">{area.metric}</span>
              <h3>{area.label}</h3>
              <p>{area.value}</p>
            </article>
          ))}
        </section>

        <section className="roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
          <div className="roadmap-copy">
            <p className="eyebrow">Next build steps</p>
            <h2 id="roadmap-title">Designed to start light and scale cleanly.</h2>
            <p>
              The site stays static for now, while the structure leaves room for the
              Azure backend and a future mobile experience.
            </p>
          </div>
          <div className="roadmap-list">
            {roadmapItems.map((item) => (
              <article className="roadmap-item" key={item.label}>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
