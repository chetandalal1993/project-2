import React from 'react'
import Gryffindor from '../assets/images/g2.png'
import Slytherin from '../assets/images/s2.png'
import Ravenclaw from '../assets/images/r2.png'
import Hufflepuff from '../assets/images/h2.png'


class Result extends React.Component {

  state =  {
    finalImage: [
      {name: "Gryffindor", img: Gryffindor, info: "You belong in Gryffindor,\nWhere dwell the brave at heart,\nTheir daring, nerve, and chivalry\n Set Gryffindors apart."},
      {name: "Slytherin", img: Slytherin, info: "You belong in Slytherin,\n There you'll make your real friends,\nThose cunning folks use any means\nTo achieve their ends."},
      {name: "Ravenclaw", img: Ravenclaw, info: "You belong in wise old Ravenclaw,\nif you've a ready mind,\nWhere those of wit and learning,\nWill always find their kind"},
      {name: "Hufflepuff", img: Hufflepuff, info: "You belong in Hufflepuff,\nWhere they are just and loyal,\nThose patient Hufflepuffs are true\nAnd unafraid of toil"}
    ]
  }

  findWinner = (result) => {
    // console.log(result) 
      return result.sort((a,b) =>
            result.filter(v => v===a).length
          - result.filter(v => v===b).length
      ).pop()
  }

  //* if image name is equal to item then return that image
  findImage = (item) => {
    return this.state.finalImage.filter(element => {
      if(element.name === item) {
        return element
      }
    })
  }

  render() {
    const winner = this.findWinner(this.props.location.state.result)
    // console.log(winner) 
    const img = this.findImage(winner) //* matching image name to to winner
    return (
      <div className="result">
        <p className="resultmessage">{winner}</p>
        <img src={`${img[0].img}`} width="200" alt={`${winner}`} />
        <p className="houseinfo">{`${img[0].info}`}</p>
      </div>
    )
  }

}

export default Result


// if winner === Gryffindor return ../assets/images/Gryffindor.png 
// else if winner ===   