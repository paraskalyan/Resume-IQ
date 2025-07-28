import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import UploadFile from './components/UploadFile'
import EditableResumeViewer from './components/ResumeViewer'
const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<Landing />} />
    // </Routes>

    <div className='bg-[#F2F7FE] min-h-screen'>
      <UploadFile />
      {/* <EditableResumeViewer /> */}
    </div>
  )
}

export default App