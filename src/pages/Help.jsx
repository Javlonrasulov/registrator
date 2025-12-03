import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CommonPage.css'

export default function Help() {
  return (
    <div className="common-page">
      <Navbar />
      <main className="page-main">
        <div className="page-container">
          <h1 className="page-title">Yordam</h1>
          <div className="page-content">
            <p>Yordam va qo'llanma...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
