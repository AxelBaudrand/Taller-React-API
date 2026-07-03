function CharacterCard({
  character,
  addFavorite,
  removeFavorite,
  isFavorite,
  blockCharacter,
  isBlocked,
}) {
  const favorite = isFavorite(character.id)
  const blocked = isBlocked(character.id)

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(character.id)
    } else {
      addFavorite(character)
    }
  }

  const handleBlock = () => {
    blockCharacter(character)
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
        <button type="button" onClick={handleBlock} disabled={blocked}>
          Bloquear
        </button>
      </div>
    </article>
  )
}

export default CharacterCard
