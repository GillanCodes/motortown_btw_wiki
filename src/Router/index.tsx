import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../Home/Home'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
