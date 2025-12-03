import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Registrator ofisi</h3>
            <p className="footer-text">Navoiy davlat konchilik va texnologiyalar universiteti</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Aloqa</h4>
            <p className="footer-text">Email: info@ndktu.uz</p>
            <p className="footer-text">Tel: +998 (00) 000-00-00</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Manzil</h4>
            <p className="footer-text">Navoiy shahri, O'zbekiston</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Registrator ofis. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
