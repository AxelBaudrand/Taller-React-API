import CharacterCard from './CharacterCard'

function CharacterList({ characters, addFavorite, removeFavorite, isFavorite }) {
  return (
    <section className="character-list">
      <h2>Listado de personajes</h2>

      {characters.length === 0 ? (
        <p className="empty-message">No se encontraron personajes.</p>
      ) : (
        <div className="character-grid">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              isFavorite={isFavorite}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default CharacterList
