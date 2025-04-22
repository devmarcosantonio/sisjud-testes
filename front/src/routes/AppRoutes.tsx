
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'

import NotFound from '../pages/Common/NotFound'
import ReadingDocuments from '../pages/ReadingDocuments'

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<ReadingDocuments />} />
      
            <Route path="/cadastros/leitura-documentos" element={<ReadingDocuments />} />
            <Route path="*" element={<NotFound />} />
          </Route>

         
      </Routes>
  )
}

export default AppRoutes