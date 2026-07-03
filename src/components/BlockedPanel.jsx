function BlockedPanel({ blocked, unblockCharacter }) {
  return (
    <section className="panel">
      <h2>Bloqueados</h2>

      {blocked.length === 0 ? (
        <p className="empty-message">No hay bloqueados.</p>
      ) : (
        <ul className="blocked-list">
          {blocked.map((character) => (
            <li key={character.id} className="blocked-item">
              <img
                src={character.image}
                alt={character.name}
                className="blocked-image"
              />
              <span>{character.name}</span>
              <button
                type="button"
                onClick={() => unblockCharacter(character.id)}
              >
                Desbloquear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default BlockedPanel
