import Management from '../../components/management/management'
import { info, members } from './management-body.data'

const ManagementBody = () => {
  return (
    <section className='management-body-section'>
      <Management infoData={info} members={members} title='Boshqaruv organi'/>
    </section>
  )
}

export default ManagementBody