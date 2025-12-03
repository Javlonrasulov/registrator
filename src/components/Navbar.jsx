import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Registrator ofisi</span>
        </div>

        <button 
          className="burger-menu" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'mobile-open' : ''}`}>
          <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`} onClick={() => setIsOpen(false)}>So'rovlar</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsOpen(false)}>Biz haqimizda</Link>
          <Link to="/management" className={`nav-link ${isActive('/management')}`} onClick={() => setIsOpen(false)}>Rahbariyat</Link>
          <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={() => setIsOpen(false)}>Xizmat ko'rsatish bo'limi</Link>
          <Link to="/database" className={`nav-link ${isActive('/database')}`} onClick={() => setIsOpen(false)}>Ma'lumotlar bazasi</Link>
          <Link to="/my-requests" className={`nav-link ${isActive('/my-requests')}`} onClick={() => setIsOpen(false)}>Mening so'rovlarim</Link>
          <Link to="/help" className={`nav-link ${isActive('/help')}`} onClick={() => setIsOpen(false)}>Yordam</Link>
        </div>
      </div>
    </nav>
  )
}
