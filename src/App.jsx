import React from 'react'
import { Button } from './components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { EditForm } from './components/EditForm'


const App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button >hello</Button> */}
      <EditForm />
    </div>
  )
}

export default App
