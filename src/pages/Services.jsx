import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CommonPage.css'

export default function Services() {
  return (
    <div className="common-page">
      <Navbar />
      <main className="page-main">
        <div className="page-container">
          <h1 className="page-title">Xizmat ko'rsatish bo'limi</h1>
          <div className="page-content">
            <p>Xizmat ko'rsatish bo'limi haqida ma'lumotlar...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
