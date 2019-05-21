import React from 'react'
import './StarWars.css'

const SWCharacter = (props) => {
  const { character } = props
  return (
    <div className="character-card">
      <p className="name">{character.name}</p>
      <p><span className="label">birth year</span> {character.birth_year}</p>
      <p><span className="label">gender</span> {character.gender}</p>
      <p><span className="label">hair color</span> {character.hair_color}</p>
    </div>
  )
}

export default SWCharacter
