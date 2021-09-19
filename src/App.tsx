import React from 'react';
import {Container, CompletedWords, TypedKeys, ValidKeys} from './styles'

function App() {
  return (
    <div className={Container}>
      <div className={ValidKeys}>
        <span className="matched"></span>
        <span className="remainder"></span>
      </div>
      <div className={TypedKeys}></div>
      <div className={CompletedWords}>
        <ol>
          <li></li>
        </ol>
      </div>
      
    </div>
  );
}

export default App;
