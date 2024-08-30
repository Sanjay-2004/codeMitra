import React from 'react'
import { EditForm } from './components/EditForm'
import { Navbar } from './components/Navbar'
import { VerticalProfileComponent } from './components/VerticalProfileComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/edit" element={<EditForm />} />
        <Route path="/" element={<VerticalProfileComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
