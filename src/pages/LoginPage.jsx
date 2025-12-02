import './LoginPage.css'

export default function LoginPage() {
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

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <label className="input-label">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" fill="#6b7280"/></svg>
              </span>
              <input type="text" placeholder="Foydalanuvchi nomi" />
            </label>

            <label className="input-label">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 8h-1V6c0-2.761-2.239-5-5-5S6 3.239 6 6v2H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM9 6c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V6z" fill="#6b7280"/></svg>
              </span>
              <input type="password" placeholder="Parol" />
              <button type="button" className="eye" aria-label="toggle password">👁</button>
            </label>

            <button type="submit" className="btn primary">Tizimga kirish</button>
          </form>

          <div className="alt-actions">
            <button className="btn outline">HEMIS orqali kirish</button>
            <button className="btn outline">Student orqali kirish</button>
          </div>

          <p className="copyright">© 2025 Registrator ofis. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </div>
  )
}