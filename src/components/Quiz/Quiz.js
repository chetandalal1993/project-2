import React from 'react'
import { Link } from 'react-router-dom'
import { getAllData } from '../../lib/api'



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
      <div>
        <p className='questions'>{this.state.questions[0]}</p> 
        <div className='options'>
        {this.state.housesData.map(house => (
            <button key={house._id} onClick={this.nextQuestion} value={house.name}>{house[this.state.quizOptions[0]]}</button>
        ))}
        </div>
            
        { this.state.result.length === 4 && <Link to={{
          pathname: '/result',
            state: {
              result: this.state.result
            }
          }} className="Result">See the Result</Link> }
      </div>
    )
  }
}

export default Quiz


