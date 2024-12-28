import { useState } from 'react'
import Dashboard from './Dashboard.jsx'
import './Dashboard.css'

function App() {
  const [count, setCount] = useState(0)

  return (

      <Dashboard></Dashboard>
  )
}

export default App
