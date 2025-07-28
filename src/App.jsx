import React from 'react'
import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import UploadFile from './components/UploadFile'
import EditableResumeViewer from './components/ResumeViewer'
const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<Landing />} />
    // </Routes>
    <div className='bg-[#F2F7FE]'>
      <UploadFile />
      {/* <EditableResumeViewer /> */}
    </div>
  )
}

export default App