import React from 'react'
import {Routes, Route} from "react-router-dom"
import Admin from '../Admin/Admin'
const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Admin/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
