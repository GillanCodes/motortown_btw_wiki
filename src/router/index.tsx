import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../pages/Home/Home';
import { Navbar } from '../components/Navbar/Navbar';

export default function index() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
