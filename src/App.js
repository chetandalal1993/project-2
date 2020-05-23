import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { getAllData } from '../../lib/api'
import '../assets/fonts/HARRYP__.TTF'

import './App.css'

import Home from './components/Common/Home'
import Navbar from './components/Common/Navbar'
import Error from './components/Common/Error'

import Quiz from './components/Quiz/Quiz'
import Result from './components/Quiz/Result'



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/quiz" component={Quiz}/>
      <Route path="/result" component={Result}/>
      <Route path='/*' component={Error} />
    </Switch>
    </BrowserRouter>
  )
}


export default App 