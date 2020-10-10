import React from 'react'
import Gryffindor from '../assets/images/g2.png'
import Slytherin from '../assets/images/s2.png'
import Ravenclaw from '../assets/images/r2.png'
import Hufflepuff from '../assets/images/h2.png'

import Peeku1 from '../assets/images/peeku1.jpeg'
import Peeku2 from '../assets/images/peeku2.jpeg'
import Peeku3 from '../assets/images/peeku3.jpeg'
import Peeku4 from '../assets/images/peeku4.jpeg'


class Result extends React.Component {

  state =  {
    finalImage: [
      {name: "Gryffindor", img1: Gryffindor, img2: Peeku3, info: "You belong in Gryffindor,\nWhere hotness is transient,\n Your yawns and paad, frequent but cute,\n Makes Cheeku go in love every night."},
      {name: "Slytherin", img1: Slytherin, img2: Peeku1, info: "You belong in Slytherin,\n There you'll be called kamini,\nYou will never award enough points\nBut your smile will make up for all the kanjoosi."},
      {name: "Ravenclaw", img1: Ravenclaw, img2: Peeku2, info: "You belong in sweet and innocent Ravenclaw,\nWho squats while holding ears,\nWho looks cute and hot always,\nBe it Day 0 or Day 3"},
      {name: "Hufflepuff", img1: Hufflepuff, img2: Peeku4, info: "You belong in Hufflepuff,\nWith soft soft gaal.. uff,\n They love infintely, yes the rumours are true\nJust look at you"}
    ]
  }

  findWinner = (result) => {
    console.log(result) 
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
    // const winner = this.findWinner(this.props.location.state.result)
    var houseNames = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
    const winner = houseNames[Math.floor(Math.random() * 4)]
    const img1 = this.findImage(winner) //* matching image name to to winner
    return (
      <div className="result">
        <p className="resultmessage">{winner}</p>
        <table>
          <tr>
            <td >
            <img src={`${img1[0].img1}`} align="center" width="200px" height="100px"  alt={`${winner}`} />
            </td>
            <td>
            <img src={`${img1[0].img2}`} align="center" width="200px" height="100px" alt={`${winner}`} />
            </td>
          </tr>
        </table>
        
        <p className="houseinfo">{`${img1[0].info}`}</p>
        
      </div>
    )
  }

}

export default Result


// if winner === Gryffindor return ../assets/images/Gryffindor.png 
// else if winner ===   