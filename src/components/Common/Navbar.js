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
              <Link to="/" className="navbar-item"><img src={housescrest} height="50" alt='sorting hat'/>Home</Link>
              <span onClick={this.handleToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
              </span>
            </div>

            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
              <div className="navbar-end">
              <Link to="/quiz" className="navbar-item"><img src={sortinghat} height="50" alt='sorting hat'/>Sorting Hat</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar