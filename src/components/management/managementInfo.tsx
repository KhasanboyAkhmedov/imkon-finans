import './managementInfo.css';
import { briefcase } from '../../assets';

interface InfoItem {
  id: number;
  text: string;
}

interface ManagementInfoProps {
  infoData: InfoItem[];
}

const ManagementInfo = ({ infoData }: ManagementInfoProps) => {
  return (
    <div className='mgmt-info-section'>
      <div className="mgmt-info-wrapper container">
        {infoData.map((item) => (
          <div className="mgmt-info-item" key={item.id}>
            <div className="mgmt-icon-box">
              <img src={briefcase} alt='icon' />
            </div>
            <p className='mgmt-info-description'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementInfo;