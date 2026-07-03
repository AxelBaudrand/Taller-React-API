function FavoritesPanel({ favorites, removeFavorite }) {
  return (
    <section className="panel">
      <h2>Favoritos</h2>

      {favorites.length === 0 ? (
        <p className="empty-message">No hay favoritos.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((character) => (
            <li key={character.id} className="favorite-item">
              <img
                src={character.image}
                alt={character.name}
                className="favorite-image"
              />
              <span>{character.name}</span>
              <button
                type="button"
                onClick={() => removeFavorite(character.id)}
              >
                Quitar de favoritos
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default FavoritesPanel
