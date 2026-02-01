import { InfoCard } from '../../components/info-card/info-card';
import './history.css';
import { HistoryData } from './history.data';

const History = () => {
  return (
    <section className="history-section">
      <div className="container">
        <h2 className="section-title">Jamiyat tarixi</h2>
        <p className='page-description'>2020-yil sentabr oyida «IMKON FINANS mikrokredit tashkiloti» MChJ Kengashi qaroriga muvofiq «IMKON FINANS mikrokredit tashkiloti» aksiyadorlik jamiyatiga aylantirilgan.</p>

        <div className="history-items-container">
          {HistoryData.map((item, index) => (
            <div key={item.id} className="info-list-item-wrapper">
              <InfoCard index={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default History