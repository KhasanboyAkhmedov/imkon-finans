import FileCardList from "../../components/file-card-list/file-card-list"
import FileCard from "../../components/file-card/file-card"
import { GovernanceRegulationsData } from "./corporate-regulations.data"

const CorporateRegulations = () => {
  return (
    <FileCardList
        title={`Jamiyat qoidalari`}
        dataSource={GovernanceRegulationsData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default CorporateRegulations