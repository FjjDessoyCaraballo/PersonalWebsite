import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Janice from './Janice'

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/janice" element={<Janice />} />
    </Routes>
  </BrowserRouter>
}

export default App