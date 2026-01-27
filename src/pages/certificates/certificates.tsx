import FileCardList from '../../components/file-card-list/file-card-list'
import FileCard from '../../components/file-card/file-card'
import { CertificatesData } from './certificates.data'

const Certificates = () => {
  return (
    <FileCardList
        title={`Sertifikatlar`}
        dataSource={CertificatesData}
        renderItem={(item) => <FileCard data={item} />}
    />
  )
}

export default Certificates