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
            <p>Registrator ofisi haqida ma'lumotlar...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
