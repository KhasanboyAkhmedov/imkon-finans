import { InfoCard } from '../../components/info-card/info-card'
import InfoCardList from '../../components/info-card/info-card-list'
import { EventsData } from './events.data'

const Events = () => {
  return (
    <InfoCardList 
        title="Tadbirlar"
        pageDescription="“IMKON FINANS” mikromoliya tashkiloti aksiyadorlik jamiyati o‘n yildan buyon kichik va o‘rta biznes hamda xususiy tadbirkorlikni rivojlantirishga, shuningdek, O‘zbekiston Respublikasida tobora kengayib borayotgan mikromoliya bozorining rivojlanishiga o‘z hissasini qo‘shib kelmoqda. "
        dataSource={EventsData}
        renderItem={(item, index) => 
        <InfoCard 
          item={item}
          index={index}
          isClickable
          navigateUrl={`/events/${item.id}`}
        />}
    />
  )
}

export default Events