import '../src/assets/css/main.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portfolio from './pages/portfolio/Portfolio';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Portfolio/>}/>
      </Routes>
    </Router>
    <Portfolio/>
    </>
  )
}

export default App
