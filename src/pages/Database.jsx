import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CommonPage.css'
import './InProgress.css'

export default function Database() {
  const [progress, setProgress] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev >= 100 ? 1 : prev + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="common-page">
      <Navbar />
      <main className="page-main">
        <div className="page-container">
          <h1 className="page-title">Ma'lumotlar bazasi</h1>
          <div className="page-content">
            <div className="in-progress">
              <span className="progress-percent">{progress}%</span>
              <p className="intro-text">Jarayonda</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
