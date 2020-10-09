import React from 'react'
import { Link } from 'react-router-dom'
import { getAllData } from '../../lib/api'
import demiguise from '../assets/images/demiguise.png'



class Quiz extends React.Component {
  state = {
    housesData :[],
    result: [],
    questions: [
      'So Peeka, which is the best name in the world?', // Baby Phoolan Devi Palak Jain Babu
      'Puchka, which day is the hottest and sweetest?', 
      'Peeku Rani, who is your favourite?', // Seeta-Geeta Laila Chhoti Peeku Potentially Chhoti Peeku
      'Okay Jhingala. What\'s your favourite quote?' // Tumne to mujhe jaana hi kaha hai. Hotness is transient. Peeku Peeku Peeku Aaja aaja aaja. Kuchh bhi chalega mujhe.
    ],
    quizOptions: ['mascot', 'colors', 'values', 'headOfHouse']
  }

  async componentDidMount() {
    try {
      console.log("Yo")
      // const res = await getAllData()
      var a = "{\"data\":[{\"_id\":\"5a05e2b252f721a3cf2ea33f\",\"name\":\"Gryffindor\",\"mascot\":\"Baby\",\"headOfHouse\":\"Tumne to mujhe jaana hi kaha hai\",\"houseGhost\":\"Nearly Headless Nick\",\"founder\":\"Goderic Gryffindor\",\"__v\":0,\"school\":\"Hogwarts School of Witchcraft and Wizardry\",\"members\":[\"5a0fa648ae5bc100213c2332\",\"5a0fa67dae5bc100213c2333\",\"5a0fa7dcae5bc100213c2338\",\"5a107e1ae0686c0021283b19\",\"5a10944f3dc2080021cd8755\",\"5a10947c3dc2080021cd8756\",\"5a1096b33dc2080021cd8762\",\"5a1097653dc2080021cd8763\",\"5a1098fd3dc2080021cd876e\",\"5a109af13dc2080021cd877a\",\"5a109bfc3dc2080021cd877f\",\"5a109c3d3dc2080021cd8780\",\"5a109cb83dc2080021cd8784\",\"5a109cd33dc2080021cd8785\",\"5a109e143dc2080021cd878d\",\"5a109e1e3dc2080021cd878e\",\"5a109e253dc2080021cd878f\",\"5a109e543dc2080021cd8790\",\"5a109f053dc2080021cd8793\",\"5a1226520f5ae10021650d76\",\"5a1226d70f5ae10021650d77\",\"5a12292a0f5ae10021650d7e\",\"5a12298d0f5ae10021650d7f\",\"5a1229e10f5ae10021650d80\",\"5a122cbe0f5ae10021650d89\",\"5a1233ff0f5ae10021650d98\",\"5a1234cb0f5ae10021650d9b\",\"5a1237480f5ae10021650da3\",\"5a1237c00f5ae10021650da5\",\"5a1238070f5ae10021650da6\",\"5a1238350f5ae10021650da7\",\"5a12387a0f5ae10021650da8\",\"5a1238b20f5ae10021650da9\",\"5a1239130f5ae10021650daa\",\"5a12393d0f5ae10021650dab\",\"5a12395f0f5ae10021650dac\",\"5a1239c80f5ae10021650dad\",\"5a1239f10f5ae10021650dae\",\"5a123b450f5ae10021650db7\",\"5a123f130f5ae10021650dcc\"],\"values\":\"Seeta-Geeta\",\"colors\":\"Day 0\"},{\"_id\":\"5a05da69d45bd0a11bd5e06f\",\"name\":\"Ravenclaw\",\"mascot\":\"Phoolan Devi\",\"headOfHouse\":\"Hotness is transient\",\"houseGhost\":\"The Grey Lady\",\"founder\":\"Rowena Ravenclaw\",\"__v\":0,\"school\":\"Hogwarts School of Witchcraft and Wizardry\",\"members\":[\"5a0fa8a6ae5bc100213c233b\",\"5a107ffee0686c0021283b21\",\"5a108023e0686c0021283b22\",\"5a108047e0686c0021283b23\",\"5a1097d53dc2080021cd8769\",\"5a1099cf3dc2080021cd8772\",\"5a109a553dc2080021cd8777\",\"5a109de83dc2080021cd878c\",\"5a109e943dc2080021cd8791\",\"5a109ebd3dc2080021cd8792\",\"5a1225a20f5ae10021650d73\",\"5a12260f0f5ae10021650d75\",\"5a122a880f5ae10021650d82\",\"5a122ac40f5ae10021650d83\",\"5a122aef0f5ae10021650d84\",\"5a12368a0f5ae10021650da0\",\"5a123e450f5ae10021650dc8\"],\"values\":\"Laila\",\"colors\":\"Day 1\"},{\"_id\":\"5a05dc8cd45bd0a11bd5e071\",\"name\":\"Slytherin\",\"mascot\":\"Palak Jain\",\"headOfHouse\":\"Peeku Peeku Peeku Aaja aaja aaja\",\"houseGhost\":\"The Bloody Baron\",\"founder\":\"Salazar Slytherin\",\"__v\":0,\"members\":[\"5a0fa6bbae5bc100213c2334\",\"5a0fa6e8ae5bc100213c2335\",\"5a0fa74eae5bc100213c2336\",\"5a0fa772ae5bc100213c2337\",\"5a107e4ae0686c0021283b1a\",\"5a1093eb3dc2080021cd8753\",\"5a10942a3dc2080021cd8754\",\"5a1099353dc2080021cd876f\",\"5a109aa03dc2080021cd8779\",\"5a109d893dc2080021cd8789\",\"5a109d9f3dc2080021cd878a\",\"5a109dab3dc2080021cd878b\",\"5a109f8b3dc2080021cd8795\",\"5a109fa83dc2080021cd8796\",\"5a109fde3dc2080021cd8797\",\"5a1225640f5ae10021650d72\",\"5a1225e30f5ae10021650d74\",\"5a122c200f5ae10021650d88\",\"5a1232600f5ae10021650d93\",\"5a12327c0f5ae10021650d94\",\"5a1233bc0f5ae10021650d97\",\"5a1235060f5ae10021650d9c\",\"5a1236eb0f5ae10021650da1\",\"5a123a710f5ae10021650db1\",\"5a123af40f5ae10021650db5\"],\"values\":\"Chhoti Peeku\",\"colors\":\"Day 2\"},{\"_id\":\"5a05dc58d45bd0a11bd5e070\",\"name\":\"Hufflepuff\",\"mascot\":\"Babu\",\"headOfHouse\":\"Kuchh bhi chalega mujhe\",\"houseGhost\":\"The Fat Friar\",\"founder\":\"Helga Hufflepuff\",\"__v\":0,\"school\":\"Hogwarts School of Witchcraft and Wizardry\",\"members\":[\"5a0fa11a4d153d00212c47cc\",\"5a0fa360ae5bc100213c232c\",\"5a0fa365ae5bc100213c232d\",\"5a0fa4daae5bc100213c232e\",\"5a0fa842ae5bc100213c2339\",\"5a0fa86dae5bc100213c233a\",\"5a1096253dc2080021cd875f\",\"5a1098bd3dc2080021cd876d\",\"5a109c993dc2080021cd8783\",\"5a1223720f5ae10021650d6f\",\"5a1223ed0f5ae10021650d70\",\"5a122f3d0f5ae10021650d8d\",\"5a1232b10f5ae10021650d95\",\"5a12333f0f5ae10021650d96\",\"5a1234500f5ae10021650d99\",\"5a1235790f5ae10021650d9d\",\"5a123cb40f5ae10021650dbc\"],\"values\":\"Potentially Chhoti Peeku\",\"colors\":\"Day 3\"}],\"status\":200,\"statusText\":\"\",\"headers\":{\"content-type\":\"application/json; charset=utf-8\"},\"config\":{\"url\":\"https://www.potterapi.com/v1/houses?key=$2a$10$t6cqE4.0tqBOAAkoYBb3G.ZZ8B8aJ55eOn5wTyv.mfkWgHT7xJ75y\",\"method\":\"get\",\"headers\":{\"Accept\":\"application/json, text/plain, */*\"},\"transformRequest\":[null],\"transformResponse\":[null],\"timeout\":0,\"xsrfCookieName\":\"XSRF-TOKEN\",\"xsrfHeaderName\":\"X-XSRF-TOKEN\",\"maxContentLength\":-1},\"request\":{}}";
      const res = JSON.parse(a)
      console.log(JSON.stringify(res))
      this.setState({ housesData : res.data })
    } catch (err) {
      console.log(err)
      this.props.history.push('/notfound')
    }
  }

