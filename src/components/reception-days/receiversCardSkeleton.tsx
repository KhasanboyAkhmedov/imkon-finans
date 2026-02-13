import './receiversCard.css';

const ReceiversCardSkeleton = () => {
  return (
    <div className="receiver-card-container skeleton-wrapper">
      <div className="receiver-position skeleton skeleton-text" style={{ width: '60%' }}></div>
      
      <div className="receiver-card">
        <div className="receiver-name skeleton skeleton-text" style={{ width: '80%' }}></div>
        
        <div className="receiver-day skeleton skeleton-text" style={{ width: '40%' }}></div>
        
        <div className="receiver-time-row">
          <div className="skeleton skeleton-icon"></div>
          <div className="receiver-time skeleton skeleton-text" style={{ width: '30%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ReceiversCardSkeleton;