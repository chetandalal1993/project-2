import React from 'react'
import { Link } from 'react-router-dom'
import { getAllData } from '../../lib/api'
import demiguise from '../assets/images/demiguise.png'
import '../assets/fonts/HARRYP__.TTF'



class Quiz extends React.Component {
  state = {
    housesData :[],
    result: [],
    questions: [
      'Which animal do you most identify with?', 
      'Which colour combination are you most drawn to?', 
      'Which values do you most relate to?', 
      'Which professor do you most admire?'
    ],
    quizOptions: ['mascot', 'colors', 'values', 'headOfHouse']
  }

  async componentDidMount() {
    try {
      const res = await getAllData()
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


