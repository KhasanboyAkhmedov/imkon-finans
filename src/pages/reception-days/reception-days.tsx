import { FaRegClock } from 'react-icons/fa6'
import './reception-days.css';
import { receiversData } from './receivers.data';
import ReceiversCard from '../../components/reception-days/receiversCard';

const ReceptionDays = () => {
  return (
    <section className='reception-days-section'>
            <div className='container'>
                <h2 className="section-title">Qabul qilish kunlari</h2>
                <div className='working-days-wrapper'>
                    <h1 className='working-definition'>Ish tavsifi</h1>
                    <p className='working-days'>Dushanda-Shanba</p>
                    <div className='working-hours'>
                        <FaRegClock className='clock-icon' />
                        <p className='working-hour'>8:00 - 18:00</p>
                    </div>
                </div>

                <div className='receivers'>
                    {receiversData.map((receiver, index) => (
                        <ReceiversCard key={index} data={receiver} />
                    ))}
                </div>

            </div>
    </section>
  )
}

export default ReceptionDays