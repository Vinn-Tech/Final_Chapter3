import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToDoList from '../pages/ToDoList'

const RoutingToDoList = () => {
  return (
<BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<ToDoNew/>} /> */}
            <Route path='/' element={<ToDoList/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutingToDoList
