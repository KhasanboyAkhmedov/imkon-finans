import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './branches.css';
import { branches } from './branches.data';

const Branches = () => {
  const [selectedBranchId, setSelectedBranchId] = useState('1');

  const activeBranch = branches.find(b => b.id === selectedBranchId) || branches[0];

  return (
    <div className="bottom-section">
      <div className="map-container">
        <iframe 
            key={activeBranch.id}
            src={activeBranch.mapEmbedUrl}
            loading="lazy"
            className='map'
            title="Yandex Map"
        />
      </div>

      <div className="branches-wrapper">
        <h3 className="branches-title">Telefon raqamlari:</h3>
        <div className="branches-grid">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              className={`branch-card ${selectedBranchId === branch.id ? 'active' : ''}`}
              onClick={() => setSelectedBranchId(branch.id)}
            >
              <h4 className="branch-name">{branch.name}</h4>
              <div className="branch-phones">
                {branch.phones.map((phone) => (
                  <div key={phone} className="phone-item">
                    <FaPhoneAlt className="phone-icon" />
                    <span>{phone}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;