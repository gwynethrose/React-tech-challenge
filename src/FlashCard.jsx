import React, { Component } from 'react'
import './FlashCard.css'

class FlashCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flipped: false
    }

    this.flipCard = this.flipCard.bind(this)
  }

  flipCard() {
    this.setState({
      flipped: !this.state.flipped
    })
  }
  
  render() {
    return (
      <div className={ `flashcard-wrapper ${ this.state.flipped? 'flipped' : ''}` }>
        <div className='flashcard' onClick={ this.flipCard }>
          <div className='front'>
            { this.props.front }
          </div>
          <div className='back'>
            { this.props.back }
          </div>
        </div>
      </div>
    )
  }
}

export default FlashCard
