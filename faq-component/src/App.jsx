import { useState } from 'react'
import './App.css'
import FAQ from './components/FAQ'
import { data } from './data/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FAQ data={data}/>
    </>
  )
}

export default App
