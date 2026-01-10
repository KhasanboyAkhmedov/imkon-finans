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

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<ManagementBody />} />
          <Route path="/council" element={<SupervisoryBoard />} />
          <Route path="/mission-and-vision" element={<MissionAndVision />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/vacancies/:id" element={<VacancyInfo />} />

          {/* Credits route */}
          <Route path="/credits" element={<div>all credits</div>} />
          <Route path="/credits/:creditname" element={<div>Mahsulot tafsilotlari sahifasi</div>} />

          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
