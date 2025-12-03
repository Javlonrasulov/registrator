import { Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'
import Management from './pages/Management.jsx'
import Services from './pages/Services.jsx'
import Database from './pages/Database.jsx'
import MyRequests from './pages/MyRequests.jsx'
import Help from './pages/Help.jsx'

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/management" element={<Management />} />
          <Route path="/services" element={<Services />} />
          <Route path="/database" element={<Database />} />
          <Route path="/my-requests" element={<MyRequests />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
    </>
  )
}

export default App
