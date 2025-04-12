import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapView from './components/MapView'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="page">
      <div className="navbar-container">
        <NavBar />
      </div>
      
      <header className="page-header">
        <h1>Minneapolis Aid Map</h1>
      </header>
      
      <main className="map-container">
        <MapView />
      </main>
    </div>
  );
}
  

export default App
