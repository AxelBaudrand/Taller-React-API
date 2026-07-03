function BlockedPanel() {
  const blocked = []

  return (
    <section className="panel">
      <h2>Bloqueados</h2>

      {blocked.length === 0 ? (
        <p className="empty-message">No hay bloqueados.</p>
      ) : (
        <ul>
          {blocked.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default BlockedPanel
