import { EmissionData } from './emission.data'
import FileCard from '../../components/file-card/file-card'
import FileCardList from '../../components/file-card-list/file-card-list'

const Emission = () => {
  return (
        <FileCardList 
            title='Yillik hisobotlar'
            dataSource={EmissionData}
            renderItem={(item) => <FileCard data={item} />}
        />
  )
}

export default Emission