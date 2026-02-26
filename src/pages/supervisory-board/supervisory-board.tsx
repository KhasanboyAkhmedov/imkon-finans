import Management from '../../components/management/management'
import { useTeam } from '../../hooks/useTeam';
import { useTranslation } from 'react-i18next';

const SupervisoryBoard = () => {
  const { members, loading } = useTeam('supervisory_council');
  const { t } = useTranslation('pages', { keyPrefix: 'supervisory_board' });
  const rawInfo = t('info_management', { returnObjects: true }) as string[];
  
  const infoData = Array.isArray(rawInfo) 
    ? rawInfo.map((text, index) => ({ id: index + 1, text })) 
    : [];

  return (
    <section className='supervisory-board-section'>
        <Management infoData={infoData} title={t('title')} loading={loading} members={members}/>
    </section>
  )
}

export default SupervisoryBoard