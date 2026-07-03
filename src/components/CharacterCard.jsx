function CharacterCard({ character, addFavorite, removeFavorite, isFavorite }) {
  const favorite = isFavorite(character.id)

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(character.id)
    } else {
      addFavorite(character)
    }
  }

  return (
    <article className="character-card">
      <img src={character.image} alt={character.name} />

      <div className="character-info">
        <h3>{character.name}</h3>
        <p>Estado: {character.status}</p>
        <p>Especie: {character.species}</p>
        <button type="button" onClick={handleFavorite}>
          {favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        </button>
      </div>
    </article>
  )
}

export default CharacterCard
