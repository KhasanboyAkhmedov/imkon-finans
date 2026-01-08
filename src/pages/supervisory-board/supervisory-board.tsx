import Management from '../../components/management/management'
import { info, members } from './supervisory-board.data'

const SupervisoryBoard = () => {
  return (
    <section className='supervisory-board-section'>
        <Management infoData={info} title='Kuzativ kengashi' members={members}/>
    </section>
  )
}

export default SupervisoryBoard