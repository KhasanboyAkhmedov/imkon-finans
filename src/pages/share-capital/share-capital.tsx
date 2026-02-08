import FileCardList from "../../components/file-card-list/file-card-list"
import FileCard from "../../components/file-card/file-card"
import { ShareCapitalData } from "./share-capital.data"

const ShareCapital = () => {
  return (
    <FileCardList
        title={`Ustav Fondi`}
        dataSource={ShareCapitalData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default ShareCapital