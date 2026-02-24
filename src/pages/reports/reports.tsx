import FileCardList from "../../components/file-card-list/file-card-list"
import FileCard from "../../components/file-card/file-card"
import FileCardSkeleton from "../../components/file-card/fileCardSkeleton";
import { useFiles } from "../../hooks/useFiles";
import { FileType } from "../../types/file.types";

const Reports = () => {
  const { data, loading, total, currentPage, setCurrentPage, 
    fileStats, pageSize, selectedYear, setSelectedYear } = useFiles(FileType.Reports);
  
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  return (
    <FileCardList
        title={`Hisobotlar`}
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

export default Reports