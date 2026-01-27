import FileCardList from '../../components/file-card-list/file-card-list'
import FileCard from '../../components/file-card/file-card'
import { CorporateCharterData } from './corporate-charter.data'

const CorporateCharter = () => {
  return (
    <FileCardList
        title={`Jamiyat nizomi`}
        dataSource={CorporateCharterData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default CorporateCharter