import { Grid, List } from "antd"
import FileCard from "../../components/file-card/file-card"
import { organizationalStructureData } from "./organizational-structure.data"
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import './organizational-structure.css';

const { useBreakpoint } = Grid;

const OrganizationStructure = () => {
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
            <section className='organizational-structure-section'>
                <div className='container'>
                    <h2 className="section-title">Jamiyat tashkiliy tuzilmasi</h2>

                    <List
                        grid={{
                            gutter: 10,
                            xs: 1,
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
                        dataSource={organizationalStructureData}
                        renderItem={(item) => (
                            <List.Item>
                                <FileCard data={item} />
                            </List.Item>
                        )}
                    />
                </div>

            </section>
        )
}

export default OrganizationStructure