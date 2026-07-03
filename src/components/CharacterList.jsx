import CharacterCard from './CharacterCard'

function CharacterList() {
  const characters = []

  return (
    <section className="character-list">
      <h2>Listado de personajes</h2>

      {characters.length === 0 ? (
        <p className="empty-message">No hay personajes para mostrar.</p>
      ) : (
        <div className="character-grid">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </section>
  )
}

export default CharacterList
