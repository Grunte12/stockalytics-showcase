import { useState } from "react";
import { news, optionLevels, priceSeries, technicalSignals, ticker } from "./mockData";

const tabs = ["Overview", "Technical", "Market Structure", "Options", "News", "Fundamentals"] as const;

function Sparkline() {
  const max = Math.max(...priceSeries);
  const min = Math.min(...priceSeries);
  const points = priceSeries
    .map((value, index) => {
      const x = (index / (priceSeries.length - 1)) * 100;
      const y = 100 - ((value - min) / (max - min)) * 80 - 10;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className="sparkline" role="img" aria-label="Mock price trend">
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Overview");

  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">Public mock showcase</p>
          <h1>Stockalytics</h1>
          <p className="lede">
            A private stock analytics platform that brings technicals, market structure, options, fundamentals, and news into one decision workflow.
          </p>
        </div>
        <div className="ticker-card">
          <span>{ticker.symbol}</span>
          <strong>${ticker.price.toFixed(2)}</strong>
          <em>+{ticker.changePct}% today</em>
        </div>
      </section>

      <nav className="tabs" aria-label="Analysis sections">
        {tabs.map((tab) => (
          <button key={tab} className={active === tab ? "active" : ""} onClick={() => setActive(tab)}>
            {tab}
          </button>
        ))}
      </nav>

      <section className="dashboard">
        <article className="panel main-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Selected ticker</p>
              <h2>{ticker.company}</h2>
            </div>
            <span className="badge">{active}</span>
          </div>
          <Sparkline />
        </article>

        <article className="panel">
          <h3>Technical Signals</h3>
          <div className="signal-list">
            {technicalSignals.map((signal) => (
              <div key={signal.label} className="signal">
                <div>
                  <strong>{signal.label}</strong>
                  <span>{signal.value}</span>
                </div>
                <meter min="0" max="100" value={signal.score} />
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <h3>Options Levels</h3>
          {optionLevels.map((level) => (
            <div key={level.strike} className="level">
              <span>{level.strike}</span>
              <strong>{level.type}</strong>
              <em>{level.exposure}% exposure</em>
            </div>
          ))}
        </article>

        <article className="panel wide">
          <h3>News Intelligence</h3>
          <div className="news-grid">
            {news.map((item) => (
              <div key={item.title} className="news-item">
                <span>{item.tone}</span>
                <strong>{item.title}</strong>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="architecture">
        <h2>Sanitized Architecture</h2>
        <div className="flow">
          <span>React dashboard</span>
          <span>Private API layer</span>
          <span>Market data providers</span>
          <span>Database and cache</span>
        </div>
        <p>
          This showcase intentionally uses local mock data. The production source, backend routes, deployment details, provider integrations, and database schema are private.
        </p>
      </section>
    </main>
  );
}

export default App;

