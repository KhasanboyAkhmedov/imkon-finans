import { Grid, List } from "antd";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { partners } from "../../components/partners-carousel/partnersData";
import './partners.css';

const { useBreakpoint } = Grid;

const Partners = () => {
    const screens = useBreakpoint();
    const dynamicPageSize = screens.xl ? 8 : (screens.md ? 8 : 4);

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
        <section className='partners-section'>
            <div className='container'>
                <h2 className="partners-section-title">Bizning hamkorlar</h2>
                <p className="section-description">Barcha yutuqlarimiz — ishonchli hamkorlar bilan birga</p>
                
                <List
                    grid={{
                        gutter: [
                            { xs: 10, sm: 16, md: 20, xl: 32, xxl: 40 }, 
                            { xs: 10, sm: 16, md: 20, xl: 32, xxl: 40 }
                        ],
                        xs: 2,
                        sm: 2,
                        md: 3,
                        lg: 4,
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
                    dataSource={partners}
                    renderItem={(item) => (
                        <List.Item>
                            <div className='partner-wrapper' key={item.id}>
                                <img className='partner-image' src={item.logo} alt={item.name} />
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </section>
    )
}

export default Partners