import React from 'react'
// import Gryffindor from '../assets/images/Gryffindor.png'
// import Slytherin from '../assets/images/Slytherin.png'
// import Ravenclaw from '../assets/images/Ravenclaw.png'
// import Hufflepuff from '../assets/images/Hufflepuff.png'


class Result extends React.Component {


  findWinner = (result) => {
      return result.sort((a,b) =>
            result.filter(v => v===a).length
          - result.filter(v => v===b).length
      ).pop()
  }

  render() {
    // const winner = this.findWinner(this.props.location.state.result)
    return (
      <div className="result">
        {this.findWinner(this.props.location.state.result)}
        {/* <img src={`../assets/images/${winner}.png`} width="800" alt={`${winner}`} /> */}
      </div>
    )
  }

}

export default Result


// if winner === Gryffindor return ../assets/images/Gryffindor.png 
// else if winner === 