import React from 'react'
import EditForm from './components/EditForm'
import { Navbar } from './components/Navbar'
import VerticalProfileComponent from './components/VerticalProfileComponent'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Calendar from './components/Calendar'
import Ranking from './pages/Ranking'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/edit" element={<EditForm />} />
        <Route path="/" element={<Profile />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/contests" element={<Calendar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
