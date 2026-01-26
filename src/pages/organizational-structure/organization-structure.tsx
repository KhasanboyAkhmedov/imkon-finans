import FileCardList from '../../components/file-card-list/file-card-list'
import { organizationalStructureData } from './organizational-structure.data'
import FileCard from '../../components/file-card/file-card'

const OrganizationStructure = () => {
  return (
    <FileCardList
        title='Jamiyat tashkiliy tuzilmasi'
        dataSource={organizationalStructureData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default OrganizationStructure