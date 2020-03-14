/* puede acceder a las variables dentro de una expresión JSX,
 incluso si esas variables se declararon en el exterior. */

// Declare a variable:
const name = 'Gerdo';

// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;

// Example 


import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'I am da best';

ReactDOM.render(
    <h1>{theBestString}</h1>, 
    document.getElementById('app')
);