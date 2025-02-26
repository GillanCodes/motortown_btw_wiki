import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../pages/Home/Home';
import { Navbar } from '../components/Navbar/Navbar';
import { NotFound } from '../pages/Errors/NotFound';
import { Footer } from '../components/Footer/Footer';

export default function index() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
