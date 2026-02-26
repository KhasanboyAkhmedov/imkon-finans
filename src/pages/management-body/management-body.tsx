import Management from '../../components/management/management'
import { useTeam } from '../../hooks/useTeam';
import { useTranslation } from 'react-i18next';

const ManagementBody = () => {
  const { members, loading } = useTeam('management_body');
  const { t } = useTranslation('pages', { keyPrefix: 'management_body' });
  const rawInfo = t('info_management', { returnObjects: true }) as string[];
  
  const infoData = Array.isArray(rawInfo) 
    ? rawInfo.map((text, index) => ({ id: index + 1, text })) 
    : [];

  return (
    <section className='management-body-section'>
        <Management infoData={infoData} members={members} loading={loading} title={t('title')}/>
    </section>
  )
}

export default ManagementBody