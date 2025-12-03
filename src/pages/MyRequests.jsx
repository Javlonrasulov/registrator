import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CommonPage.css'
import './MyRequests.css'

export default function MyRequests() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - arizalar
  const requests = [
    {
      id: '001',
      status: 'completed',
      statusLabel: 'Bajarildi',
      title: 'Stipendiya uchun ariza',
      category: "Akademik (o'quv) faoliyati",
      description: "2024-2025 o'quv yili uchun davlat stipendiyasiga ariza",
      date: '15-noyabr, 2024',
      progress: 100
    },
    {
      id: '002',
      status: 'in-progress',
      statusLabel: "Ko'rib chiqilmoqda",
      title: 'Talaba guvohnomasi',
      category: "Xizmat ko'rsatish bo'limi",
      description: "Talaba guvohnomasini yo'qotganim uchun yangi nusxasini olish",
      date: '28-noyabr, 2024',
      progress: 50
    },
    {
      id: '003',
      status: 'new',
      statusLabel: 'Yangi',
      title: "Akademik ma'lumotnoma",
      category: "Akademik (o'quv) faoliyati",
      description: "Viza olish uchun o'qish ma'lumotnomasini so'rayapman",
      date: '1-dekabr, 2024',
      progress: 0
    },
    {
      id: '004',
      status: 'in-progress',
      statusLabel: "Ko'rib chiqilmoqda",
      title: 'Xalqaro almashinuv dasturi',
      category: 'Xalqaro aloqalar faoliyati',
      description: 'Erasmus+ dasturiga qatnashish uchun ariza',
      date: '20-noyabr, 2024',
      progress: 50
    },
    {
      id: '005',
      status: 'completed',
      statusLabel: 'Bajarildi',
      title: 'Konferensiyaga qatnashish',
      category: 'Ilmiy faoliyat',
      description: 'Respublika ilmiy-amaliy konferensiyaga qatnashish uchun ariza',
      date: '10-noyabr, 2024',
      progress: 100
    },
    {
      id: '006',
      status: 'new',
      statusLabel: 'Yangi',
      title: "To'lov ma'lumotlari",
      category: 'Buxgalteriya va marketing',
      description: "O'quv to'lovi bo'yicha ma'lumot olish",
      date: '2-dekabr, 2024',
      progress: 0
    }
  ]

  const totalRequests = requests.length
  const newRequests = requests.filter(r => r.status === 'new').length
  const inProgressRequests = requests.filter(r => r.status === 'in-progress').length
  const completedRequests = requests.filter(r => r.status === 'completed').length

  const filters = [
    { id: 'all', label: 'Barchasi', count: totalRequests },
    { id: 'new', label: 'Yangi', count: newRequests },
    { id: 'in-progress', label: 'Jarayonda', count: inProgressRequests },
    { id: 'completed', label: 'Bajarilgan', count: completedRequests }
  ]

  // Filter arizalar
  const filteredRequests = requests.filter(req => {
    const matchesFilter = activeFilter === 'all' || req.status === activeFilter
    const matchesSearch = req.id.includes(searchQuery) ||
                         req.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         req.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="common-page">
      <Navbar />
      <main className="page-main">
        <div className="page-container">
          <h1 className="page-title">Mening arizalarim</h1>
          <p className="requests-count">Jami so'rovlar: {totalRequests}</p>
          
          <div className="page-content">
            {/* Filter Section */}
            <div className="requests-filter">
              <div className="filter-buttons">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>

              <div className="filter-search">
                <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Ariza raqamini kiriting..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Requests List */}
            <div className="requests-list">
              {filteredRequests.length === 0 ? (
                <p className="empty-state">Arizalar topilmadi</p>
              ) : (
                filteredRequests.map(request => (
                  <div key={request.id} className="request-card">
                    <div className="request-header">
                      <div className="request-id-status">
                        <span className="request-id">#{request.id}</span>
                        <span className={`status-badge status-${request.status}`}>
                          {request.status === 'new' && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                          )}
                          {request.status === 'in-progress' && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                            </svg>
                          )}
                          {request.status === 'completed' && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          )}
                          {request.statusLabel}
                        </span>
                      </div>
                      <div className="request-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {request.date}
                      </div>
                    </div>

                    <h3 className="request-title">{request.title}</h3>
                    
                    <div className="request-category">{request.category}</div>
                    
                    <p className="request-description">{request.description}</p>

                    <div className="request-progress">
                      <div className="progress-labels">
                        <span className="progress-status">
                          {request.status === 'new' && 'Yangi'}
                          {request.status === 'in-progress' && "Ko'rib chiqilmoqda"}
                          {request.status === 'completed' && 'Bajarildi'}
                        </span>
                        <span className="progress-status">
                          {request.status === 'completed' && 'Bajarildi'}
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-track">
                          <div 
                            className={`progress-fill progress-${request.status}`}
                            style={{ width: `${request.progress}%` }}
                          />
                        </div>
                        <div className="progress-dots">
                          <span className={`progress-dot ${request.progress >= 0 ? 'active' : ''} dot-${request.status}`}>●</span>
                          <span className={`progress-dot ${request.progress >= 50 ? 'active' : ''} dot-${request.status}`}>●</span>
                          <span className={`progress-dot ${request.progress >= 100 ? 'active' : ''} dot-${request.status}`}>●</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
