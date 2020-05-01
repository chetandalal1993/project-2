import React from 'react'
import pixie from '../assets/images/errorpixie.png'

const Error = () => (
  <section className="hero is-fullheight-with-navbar is-warning">
    <div className="hero-body">
      <div className="container">
      <div className="errorpixie">
      <img className="pixie" src={pixie} width="400" alt='error pixie'/>
      </div>
        <p className="title is-1 has-text-centered">Oops something went wrong. Please try again!</p>
      </div>
    </div>
  </section>
)

export default Error