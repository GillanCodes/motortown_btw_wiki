import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../pages/Home/Home';
import { Navbar } from '../components/Navbar/Navbar';
import { NotFound } from '../pages/Errors/NotFound';
import { Footer } from '../components/Footer/Footer';
import { Vehicules } from '../pages/Vehicules/Vehicules';
import Vehicule from '../pages/Vehicules/Vehicule/Vehicule';

export default function index() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='vehicules'>
            <Route index element={<Vehicules />} />
            <Route path=':slug' element={<Vehicule />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
