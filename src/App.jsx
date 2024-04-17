import React from "react";
import "./app.css";
import Card from './components/Card'
import List from './components/List'
import Navbar from "./components/Navbar";


// function App() {
const App = () => {
  return (
    <div className='app-container'>
    <Card/>
    <List/>
    <Navbar/>
    </div>
  )
}

export default App
