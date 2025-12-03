import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CommonPage.css'
import './Help.css'

export default function Help() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "Qanday qilib so'rov yuborish mumkin?",
      answer: "Asosiy sahifadan kerakli kategoriyani tanlang, so'ngra xizmatni tanlang va forma to'ldiring. Tizimga kirish talab qilinadi."
    },
    {
      question: "So'rovim qancha vaqtda ko'rib chiqiladi?",
      answer: "Odatda so'rovlar 3-5 ish kuni ichida ko'rib chiqiladi. Murakkab holatlarda bu muddat uzayishi mumkin."
    },
    {
      question: "So'rov statusini qanday kuzatish mumkin?",
      answer: "\"Mening so'rovlarim\" bo'limida barcha so'rovlaringizni va ularning statusini ko'rishingiz mumkin."
    },
    {
      question: "Qanday hujjatlarni biriktirish mumkin?",
      answer: "PDF, JPG, PNG formatidagi hujjatlarni biriktirish mumkin. Har bir fayl hajmi 5 MB dan oshmasligi kerak."
    },
    {
      question: "Tizimga kirishda muammo bo'lsa nima qilish kerak?",
      answer: "Qo'llab-quvvatlash xizmatiga murojaat qiling yoki universitet ma'muriyatiga murojaat eting."
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="common-page">
      <Navbar />
      <main className="page-main">
        <div className="page-container">
          <h1 className="page-title">Yordam</h1>
          <div className="page-content">
            <p className="intro-text">Ko'p so'raladigan savollar va yordam</p>

            {/* Ko'p so'raladigan savollar */}
            <div className="faq-section">
              <div className="section-header">
                <div className="section-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <h2>Ko'p so'raladigan savollar</h2>
              </div>

              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFaq(index)}>
                      <span>{faq.question}</span>
                      <svg className="faq-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="support-section">
              <div className="support-header">
                <div className="support-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18" />
                  </svg>
                </div>
                <h2>Qo'llab-quvvatlash xizmati</h2>
              </div>
              <p className="support-intro">Agar savollaringiz bo'lsa, biz bilan bog'laning:</p>

              {/* Qo'llanmalar */}
              <div className="resources-section">
                <h3>Qo'llanmalar</h3>
                <p className="resources-subtitle">Tizimdan foydalanish bo'yicha qo'llanmalar</p>
                
                <div className="resources-grid">
                  <a href="#" className="resource-card">
                    <div className="resource-icon book">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4>Tizimdan foydalanish</h4>
                      <p>Asosiy funksiyalar va imkoniyatlar</p>
                    </div>
                  </a>

                  <a href="#" className="resource-card">
                    <div className="resource-icon send">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </div>
                    <div>
                      <h4>So'rov yuborish</h4>
                      <p>Qadam-baqadam qo'llanma</p>
                    </div>
                  </a>

                  <a href="#" className="resource-card">
                    <div className="resource-icon file">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                        <polyline points="13 2 13 9 20 9" />
                      </svg>
                    </div>
                    <div>
                      <h4>Hujjatlarni biriktirish</h4>
                      <p>Fayl formatlari va talablari</p>
                    </div>
                  </a>

                  <a href="#" className="resource-card">
                    <div className="resource-icon eye">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4>Status kuzatuvi</h4>
                      <p>So'rovlaringizni nazorat qilish</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
