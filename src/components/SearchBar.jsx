function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar personaje"
        aria-label="Buscar personaje"
        disabled
      />
      <button type="button" disabled>
        Buscar
      </button>
    </div>
  )
}

export default SearchBar
