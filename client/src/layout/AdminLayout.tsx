import { Outlet } from "react-router"
import { Footer } from "../components/Footer/Footer"
import AdminNavbar from "../components/Navbar/AdminNavbar"

export const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
      <Footer />
    </>
  )
}
