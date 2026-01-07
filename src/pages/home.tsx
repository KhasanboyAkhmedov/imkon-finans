import CreditStatistics from '../components/credit-statistics/creditStatistics'
import HeroCarousel from '../components/hero/heroCarousel'
import { NewsFeed } from '../components/news/newsFeed'
import OrganizationToday from '../components/organization-today/organizationToday'
import { OurProducts } from '../components/our-products/ourProducts'

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <OrganizationToday />
      <OurProducts />
      <CreditStatistics />
      <NewsFeed />
    </>
  )
}

export default Home