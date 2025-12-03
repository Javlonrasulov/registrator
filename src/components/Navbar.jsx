import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
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
          {/* Search - Mobile Top */}
          <div className="mobile-search">
            <div className="search-box">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input 
                type="text" 
                placeholder="Xizmatlar, xodimlar yoki ma'lumotlarni qidirish..."
                className="search-input"
              />
            </div>
          </div>

          {/* Nav Links - Middle */}
          <div className="mobile-nav-links">
          <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`} onClick={() => setIsOpen(false)}>So'rovlar</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsOpen(false)}>Biz haqimizda</Link>
          <Link to="/management" className={`nav-link ${isActive('/management')}`} onClick={() => setIsOpen(false)}>Rahbariyat</Link>
          <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={() => setIsOpen(false)}>Xizmat ko'rsatish bo'limi</Link>
          <Link to="/database" className={`nav-link ${isActive('/database')}`} onClick={() => setIsOpen(false)}>Ma'lumotlar bazasi</Link>
          <Link to="/my-requests" className={`nav-link ${isActive('/my-requests')}`} onClick={() => setIsOpen(false)}>Mening arizalarim</Link>
          <Link to="/help" className={`nav-link ${isActive('/help')}`} onClick={() => setIsOpen(false)}>Yordam</Link>
          </div>

          {/* Logout - Mobile Bottom */}
          <div className="mobile-logout">
            <Link to="/login" className="logout-btn" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Chiqish</span>
            </Link>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="desktop-actions">
          <button 
            className="search-icon-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <Link to="/login" className="desktop-logout-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Chiqish</span>
          </Link>
        </div>
      </div>

      {/* Desktop Search Dropdown */}
      {searchOpen && (
        <div className="search-dropdown">
          <div className="search-dropdown-content">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input 
              type="text" 
              placeholder="Xizmatlar, xodimlar yoki ma'lumotlarni qidirish..."
              className="search-dropdown-input"
              autoFocus
            />
            <button className="search-submit-btn">
              Izlash
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
