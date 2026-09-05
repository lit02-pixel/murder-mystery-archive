const sections = [
  {
    code: 'UNKNOWN',
    label: 'UNDISCLOSED CASES',
    description: 'まだ内容を知らない事件ファイル',
    stamp: 'SEALED',
  },
  {
    code: 'KNOWN',
    label: 'CASE ARCHIVES',
    description: 'すでに内容を知っている事件記録',
    stamp: 'ARCHIVED',
  },
]

function App() {
  return (
    <main className="archive">
      <header className="masthead">
        <div>
          <p className="eyebrow">PRIVATE COLLECTION / MM–001</p>
          <h1>CASE ARCHIVE</h1>
          <p className="subtitle">Murder Mystery Scenario Records</p>
        </div>
        <button className="new-case" type="button">＋ NEW CASE FILE</button>
      </header>

      <section className="intro">
        <span>CONFIDENTIAL</span>
        <p>遊んだ、観た、持っている。そして、まだ知らない事件を記録する。</p>
      </section>

      <nav className="filters" aria-label="Scenario filters">
        {['ALL', 'WANT', 'OWN', 'PL', 'GM', 'WATCHED'].map((filter, index) => (
          <button className={index === 0 ? 'active' : ''} key={filter} type="button">{filter}</button>
        ))}
      </nav>

      <section className="case-grid">
        {sections.map((section) => (
          <article className={`case-folder ${section.code.toLowerCase()}`} key={section.code}>
            <div className="folder-tab">{section.code === 'UNKNOWN' ? '01' : '02'}</div>
            <div className="folder-meta">
              <span>CASE CLASSIFICATION</span>
              <span>0 FILES</span>
            </div>
            <div className="folder-content">
              <p className="section-label">{section.label}</p>
              <h2>{section.code}</h2>
              <p>{section.description}</p>
              <div className="stamp">{section.stamp}</div>
            </div>
            <button type="button" className="open-folder">OPEN FILES <span>→</span></button>
          </article>
        ))}
      </section>

      <footer>PERSONAL ARCHIVE — AUTHORIZED ACCESS ONLY</footer>
    </main>
  )
}

export default App
