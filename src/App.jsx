import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx'

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
