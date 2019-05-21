import React from 'react'
import './StarWars.css'

import SWCharacter from './SWCharacter'

const SWCharacterList = (props) => {
  const { characters } = props
  return (
    <div className="characters-wrapper">
      {
        characters.map(character => {
          return <SWCharacter key={character.name} character={character} />
        })
      }
    </div>
  )
}

export default SWCharacterList
