import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Bio from './pages/Bio'
import Music from './pages/Music'
import Dates from './pages/Dates'
import Shop from './pages/Shop'
import Newsletter from './pages/Newsletter'
import NotFound from './pages/NotFound'
import Navbar from './molecules/NavbarSidebar'
import MainManu from './oscanisms/MainMenu'

export default function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <MainManu />
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/Bio' element={<Bio />}  />
            <Route path='/Music' element={<Music />}  />
            <Route path='/Dates' element={<Dates />}  />
            <Route path='/Shop' element={<Shop />}  />
            <Route path='/Newsletter' element={<Newsletter />}  />
            <Route path='*' element={<NotFound />}  />
          </Routes>
        </BrowserRouter>
    </div>
  )
}