import FileCardList from '../../components/file-card-list/file-card-list'
import { ImportantFactsData } from './important-facts.data'
import FileCard from '../../components/file-card/file-card'

const ImportantFacts = () => {
  return (
    <FileCardList
        title='Muhim faktlar'
        dataSource={ImportantFactsData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default ImportantFacts