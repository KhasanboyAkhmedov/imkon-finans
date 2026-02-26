import FileCard from '../../components/file-card/file-card'
import FileCardList from '../../components/file-card-list/file-card-list'
import { FileType } from '../../types/file.types';
import FileCardSkeleton from '../../components/file-card/fileCardSkeleton';
import { useFiles } from '../../hooks/useFiles';
import { useTranslation } from 'react-i18next';

const Emission = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'file_pages' });
  const { data, loading, total, currentPage, setCurrentPage, 
    fileStats, pageSize, selectedYear, setSelectedYear } = useFiles(FileType.Emission);
  
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  return (
    <FileCardList 
        title={t('emission')}
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

export default Emission