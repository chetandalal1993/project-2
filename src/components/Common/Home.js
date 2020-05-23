import React from 'react'
import { Link } from 'react-router-dom'
import hogwarts from '../assets/images/hogwarts2.png'
// import '../assets/fonts/HARRYP__.TTF'


const Home = () => (
  <section className="hero is-fullheight-with-navbar is-warning">
    <div className="hero-body">
      <div className="container">
        <p className="hometitle">Welcome To Hogwarts!</p>
        <img src={hogwarts} width="600" alt='hogwarts'/>
          <p className="homemsg">Sort Yourself Into a House with the Sorting Hat!</p>
        <Link to='/quiz' className='Button'><button className="startquizbutton button is-d>anger">Start Quiz</button></Link>
      </div>
    </div>
  </section>
)
    
  

export default Home