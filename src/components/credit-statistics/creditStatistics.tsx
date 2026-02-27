import React, { useEffect, useMemo, useState } from 'react';
import './creditStatistics.css';
import { type StatData } from './creditStatisticsData';
import { Trans, useTranslation } from 'react-i18next';
import DiamondIcon from './diamond-icon';
import { useLanguage } from '../../hooks/useLanguage';


const CreditStatistics: React.FC = () => {
    const { t } = useTranslation('main', { keyPrefix: 'statistics' });
    const [stats, setStats] = useState<StatData[]>([]);
    const [loading, setLoading] = useState(true);
    const {lang} = useLanguage();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/creditStats/all?page=1&pageSize=6`)
            .then(res => res.json())
            .then(data => {
                setStats(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const renderContent = useMemo(() => {
        if (loading) {
            return Array(3).fill(0).map((_, i) => (
                <div key={`skel-${i}`} className="stat-card">
                <div className="stat-icon">
                        <div className="diamond-container">
                            <div className="diamond-shape">
                                <span className="dot top" />
                                <span className="dot right" />
                                <span className="dot bottom" />
                                <span className="dot left" />
                            </div>
                        </div>
                    </div>
                <div className="skeleton-shimmer skeleton-line" />
                <div className="skeleton-shimmer skeleton-line small" />
                <div className="skeleton-shimmer skeleton-line medium" />
                </div>
            ));
        }

        return stats.length > 0 && stats.map((item) => {
            const content = item[lang as keyof Omit<StatData, '_id' | 'icon'>] || item.uzb;
            return (
                <div key={item._id} className="stat-card">
                    <div className="stat-icon">
                        <DiamondIcon lib={item.icon.lib} name={item.icon.name} />
                    </div>
                    <h2 className="stat-amount">{content.amount}</h2>
                    <p className="stat-unit">{t('currency')}</p>
                    <p className="stat-category">{content.name}</p>
                </div>
            );
        });
    }, [loading, stats, lang, t]);

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

            
            <div className="stats-grid">{renderContent}</div>
        </section>
    );
};

export default CreditStatistics;