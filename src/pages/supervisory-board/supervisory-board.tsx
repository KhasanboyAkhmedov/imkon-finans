import Management from '../../components/management/management'
import { info } from './supervisory-board.data'
import { useTeam } from '../../hooks/useTeam';

const SupervisoryBoard = () => {
  const { members, loading } = useTeam('supervisory_council');

  return (
    <section className='supervisory-board-section'>
        <Management infoData={info} title='Kuzativ kengashi' loading={loading} members={members}/>
    </section>
  )
}

export default SupervisoryBoard