import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Admin from '../../Admin/Admin'
import ScrollToTop from '../components/ScrollToTop';

const AdminRouters = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default AdminRouters