import { FaRegClock } from 'react-icons/fa6';
import './receiversCard.css';
import type { Receiver } from '../../pages/reception-days/receivers.data';

const ReceiversCard = ({ data } : {data: Receiver}) => {
  return (
    <div className="receiver-card-container">
      <h3 className="receiver-position">{data.role}</h3>
      <div className="receiver-card">
        <h4 className="receiver-name">{data.name}</h4>
        <p className="receiver-day">{data.day}</p>
        <div className="receiver-time-row">
          <FaRegClock className="receiver-clock-icon" />
          <span className="receiver-time">{data.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ReceiversCard;