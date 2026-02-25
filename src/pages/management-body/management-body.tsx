import Management from '../../components/management/management'
import { info } from './management-body.data'
import { useTeam } from '../../hooks/useTeam';

const ManagementBody = () => {
  const { members, loading } = useTeam('management_body');

  return (
    <section className='management-body-section'>
        <Management infoData={info} members={members} loading={loading} title='Boshqaruv organi'/>
    </section>
  )
}

export default ManagementBody