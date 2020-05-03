import React from 'react'
import Gryffindor from '../assets/images/Gryffindor.png'
import Slytherin from '../assets/images/Slytherin.png'
import Ravenclaw from '../assets/images/Ravenclaw.png'
import Hufflepuff from '../assets/images/Hufflepuff.png'


class Result extends React.Component {

  state =  {
    finalImage: [
      {name: "Gryffindor", img: Gryffindor},
      {name: "Slytherin", img: Slytherin},
      {name: "Ravenclaw", img: Ravenclaw},
      {name: "Hufflepuff", img: Hufflepuff}
    ]
  }

  findWinner = (result) => {
      return result.sort((a,b) =>
            result.filter(v => v===a).length
          - result.filter(v => v===b).length
      ).pop()
  }

  findImage = (item) => {
    return this.state.finalImage.filter(element => {
      if(element.name === item) {
        return element.img
      }
    })
  }

  render() {
    const winner = this.findWinner(this.props.location.state.result)
    const img = this.findImage(winner)
    return (
      <div className="result">
        {this.findWinner(this.props.location.state.result)}
        <img src={`${img[0].img}`} width="300" alt={`${winner}`} />
      </div>
    )
  }

}

export default Result


// if winner === Gryffindor return ../assets/images/Gryffindor.png 
// else if winner === 