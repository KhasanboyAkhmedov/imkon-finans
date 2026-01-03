import ContactWithEmail from '../components/contact-with-email/contactWithEmail'
import CreditStatistics from '../components/credit-statistics/creditStatistics'
import FAQLayout from '../components/faq-currency/faqLayout'
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
      <FAQLayout />
      <ContactWithEmail />
    </>
  )
}

export default Home