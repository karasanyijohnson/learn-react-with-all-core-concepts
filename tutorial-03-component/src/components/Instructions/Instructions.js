//CLASS BASED COMPONENTS
// import React, { Component } from 'react';
// import './Instructions.css';
// import emoji from './emoji.svg'

// export default class Instructions extends Component {

//   render() {
//     return(
//       <div className="instructions">
//         <img alt="laughing crying emoji" src={emoji} />
//         <p>Click on an emoji to view the emoji short name.</p>
//       </div>
//     )
//   }
// }

// FUNCTIONAL BASED COMPONENTS
// import React from 'react';
// import './Instructions.css';
// import emoji from './emoji.svg'

// export default function Instructions() {
//   return(
//     <div className="instructions">
//         <img alt="laughing crying emoji" src={emoji} />
//         <p>Click on an emoji to view the emoji short name.</p>
//     </div>
//   )
// }

// FUNCTIONAL COMPONENTS WITH ARRAW FUNCTION
import React from 'react';
import './Instructions.css';
import emoji from './emoji.svg'

const Instructions = () => (
  <div className="instructions">
    <img alt="laughing crying emoji" src={emoji} />
    <p>Click on an emoji to view the emoji short name.</p>
  </div>
)

export default Instructions;