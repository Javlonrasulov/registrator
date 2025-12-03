import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CommonPage.css'

export default function About() {
  return (
    <div className="common-page">
      <Navbar />
      <main className="page-main">
        <div className="page-container">
          <h1 className="page-title">Biz haqimizda</h1>
          <div className="page-content">
            <p className="intro-text">Registrator ofisi haqida ma'lumot</p>

            {/* Vazifamiz */}
            <div className="info-card">
              <div className="card-icon briefcase">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
              <h2>Vazifamiz</h2>
              <p>Registrator ofisi talabalar uchun barcha ma'muriy xizmatlarni bir joyda taqdim etish va ularning akademik hayotini osonlashtirishga qaratilgan. Biz talabalar va universitet o'rtasidagi asosiy aloqa bo'g'ini hisoblanmiz.</p>
            </div>

            {/* Asosiy funksiyalar va Maqsadlarimiz - Grid */}
            <div className="features-grid">
              {/* Asosiy funksiyalar */}
              <div className="feature-card">
                <div className="card-icon target">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3>Asosiy funksiyalar</h3>
                <ul>
                  <li>Talabalar ma'lumotlarini to'plash va saqlash</li>
                  <li>Akademik hujjatlarni rasmiylashtirish</li>
                  <li>Talabalar murojaatlarini ko'rib chiqish</li>
                  <li>Boshqa bo'limlar bilan hamkorlik</li>
                </ul>
              </div>

              {/* Maqsadlarimiz */}
              <div className="feature-card">
                <div className="card-icon award">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3>Maqsadlarimiz</h3>
                <ul>
                  <li>Yuqori sifatli xizmat ko'rsatish</li>
                  <li>Jarayonlarni raqamlashitirish</li>
                  <li>Talabalar ehtiyojlarini qondirish</li>
                  <li>Shaffoflik va ochiqlikni ta'minlash</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
