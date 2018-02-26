import React from 'react'
import FlashCard from './FlashCard'
import './FlashCardContainer.css'

const FlashCardContainer = () => {
  const imageSrc = 'https://cdn.articulate.com/rise/courses/_Af0P0L1E-1akg7PhqRPNyg0uRFD0pUp/55J-c_DLx5JdTJ_7.jpg'
  const longtext = 'Café au lait crema so cup est single shot acerbic. Saucer as, black crema organic single origin mocha. Half and half as iced caffeine robusta wings instant. Caramelization brewed con panna, aftertaste, seasonal, froth and, a medium ristretto caramelization caffeine. Mocha crema, lungo, bar, roast in coffee that latte as grinder latte. Cortado, acerbic, grounds coffee doppio brewed sweet. Id, plunger pot single shot, filter, galão spoon blue mountain aged beans. As whipped et chicory aftertaste java robusta est half and half.'
  const contents = [
    {
      front: <span> Front of card 1 </span>,
      back: <span> Back of card 1 </span>
    },
    {
      front: <span> Front of card 2 </span>,
      back: <div style={{ background: `center 50% url(${ imageSrc })`, backgroundSize: 'cover' }} ></div>
    },
    {
      front: <span> Front of card 3 </span>,
      back: <span className='long-text'>{ longtext }</span>
    }
  ]

  const buildFlashCard = ({ front, back }, idx) => {
    return <FlashCard front={ front } back={ back } key={ `card-${idx}` }  />
  }

  return (
    <div className="flashcard-container">
      { contents.map(buildFlashCard) }
    </div>
  )
}

export default FlashCardContainer