import React from 'react'
import './StarWars.css'

const SWCharacterList = (props) => {
  const { characters } = props
  return (
    <div>
      {
        characters.map(character => {
          // return an instance of SWCharacter
        })
      }
    </div>
  )
}

export default SWCharacterList
