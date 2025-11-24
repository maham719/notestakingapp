import { useState } from 'react'
import './App.css'
import Container from './pages/Container'
import AppRoutes from './config/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppRoutes>
     <Container/>
     </AppRoutes>
    </>
  )
}

export default App
