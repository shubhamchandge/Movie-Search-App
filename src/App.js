import React from 'react'
import "./App.css"
import Searchpage from './component/Titlebar/Search/Searchpage'
import Titlebar from './component/Titlebar/Titlebar'


const App = () => {
  return (
    <div className='main'>
    <Titlebar/>
    <Searchpage/>
    </div>
  )
}

export default App
