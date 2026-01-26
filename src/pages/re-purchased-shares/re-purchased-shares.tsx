import { HiOutlineSearch } from "react-icons/hi"
import './re-purchased-shares.css'

const RePurchasedShares = () => {
  return (
    <section className='re-purchased-shares-section'>
        <div className='container'>
            <h2 className="section-title">Qayta sotib olingan aksiyalar</h2>

            <div className="custom-empty-state">
                <div className="empty-icon-wrapper">
                    <HiOutlineSearch />
                </div>
                <h3 className="empty-title">Qayta sotib olingan aksiyalar yo'q</h3>
                <p className="empty-description">Ko'rsatish uchun ma'lumotlar yo'q</p>
            </div>
        </div>
    </section>
  )
}

export default RePurchasedShares