import FileCardList from '../../components/file-card-list/file-card-list'
import { BusinessPlansData } from './business-plans.data'
import FileCard from '../../components/file-card/file-card'

const BusinessPlans = () => {
  return (
    <FileCardList
        title={`"Imkon Finans" AJning biznes rejalari`}
        dataSource={BusinessPlansData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default BusinessPlans