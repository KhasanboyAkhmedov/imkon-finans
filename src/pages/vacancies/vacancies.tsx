import { List, Grid } from 'antd';
import VacancyCard from '../../components/vacancy-card/vacancyCard';
import { VacancyData } from './vacancies.data';
import './vacancies.css';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

const { useBreakpoint } = Grid;

const Vacancies = () => {
    const screens = useBreakpoint();
    const dynamicPageSize = screens.xl ? 8 : (screens.md ? 6 : 4);

    const itemRender = (_: unknown, type: "prev" | "page" | "next" | "jump-prev" | "jump-next", originalElement: React.ReactNode) => {
        if (type === 'prev') {
            return <HiOutlineArrowLeft  className="pagi-arrow-wrapper" /> ;
        }
        if (type === 'next') {
            return <HiOutlineArrowRight  className="pagi-arrow-wrapper" />;
        }
        return originalElement;
    };
    
    return (
        <section className='vacancies-section'>
            <div className='container'>
                <h2 className="section-title">Ish o'rinlari</h2>
                
                <List
                    grid={{
                        gutter: 10,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 4,
                        xxl: 4,
                    }}
                    pagination={{
                        pageSize: dynamicPageSize,
                        responsive: true,
                        position: 'bottom',
                        align: 'center',
                        itemRender: itemRender,
                        className: 'custom-pagination',
                    }}
                    dataSource={VacancyData}
                    renderItem={(item) => (
                        <List.Item>
                            <VacancyCard data={item} />
                        </List.Item>
                    )}
                />
            </div>
        </section>
    );
}

export default Vacancies;