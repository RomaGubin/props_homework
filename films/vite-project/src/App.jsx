import { useState } from 'react'
import { Stars } from './components/Stars'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Stars count={1}/>
  );
}

export default App
