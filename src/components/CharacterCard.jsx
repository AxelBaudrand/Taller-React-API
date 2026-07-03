function CharacterCard({ character }) {
  return (
    <article className="character-card">
      <img src={character.image} alt={character.name} />

      <div className="character-info">
        <h3>{character.name}</h3>
        <p>Estado: {character.status}</p>
        <p>Especie: {character.species}</p>
      </div>
    </article>
  )
}

export default CharacterCard
