function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar personaje"
        aria-label="Buscar personaje"
      />
    </div>
  )
}

export default SearchBar
