import { Empty, Grid } from 'antd';
import VacancyCard from '../../components/vacancy-card/vacancyCard';
import { useEffect, useState } from 'react';
import InfoCardList from '../../components/info-card/info-card-list';
import type { Vacancy } from './vacancies.data';
import VacancySkeleton from '../../components/vacancy-card/vacancyCardSkeleton';
import './vacancies.css';
import { FaAngleLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const { useBreakpoint } = Grid;

const Vacancies = () => {
    const screens = useBreakpoint();
    const [data, setData] = useState<Vacancy[]>([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = screens.xl ? 8 : (screens.md ? 6 : 4);
    const navigate = useNavigate();

    const fetchEvents = async (page: number) => {
        setLoading(true);
        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/jobs/all?page=${page}&pageSize=${pageSize}`
            );
            const result = await response.json();
            
            setData(result.data);
            setTotal(result.totalCount);
        } catch (error) {
            console.error("Failed to fetch events:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents(currentPage);
    }, [currentPage]);

    const handleBack = () => navigate(-1);

    if (!loading && data.length == 0) {
        return (
            <section className='detail-container'>
                <div className="container">
                    <div onClick={handleBack} className="go-back-button">
                        <FaAngleLeft className='back-icon'/> 
                        <p className='back-text'>Orqaga</p>
                    </div>

                    <div className="error-message">
                        <Empty description={false} className='empty-box' />
                        <p className='error-text'>Ma'lumot topilmadi.</p>
                        <button onClick={handleBack} className="back-button">
                            Ortga qaytish
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <InfoCardList 
            grid={{
                gutter: 10,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 4,
            }}
            title="Ish o'rinlari"
            dataSource={data}
            loading={loading}
            total={total}
            current={currentPage}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
            renderItem={(item) => {
                if (loading) {
                    return <VacancySkeleton />;
                }
                    
                return (
                    <VacancyCard data={item} />
                );
            }}
        />
    );
}

export default Vacancies;