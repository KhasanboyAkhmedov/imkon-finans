import React from 'react';
import './organizationToday.css';
import { documentIcon, infoIcon } from '../../assets';
import documentFile from '/docs/lecture.pdf';

const MKT_DATA = [
  { id: 1, text: "Mikromoliya bozorida 5 yildan ortiq tajriba !", fileUrl: documentFile },
  { id: 2, text: "MKT – O'zbekiston va Markaziy Osiyodagi mikrokredit tashkilotlari orasida yagona ochiq aksiyadorlik jamiyati", fileUrl: documentFile },
  { id: 3, text: "MKT O'zbekistonda mikrokredit tashkilotlari orasida yuqori reytingga ega", fileUrl: documentFile },
  { id: 4, text: "MKTlar orasida O'zbekistonning qimmatli qog'ozlar bozoridagi yagona ishtirokchisi", fileUrl: documentFile },
  { id: 5, text: "MKT'ning moliyaviy hisobotlari har yili tashqi auditdan o'tkaziladi", fileUrl: documentFile },
  { id: 6, text: "MKT O'z DSt ISO 9001 standartlariga javob beradi", fileUrl: documentFile, isInfo: true },
];

const OrganizationToday: React.FC = () => {
  return (
    <section className="mkt-section">
      <h2 className="mkt-title">MKT bugun</h2>
      <div className="mkt-grid">
        {MKT_DATA.map((item) => (
          <div 
            key={item.id} 
            className="mkt-card" 
          >
            <div className="mkt-icon-wrapper">
              {item.isInfo ? (
                <img className="mkt-file-icon" src={infoIcon} alt='document'/>
              ) : (
                <img className="mkt-file-icon" src={documentIcon} alt='document'/>
              )}
            </div>
            <p className="mkt-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizationToday;