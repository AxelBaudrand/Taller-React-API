function Stats({ totalCharacters, totalFavorites, totalBlocked }) {
  return (
    <section className="stats">
      <div className="stat-box">
        <span className="stat-number">{totalCharacters}</span>
        <p className="stat-label">Personajes</p>
      </div>

      <div className="stat-box">
        <span className="stat-number">{totalFavorites}</span>
        <p className="stat-label">Favoritos</p>
      </div>

      <div className="stat-box">
        <span className="stat-number">{totalBlocked}</span>
        <p className="stat-label">Bloqueados</p>
      </div>
    </section>
  )
}

export default Stats
