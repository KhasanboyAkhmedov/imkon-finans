import React from 'react';
import './creditStatistics.css';
import { creditStatistics } from './creditStatisticsData';
import { Trans, useTranslation } from 'react-i18next';

const CreditStatistics: React.FC = () => {
    const { t } = useTranslation('main', { keyPrefix: 'statistics' });
    // const [stats, setStats] = useState<StatData[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/creditStats/all?page=1&pageSize=6`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setStats(data);
    //             setLoading(false);
    //         })
    //         .catch(() => setLoading(false));
    // }, []);

    // if (loading) return null;

    return (
        <section className="stats-container container">
        <div className="stats-header">
            <div className='stats-heading'>
                <h2>
                    <Trans 
                        t={t} 
                        i18nKey="title" 
                        components={[<span className="highlight" key="0" />]} 
                    />
                </h2>
            </div>
            <p className="stats-description">{t('description')}</p>
        </div>

        <div className="stats-grid">
            {creditStatistics.map((item) => (
                <div key={item.id} className="stat-card">
                    <img className="stat-icon" src={item.icon} alt={item.category} />
                    <h2 className="stat-amount">{item.amount}</h2>
                    <p className="stat-unit">ming so'm</p>
                    <p className="stat-category">{item.category}</p>
                </div>
            ))}
        </div>
        </section>
    );
};

export default CreditStatistics;