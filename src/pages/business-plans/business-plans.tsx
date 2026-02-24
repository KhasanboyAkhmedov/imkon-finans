import FileCardList from '../../components/file-card-list/file-card-list'
import FileCard from '../../components/file-card/file-card'
import FileCardSkeleton from '../../components/file-card/fileCardSkeleton';
import { FileType } from '../../types/file.types';
import { useFiles } from '../../hooks/useFiles';

const BusinessPlans = () => {
  const { data, loading, total, currentPage, setCurrentPage, 
    fileStats, pageSize, selectedYear, setSelectedYear } = useFiles(FileType.BusinessPlans);
  
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  return (
    <FileCardList
        title={`"Imkon Finans" AJning biznes rejalari`}
        dataSource={data}
        loading={loading}
        total={total}
        current={currentPage}
        pageSize={pageSize}
        fileStats={fileStats}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
        onPageChange={(page) => setCurrentPage(page)}
        renderSkeleton={() => <FileCardSkeleton />}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default BusinessPlans