  nextQuestion = event => { // * attached to the answer buttons, also updates score when these are clicked.
    const newQuestions = [...this.state.questions.slice(1)] // * make a new 
    const newOptions = [ ...this.state.quizOptions.slice(1) ]
    //array cutting off the old first questions
    this.setState({ questions: newQuestions, quizOptions : newOptions}) // * set that new array into state

    const result = [ ...this.state.result ]
    result.push(event.target.value)
    this.setState({ result })
  }


  render() {
    return (
      <div className="quiz">
        <p className='questions'>{this.state.questions[0]}</p> 
        <div className='options'>
          {/* if typeof === '' then map like this
          else map like array */}
          
        {
        this.state.housesData.map((house) =>  {
          if (typeof house[this.state.quizOptions[0]] === 'string') {
            return <button key={house._id} onClick={this.nextQuestion} value={house.name}>{house[this.state.quizOptions[0]]}</button>
          } else if (typeof house[this.state.quizOptions[0]] === 'object') {
            return <button key={house._id} onClick={this.nextQuestion} value={house.name}>{house[this.state.quizOptions[0]].join(', ')}</button>
          }
        })
      }
        </div>
            
        { this.state.result.length === 4 && <Link to={{
          pathname: '/result',
            state: {
              result: this.state.result
            }
          }} className="Result">
          <button className="seeresult">See the Result</button> <img className="demiguise" src={demiguise} width="200" alt='result pixie'/>
            </Link> }
      </div>
    )
  }
}

export default Quiz


