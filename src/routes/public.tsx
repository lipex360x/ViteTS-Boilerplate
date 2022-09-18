import { Home } from '@/pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '@/components/templates/DefaultLayout'

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
