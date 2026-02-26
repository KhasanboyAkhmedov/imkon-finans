import { HiOutlineSearch } from "react-icons/hi"
import './re-purchased-shares.css'
import { useTranslation } from "react-i18next";

const RePurchasedShares = () => {
    const { t } = useTranslation('pages', { keyPrefix: 're_purchased_shares' });

    return (
        <section className='re-purchased-shares-section'>
            <div className='container'>
                <h2 className="section-title">{t('title')}</h2>

                <div className="custom-empty-state">
                    <div className="empty-icon-wrapper">
                        <HiOutlineSearch />
                    </div>
                    <h3 className="empty-title">{t('no_repurchased_shares')}</h3>
                    <p className="empty-description">{t('no_data_to_show')}</p>
                </div>
            </div>
        </section>
    )
}

export default RePurchasedShares