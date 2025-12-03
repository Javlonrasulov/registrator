import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Dashboard.css'

export default function Dashboard() {
  const services = [
    {
      icon: '🎓',
      title: "Akademik fo'quv faoliyati",
      description: "Stipendiyalar, grantlar, tanlovlar va boshqa o'quv masalalari",
      bgColor: '#e3f2fd'
    },
    {
      icon: '👥',
      title: "Yoshlar masalalari va ma'naviy-ma'rifiy faoliyat",
      description: "Yoshlar bilan ishlash, ma'naviy-ma'rifiy tadbirlar",
      bgColor: '#e8f5e9'
    },
    {
      icon: '🌐',
      title: "Xalqaro aloqalar faoliyati",
      description: "Xalqaro hamkorlik, talabalar almashinuvi dasturlari",
      bgColor: '#f3e5f5'
    },
    {
      icon: '💰',
      title: "Buxgalteriya va marketing",
      description: "Moliyaviy masalalar, to'lovlar, marketing xizmatlari",
      bgColor: '#fff8e1'
    },
    {
      icon: '🔬',
      title: "Ilmiy faoliyat",
      description: "Ilmiy tadqiqotlar, konferensiyalar, nashirlar",
      bgColor: '#fce4ec'
    },
    {
      icon: '⚙️',
      title: "Qo'shimcha xizmatlar",
      description: "Boshqa xizmatlar va yordam",
      bgColor: '#f5f5f5'
    }
  ]

  return (
    <div className="dashboard-page">
      <Navbar />
      
      <main className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Xizmat turlari</h1>
            <p className="dashboard-subtitle">So'rov yuborish uchun kerakli kategoriyani tanlang</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" style={{ '--bg-color': service.bgColor }}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
