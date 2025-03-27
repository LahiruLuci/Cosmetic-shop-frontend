import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage from './pages/loginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage/>
    </>
  )
}

export default App
