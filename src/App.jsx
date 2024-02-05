import './App.css'
import { Routes, Route } from'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Articles from './components/Articles/Articles'

function App() {

  return (
    <>
      <NavBar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllArticles" element={<Articles />} />
      </Routes>
    </>
  )
}

export default App



{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}
