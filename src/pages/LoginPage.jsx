import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'
import './LoginPage.css'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await authAPI.login(username, password)
      
      localStorage.setItem('access_token', response.access_token)
      localStorage.setItem('refresh_token', response.refresh_token)
      
      navigate('/dashboard')
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Foydalanuvchi nomi yoki parol noto\'g\'ri')
      } else if (err.response?.data?.detail) {
        setError(err.response.data.detail)
      } else {
        setError('Tizimga kirishda xatolik yuz berdi')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="left-inner">
          <h1>Navoiy davlat konchilik va
            texnologiyalar universiteti</h1>
          <p className="lead">Zamonaviy va ishonchli avtomatlashtirilgan ta'lim tizimi</p>
          <div className="divider" />
          <p className="desc">
            O'qituvchilar uchun yuklama, taqsimot va shaxsiy ish reja jarayonlarini
            avtomatlashtiruvchi yagona platforma. Barcha o'quv rejalar, fanlar va
            talabalar ma'lumotlari integratsiyalashgan holda boshqariladi.
          </p>
        </div>
      </div>

      <div className="auth-right">
        <div className="login-card">
          <img src="/ndktu-logo.svg" alt="Navoiy universiteti logo" className="uni-logo" />
          <p className="card-title-sub">Navoiy davlat konchilik va texnologiyalar universiteti</p>
          <p className="card-sub">Registrator ofis tizimi</p>

          {error && (
            <div className="error-message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="input-label">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" fill="#6b7280"/></svg>
              </span>
              <input 
                type="text" 
                placeholder="Foydalanuvchi nomi" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
              />
            </label>

            <label className="input-label">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 8h-1V6c0-2.761-2.239-5-5-5S6 3.239 6 6v2H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM9 6c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V6z" fill="#6b7280"/></svg>
              </span>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Parol" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <button 
                type="button" 
                className="eye" 
                aria-label="toggle password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁' : '👁‍🗨'}
              </button>
            </label>

            <button type="submit" className="btn primary" disabled={loading}>
              {loading ? 'Tekshirilmoqda...' : 'Tizimga kirish'}
            </button>
          </form>

          <p style={{ textAlign: 'center', margin: '20px 0 12px', fontSize: '14px', color: '#6b7280' }}>
            Parolni unutdingizmi?
          </p>

          <div className="alt-actions">
            <button className="btn outline">HEMIS orqali kirish</button>
            <button className="btn outline">Student orqali kirish</button>
          </div>

          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#6b7280' }}>
            Akkauntingiz yo'qmi?{' '}
            <button 
              onClick={() => navigate('/register')}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#0f6b6b', 
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Ro'yxatdan o'tish
            </button>
          </p>

          <p className="copyright">© 2025 Registrator ofis. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </div>
  )
}