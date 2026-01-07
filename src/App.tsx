import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import Home from './pages/home'
import NotFound from './pages/not-found/not-found'

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

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
