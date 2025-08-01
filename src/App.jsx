import '../src/assets/css/main.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Portfolio from './pages/portfolio/Portfolio';
import { NotFound } from './pages/notfound/NotFound';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Portfolio/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <SpeedInsights/>
    <Analytics/>
    </>
  )
}

export default App
