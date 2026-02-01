import InfoCardList from '../../components/info-card/info-card-list'
import { VideosData } from './videos.data'
import { InfoCard } from '../../components/info-card/info-card'

const Videos = () => {
  return (
    <InfoCardList 
        title="Videolar"
        pageDescription="“IMKON FINANS” mikromoliya tashkiloti aksiyadorlik jamiyati o‘n yildan buyon kichik va o‘rta biznes hamda xususiy tadbirkorlikni rivojlantirishga, shuningdek, O‘zbekiston Respublikasida tobora kengayib borayotgan mikromoliya bozorining rivojlanishiga o‘z hissasini qo‘shib kelmoqda."
        dataSource={VideosData}
        renderItem={(item, index) => 
        <InfoCard 
          item={item}
          index={index}
          isClickable
          navigateUrl={`/videos/${item.id}`}
        />}
    />
  )
}

export default Videos