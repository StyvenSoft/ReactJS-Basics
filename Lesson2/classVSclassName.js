// En JSX, no puedes usar la palabra class! Tienes que usar classNameen su lugar

<h1 className="big">Hey</h1>

// Example 

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:

// Cuando se representa JSX, los className atributos JSX se representan automáticamente como class atributos

const myDiv = (<div className="big">I AM A BIG DIV</div>);

ReactDOM.render(myDiv, document.getElementById('app'));