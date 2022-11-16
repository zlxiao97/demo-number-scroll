import React from 'react'
import NumberScroll from './components/NumberScroll'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NumberScroll number={"1,231,232.00"} duration={5} />
    </div>
  )
}

export default App
