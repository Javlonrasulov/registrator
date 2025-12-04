import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'
import './LoginPage.css'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    full_name: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Parollar mos emas')
      return
    }

    if (formData.password.length < 6) {
      setError('Parol kamida 6 belgidan iborat bo\'lishi kerak')
      return
    }

    setLoading(true)

    try {
      const { confirmPassword, ...registerData } = formData
      await authAPI.register(registerData)
      
      navigate('/login', { 
        state: { message: 'Ro\'yxatdan o\'tdingiz! Endi tizimga kiring.' } 
      })
    } catch (err) {
      console.error('Register error:', err.response?.data)
      if (err.response?.status === 422) {
        const errors = err.response.data?.detail
        if (Array.isArray(errors)) {
          setError(errors.map(e => e.msg).join(', '))
        } else {
          setError('Ma\'lumotlar noto\'g\'ri to\'ldirilgan')
        }
      } else if (err.response?.data?.detail) {
        if (typeof err.response.data.detail === 'string') {
          setError(err.response.data.detail)
        } else {
          setError('Ro\'yxatdan o\'tishda xatolik yuz berdi')
        }
      } else {
        setError('Ro\'yxatdan o\'tishda xatolik yuz berdi')
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
            Registrator ofis tizimiga xush kelibsiz. Ro'yxatdan o'tish orqali barcha 
            xizmatlardan foydalanish imkoniyatiga ega bo'lasiz.
          </p>
        </div>
      </div>

      <div className="auth-right">
        <div className="login-card">
          <img src="/ndktu-logo.svg" alt="Navoiy universiteti logo" className="uni-logo" />
          <p className="card-title-sub">Navoiy davlat konchilik va texnologiyalar universiteti</p>
          <p className="card-sub">Ro'yxatdan o'tish</p>

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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" fill="#6b7280"/>
                </svg>
              </span>
              <input 
                type="text" 
                name="full_name"
                placeholder="To'liq ism" 
                value={formData.full_name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </label>

            <label className="input-label">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" fill="#6b7280"/>
                </svg>
              </span>
              <input 
                type="text" 
                name="username"
                placeholder="Foydalanuvchi nomi" 
                value={formData.username}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </label>

            <label className="input-label">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#6b7280"/>
                </svg>
              </span>
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </label>

            <label className="input-label">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8h-1V6c0-2.761-2.239-5-5-5S6 3.239 6 6v2H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM9 6c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V6z" fill="#6b7280"/>
                </svg>
              </span>
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                placeholder="Parol" 
                value={formData.password}
                onChange={handleChange}
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

            <label className="input-label">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8h-1V6c0-2.761-2.239-5-5-5S6 3.239 6 6v2H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM9 6c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V6z" fill="#6b7280"/>
                </svg>
              </span>
              <input 
                type={showPassword ? "text" : "password"} 
                name="confirmPassword"
                placeholder="Parolni tasdiqlang" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </label>

            <button type="submit" className="btn primary" disabled={loading}>
              {loading ? 'Ro\'yxatdan o\'tmoqda...' : 'Ro\'yxatdan o\'tish'}
            </button>
          </form>

          <div className="alt-actions">
            <button className="btn outline" onClick={() => navigate('/login')}>
              Tizimga kirish
            </button>
          </div>

          <p className="copyright">© 2025 Registrator ofis. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </div>
  )
}
