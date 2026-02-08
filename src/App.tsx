import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import Home from './pages/home'
import NotFound from './pages/not-found/not-found'
import ManagementBody from './pages/management-body/management-body'
import SupervisoryBoard from './pages/supervisory-board/supervisory-board'
import MissionAndVision from './pages/mission-and-vision/mission-and-vision'
import Vacancies from './pages/vacancies/vacancies'
import VacancyInfo from './pages/vacancy-info/vacancyInfo'
import ScrollToTop from './components/scroll-to-top/scrollToTop'
import Partners from './pages/partners/partners'
import Contacts from './pages/contacts/contacts'
import ReceptionDays from './pages/reception-days/reception-days'
import OurServices from './pages/our-services/our-services'
import AllCredits from './pages/all-credits/all-credits'
import CreditDetail from './pages/credit-details/credit-details'
import OrganizationStructure from './pages/organizational-structure/organization-structure'
import BusinessPlans from './pages/business-plans/business-plans'
import Dividends from './pages/dividends/dividends'
import RePurchasedShares from './pages/re-purchased-shares/re-purchased-shares'
import Emission from './pages/emission/emission'
import ImportantFacts from './pages/important-facts/important-facts'
import Certificates from './pages/certificates/certificates'
import AffiliatedIndividuals from './pages/affiliated-individuals/affiliated-individuals'
import CorporateCharter from './pages/corporate-charter/corporate-charter'
import DevelopmentStrategy from './pages/development-strategy/development-strategy'
import Reports from './pages/reports/reports'
import CorporateGovernanceCode from './pages/corporate-governance-code/corporate-governance-code'
import CorporateRegulations from './pages/corporate-regulations/corporate-regulations'
import News from './pages/news/news'
import NewsDetail from './pages/news-detail/news-detail'
import Events from './pages/events/events'
import History from './pages/history/history'
import Videos from './pages/videos/videos'
import VideosDetail from './pages/video-detail/video-detail'
import EventsDetail from './pages/events-detail/events-detail'
import ShareCapital from './pages/share-capital/share-capital'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/management" element={<ManagementBody />} />
          <Route path="/council" element={<SupervisoryBoard />} />
          <Route path="/mission-and-vision" element={<MissionAndVision />} />
          <Route path="/organizational-structure" element={<OrganizationStructure />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/vacancies/:id" element={<VacancyInfo />} />
          <Route path="/reception-days" element={<ReceptionDays />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contacts" element={<Contacts />} />

          {/* Services */}
          <Route path="/our-services" element={<OurServices />} />

          {/* Investors */}
          <Route path="/business-plans" element={<BusinessPlans />} />
          <Route path="/dividends" element={<Dividends />} />
          <Route path="/share-capital" element={<ShareCapital />} />
          <Route path="/re-purchased-shares" element={<RePurchasedShares />} />
          <Route path="/emission" element={<Emission />} />
          <Route path="/important-facts" element={<ImportantFacts />} />
          <Route path="/reports" element={<Reports />} />

          {/* Coorporate Governance */}
          <Route path="/corporate-charter" element={<CorporateCharter />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/affiliated-individuals" element={<AffiliatedIndividuals />} />
          <Route path="/development-strategy" element={<DevelopmentStrategy />} />
          <Route path="/corporate-governance-code" element={<CorporateGovernanceCode />} />
          <Route path="/corporate-regulations" element={<CorporateRegulations />} />

          {/* Press */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventsDetail />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:id" element={<VideosDetail />} />

          {/* Credits route */}
          <Route path="/credits" element={<AllCredits />} />
          <Route path="/credits/:creditName" element={<CreditDetail />} />

          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
