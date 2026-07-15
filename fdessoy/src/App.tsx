import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Janice from './routes/Janice'
import Hanna from './routes/Hanna'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/janice" element={<Janice />} />
        <Route path="/hanna" element={Hanna} />
      </Routes>
    </BrowserRouter>
  )
}

export default App