import React from 'react'
import { Link } from 'react-router-dom'
import sortinghat from '../assets/images/hat.png'
import housescrest from '../assets/images/housescrest.png'

class Navbar extends React.Component {
  state = { isOpen : false }
  
  handleToggle = () => {
    this.setState( { isOpen : !this.state.isOpen } )
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render () {
    const { isOpen } = this.state
    return (
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item"><img className="navimg" src={housescrest} height="60" alt='sorting hat'/><p className="navtext">Home</p></Link>
              <span onClick={this.handleToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
              </span>
            </div>

            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
              <div className="navbar-end">
              <Link to="/quiz" className="navbar-item"><img className="navimg" src={sortinghat} height="60" alt='sorting hat'/><p className="navtext">Sorting Hat</p></Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar