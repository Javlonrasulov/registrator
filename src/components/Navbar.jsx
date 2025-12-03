import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Registrator ofisi</span>
        </div>

        <div className="navbar-menu">
          <Link to="/dashboard" className="nav-link active">So'rovlar</Link>
          <Link to="/about" className="nav-link">Biz haqimizda</Link>
          <Link to="/management" className="nav-link">Rahbariyat</Link>
          <Link to="/services" className="nav-link">Xizmat ko'rsatish bo'limi</Link>
          <Link to="/database" className="nav-link">Ma'lumotlar bazasi</Link>
          <Link to="/my-requests" className="nav-link">Mening so'rovlarim</Link>
          <Link to="/help" className="nav-link">Yordam</Link>
        </div>
      </div>
    </nav>
  )
}
