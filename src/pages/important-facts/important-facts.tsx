import { useTranslation } from 'react-i18next';
import FileCardList from '../../components/file-card-list/file-card-list'
import FileCard from '../../components/file-card/file-card'
import FileCardSkeleton from '../../components/file-card/fileCardSkeleton';
import { useFiles } from '../../hooks/useFiles';
import { FileType } from '../../types/file.types';

const ImportantFacts = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'file_pages' });
  const { data, loading, total, currentPage, setCurrentPage, 
    fileStats, pageSize, selectedYear, setSelectedYear } = useFiles(FileType.ImportantFacts);
  
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  return (
    <FileCardList
        title={t('important_facts')}
        dataSource={data}
        loading={loading}
        total={total}
        current={currentPage}
        pageSize={pageSize}
        fileStats={fileStats}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
        renderSkeleton={() => <FileCardSkeleton />}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default ImportantFacts