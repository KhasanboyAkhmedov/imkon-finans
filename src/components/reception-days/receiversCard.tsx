import { FaRegClock } from 'react-icons/fa6';
import './receiversCard.css';
import type { Receiver } from '../../pages/reception-days/receivers.data';
import { useLanguage } from '../../hooks/useLanguage';

const ReceiversCard = ({ data } : {data: Receiver}) => {
  const { lang } = useLanguage();
  const content = data[lang];

  return (
    <div className="receiver-card-container">
      <h3 className="receiver-position">{content.role}</h3>
      <div className="receiver-card">
        <h4 className="receiver-name">{content.name}</h4>
        <p className="receiver-day">{content.day}</p>
        <div className="receiver-time-row">
          <FaRegClock className="receiver-clock-icon" />
          <span className="receiver-time">{data.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ReceiversCard;