import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '../pages/Home/Home';
import { NotFound } from '../pages/Errors/NotFound';
import { Vehicles } from '../pages/Vehicles/Vehicles';
import Vehicle from '../pages/Vehicles/Vehicle/Vehicle';
import { Parts } from '../pages/Parts/Parts';
import Part from '../pages/Parts/Part/Part';
import { PublicLayout } from '../layout/PublicLayout';
import { AdminLayout } from '../layout/AdminLayout';

import Dashboard from '../pages/Admin/Dashboard';
import CategoryAdmin from '../pages/Admin/Category/Category';
import PartAdmin from '../pages/Admin/Part/Part';
import VehicleAdmin from '../pages/Admin/Vehicle/Vehicle';
import AddVehicle from '../pages/Admin/Vehicle/Add/AddVehicle';

export default function index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC PART */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path='vehicles'>
              <Route index element={<Vehicles />} />
              <Route path=':slug' element={<Vehicle />} />
            </Route>
            <Route path="parts">
              <Route index element={<Parts />} />
              <Route path=':slug' element={<Part />} />
            </Route>
          </Route>
          {/* ADMIN PART */}
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='category'>
              <Route index element={<CategoryAdmin />} />
            </Route>
            <Route path='part'>
              <Route index element={<PartAdmin />} />
            </Route>
            <Route path='vehicle'>
              <Route index element={<VehicleAdmin />} />
              <Route path="add" element={<AddVehicle />} />
            </Route>

          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
