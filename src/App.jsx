import { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Stats from './components/Stats'
import CharacterList from './components/CharacterList'
import FavoritesPanel from './components/FavoritesPanel'
import BlockedPanel from './components/BlockedPanel'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar personajes')
        }

        return response.json()
      })
      .then((data) => {
        setCharacters(data.results)
        setLoading(false)
      })
      .catch(() => {
        setError('No se pudieron cargar los personajes.')
        setLoading(false)
      })
  }, [])

  const addFavorite = (character) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((item) => item.id === character.id)) {
        return prevFavorites
      }
      return [...prevFavorites, character]
    })
  }

  const removeFavorite = (characterId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== characterId)
    )
  }

  const isFavorite = (characterId) =>
    favorites.some((item) => item.id === characterId)

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <Header />

      <main className="app-layout">
        <section className="main-section">
          <SearchBar search={search} setSearch={setSearch} />
          <Stats totalCharacters={filteredCharacters.length} />

          {loading && <p className="empty-message">Cargando personajes...</p>}
          {error && <p className="error-message">{error}</p>}
          {!loading && !error && (
            <CharacterList
              characters={filteredCharacters}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              isFavorite={isFavorite}
            />
          )}
        </section>

        <aside className="side-panel">
          <FavoritesPanel
            favorites={favorites}
            removeFavorite={removeFavorite}
          />
          <BlockedPanel />
        </aside>
      </main>
    </div>
  )
}

export default App
