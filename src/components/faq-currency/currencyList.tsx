// import React, { useEffect, useState } from 'react';
// import './currencyList.css';
// import { EUROPE, RUSSIA, USA } from '../../assets/flags';
// import SkeletonRow from './skeleton-row';

// interface CurrencyData {
//   Ccy: string;
//   Rate: string;
//   Diff: string;
//   Code: string;
// }


// const CurrencyList: React.FC = () => {
//     const [rates, setRates] = useState<CurrencyData[]>([]);
//     const [loading, setLoading] = useState(true);

//     const targetCurrencies = ['USD', 'EUR', 'RUB'];

//     const fetchRates = async () => {
//         try {
//             const response = await fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/');
//             const data = await response.json();
            
//             const filtered = data.filter((item: CurrencyData) => 
//                 targetCurrencies.includes(item.Ccy)
//             );
            
//             setRates(filtered);
//             setLoading(false);
//         } catch (error) {
//             console.error("Failed to fetch currency data:", error);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchRates();
//     }, []);

   
//     const flagMap: Record<string, string> = {
//         USD: USA,
//         EUR: EUROPE,
//         RUB: RUSSIA,
//     };

//   return (
//     <div className="currency-container">
//         {loading ? 
//             <>
//                 <SkeletonRow />
//                 <SkeletonRow />
//                 <SkeletonRow />
//             </> : (
//                 rates.map((item) => {
//                     const isIncreased = parseFloat(item.Diff) >= 0;
                    
//                     return (
//                     <div key={item.Ccy} className="currency-row">
//                         <div className="currency-main">
//                             <img src={flagMap[item.Ccy]}
//                                 alt={item.Ccy}
//                                 className="flag-img"
//                             />
//                             <span className="currency-label">1 {item.Ccy}</span>
//                             <span className="currency-separator">=</span>
//                             <span className="currency-value">{item.Rate}</span>
//                         </div>
                        
//                         <div className={`trend-box ${isIncreased ? 'trend-up' : 'trend-down'}`}>
//                         <svg 
//                             viewBox="0 0 24 24" 
//                             fill="none" 
//                             stroke="currentColor" 
//                             strokeWidth="2.5" 
//                             strokeLinecap="round" 
//                             strokeLinejoin="round"
//                         >
//                             {isIncreased ? (
//                                 <>
//                                     <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//                                     <polyline points="16 7 22 7 22 13" />
//                                 </>
//                             ) : (
//                                 <>
//                                     <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
//                                     <polyline points="16 17 22 17 22 11" />
//                                 </>
//                             )}
//                         </svg>
//                         </div>
//                     </div>
//                     );
//                 })
//             )
//     }
      
//     </div>
//   );
// };

// export default CurrencyList;

import React, { useEffect, useState } from 'react';
import { EUROPE, RUSSIA, USA } from '../../assets/flags';
import SkeletonRow from './skeleton-row';
import './currencyList.css';

interface CurrencyData {
  Ccy: string;
  Rate: string;
  Diff: string;
}



const CurrencyList: React.FC = () => {
  const [rates, setRates] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState(true);

  const flagMap: Record<string, string> = { USD: USA, EUR: EUROPE, RUB: RUSSIA };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/');
        const data: CurrencyData[] = await response.json();
        
        setRates(data.filter(item => flagMap[item.Ccy]));
      } catch (error) {
        console.error("Currency fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="currency-container">
      {loading ? (
        [...Array(3)].map((_, i) => <SkeletonRow key={i} />)
      ) : (
        rates.map(({ Ccy, Rate, Diff }) => (
          <div key={Ccy} className="currency-row">
            <div className="currency-main">
              <img src={flagMap[Ccy]} alt={Ccy} className="flag-img" />
              <span className="currency-label">1 {Ccy}</span>
              <span className="currency-separator">=</span>
              <span className="currency-value">
                {parseFloat(Rate).toLocaleString('ru-RU')}
              </span>
            </div>
            <TrendIcon isIncreased={parseFloat(Diff) >= 0} />
          </div>
        ))
      )}
    </div>
  );
};

export default CurrencyList;

const TrendIcon = ({ isIncreased }: { isIncreased: boolean }) => (
  <div className={`trend-box ${isIncreased ? 'trend-up' : 'trend-down'}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {isIncreased ? (
        <>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </>
      ) : (
        <>
          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
          <polyline points="16 17 22 17 22 11" />
        </>
      )}
    </svg>
  </div>
);