import FileCardList from "../../components/file-card-list/file-card-list"
import FileCard from "../../components/file-card/file-card"
import { ReportsData } from "./reports.data"

const Reports = () => {
  return (
    <FileCardList
        title={`Hisobotlar`}
        dataSource={ReportsData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default Reports