import { FaRegClock } from 'react-icons/fa6'
import './reception-days.css';
import { type Receiver } from './receivers.data';
import ReceiversCard from '../../components/reception-days/receiversCard';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ReceiversCardSkeleton from '../../components/reception-days/receiversCardSkeleton';
import { Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const SKELETON_COUNT = 3;

const ReceptionDays = () => {
    const [data, setData] = useState<Receiver[]>([]);
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();
    const { t } = useTranslation('pages', { keyPrefix: 'reception_days' });
    const { t: tErrors } = useTranslation('pages', { keyPrefix: 'errors' });


    const skeletons = useMemo(() => Array.from({ length: SKELETON_COUNT }), []);

    const fetchEvents = useCallback(async () => {
        if (data.length === 0) setLoading(true);
        
        try {
            const response = await fetch(`${API_BASE_URL}/receptions/all`);
            if (!response.ok) {
                setData([]);
            }
            
            const result = await response.json();
            setData(result.data || []);
        } catch (error) {
            setData([]);
            console.error("Failed to fetch events:", error);
        } finally {
            setLoading(false);
        }
    }, [data.length]);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    const handleBack = () => navigate(-1);

    const renderContent = () => {
        if (loading) {
            return skeletons.map((_, index) => (
                <ReceiversCardSkeleton key={`skeleton-${index}`} />
            ));
        }

        if (data.length === 0) {
            return (
                <div className="error-message">
                    <Empty description={false} className="empty-box" />
                    <p className="error-text">{tErrors('no_data')}</p>
                    <button onClick={handleBack} className="back-button">
                        {tErrors('back_home')}
                    </button>
                </div>
            );
        }

        return data.map((receiver) => (
            <ReceiversCard key={receiver._id} data={receiver} />
        ));
    };

    return (
        <section className='reception-days-section'>
            <div className='container'>
                <h2 className="section-title">{t('title')}</h2>
                <div className='working-days-wrapper'>
                    <h1 className='working-definition'>{t('description')}</h1>
                    <p className='working-days'>{t('working_days')}</p>
                    <div className='working-hours'>
                        <FaRegClock className='clock-icon' />
                        <p className='working-hour'>9:00 - 18:00</p>
                    </div>
                </div>
                <div className='receivers'> 
                    {renderContent()}
                </div>
            </div>
        </section>
    )
}

export default ReceptionDays