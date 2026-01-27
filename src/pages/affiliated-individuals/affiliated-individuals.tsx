import FileCardList from "../../components/file-card-list/file-card-list"
import FileCard from "../../components/file-card/file-card"
import { AffiliatedIndividualsData } from "./affiliated-individuals.data"

const AffiliatedIndividuals = () => {
  return (
    <FileCardList
        title={`Affilangan shaxslar ro'yxati`}
        dataSource={AffiliatedIndividualsData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default AffiliatedIndividuals