import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CommonPage.css'

export default function Database() {
  return (
    <div className="common-page">
      <Navbar />
      <main className="page-main">
        <div className="page-container">
          <h1 className="page-title">Ma'lumotlar bazasi</h1>
          <div className="page-content">
            <p>Ma'lumotlar bazasi...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
