import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './Components/Users'
import CreateUsers from './Components/CreateUsers'
import Update from './Components/Update'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path="/create" element={<CreateUsers/>}/>
      <Route path="/up/:id" element={<Update/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
