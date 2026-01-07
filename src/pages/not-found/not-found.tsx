import './not-found.css';

const NotFound = () => {
  return (
    <div className="page-wrapper ">
      <div className="card container">
        <div className="graphic-container">
          <span className="digit">404</span>
          {/* <div className="gear-icon">
            <div className="gear-inner"></div>
          </div>
          <span className="digit">4</span> */}
        </div>

        {/* Text Section */}
        <h1 className="status-title">Ups! Bunday sahifa mavjud emas</h1>
        <p className="status-subtitle">Xatolik yoki kamchilik sezgan bo'lsangiz bizga habar bering</p>

        {/* Action Button */}
        <button 
          className="back-button" 
          onClick={() => window.location.href = '/'}
        >
          Bosh sahifaga qaytish
        </button>
      </div>
    </div>
  )
}

export default NotFound