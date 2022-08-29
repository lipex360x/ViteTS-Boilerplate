import { Outlet } from 'react-router-dom'
import { ToastContainer } from '@/components/bosons/ToastContainer'

const DefaultLayout = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default DefaultLayout
