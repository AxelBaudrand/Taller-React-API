import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Stats from './components/Stats'
import CharacterList from './components/CharacterList'
import FavoritesPanel from './components/FavoritesPanel'
import BlockedPanel from './components/BlockedPanel'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app-layout">
        <section className="main-section">
          <SearchBar />
          <Stats />
          <CharacterList />
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
