import FileCardList from "../../components/file-card-list/file-card-list"
import FileCard from "../../components/file-card/file-card"
import { CorporateGovernanceCodeData } from "./corporate-governance-code.data"

const CorporateGovernanceCode = () => {
  return (
    <FileCardList
        title={`Korporativ boshqaruv kodeksi`}
        dataSource={CorporateGovernanceCodeData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default CorporateGovernanceCode