import React from 'react';
import './App.css';

function App() {
  return(
    <div className="wrapper">
      
     <label htmlFor="text">
       Add Your Text Here:
       <br></br>
       <textarea
         id="text"
         name="text"
         rows="10"
         cols="100"
       >
       </textarea>
      </label>
    </div>
  )
}

export default App;