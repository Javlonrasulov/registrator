import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CommonPage.css'

export default function MyRequests() {
  return (
    <div className="common-page">
      <Navbar />
      <main className="page-main">
        <div className="page-container">
          <h1 className="page-title">Mening so'rovlarim</h1>
          <div className="page-content">
            <p>Sizning so'rovlaringiz ro'yxati...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
