function FavoritesPanel() {
  const favorites = []

  return (
    <section className="panel">
      <h2>Favoritos</h2>

      {favorites.length === 0 ? (
        <p className="empty-message">No hay favoritos.</p>
      ) : (
        <ul>
          {favorites.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default FavoritesPanel
