import React from 'react';
import PropTypes from 'prop-types';

function itemize(text){
  const letters = text.split('')
    .filter(l => l !== ' ')
    .reduce((collection, item) => {
      const letter = item.toLowerCase();
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1
      }
    }, {})
  return Object.entries(letters)
    .sort((a, b) => b[1] - a[1]);
}

export default function CharacterMap({ text }) {
  return(
    <div>
      Character Map:
      {itemize(text).map(character => (
        <div key={character[0]}>
          {character[0]}: {character[1]}
        </div>
      ))}
    </div>
  )
}

CharacterMap.propTypes = {
  text: PropTypes.string.isRequired
}