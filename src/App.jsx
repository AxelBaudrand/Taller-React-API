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

  return (
    <div className="app">
      <Header />

      <main className="app-layout">
        <section className="main-section">
          <SearchBar />
          <Stats totalCharacters={characters.length} />

          {loading && <p className="empty-message">Cargando personajes...</p>}
          {error && <p className="error-message">{error}</p>}
          {!loading && !error && <CharacterList characters={characters} />}
        </section>

        <aside className="side-panel">
          <FavoritesPanel />
          <BlockedPanel />
        </aside>
      </main>
    </div>
  )
}

export default App
