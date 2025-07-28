import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Landing from './pages/Landing'
import UploadFile from './components/UploadFile'
import EditableResumeViewer from './components/ResumeViewer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<Landing />} />
    // </Routes>
    <>
      <Navbar />
      <Landing />
      <div className='bg-[#F2F7FE] min-h-screen'>
        <UploadFile />
        {/* <EditableResumeViewer /> */}
      </div>
      <Footer />
    </>
  )
}

export default App