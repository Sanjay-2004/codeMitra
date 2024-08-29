import React from 'react'
import { Button } from './components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { EditForm } from './components/EditForm'
import { Navbar } from './components/Navbar'
import { VerticalProfileComponent } from './components/VerticalProfileComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button >hello</Button> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/edit" element={<EditForm />}></Route>
          <Route path="/" element={<VerticalProfileComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
