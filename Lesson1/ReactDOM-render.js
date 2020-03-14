// ReactDOM.render()

/*ReactDOMes el nombre de una biblioteca de JavaScript. Esta biblioteca contiene varios
métodos específicos de React, todos los cuales tratan con el DOM de una forma u otra.*/

// ReactDOM.render()es la forma más común de renderizar JSX.

import React from 'react';
import ReactDOM from 'react-dom';

// code here:

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

// Al final del ejercicio anterior, esto apareció en la pantalla

<main id="app">
  <h1>Render me!</h1>
</main>

// index.HTML

// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="utf-8">
// 	<link rel="stylesheet" href="/styles.css">
// 	<title>Learn ReactJS</title>
// </head>
//
// <body>
//   <span id="container"></span>
// 	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
//   <script src="/app.compiled.js"></script>
// </body>
//
// </html>

// app.js

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

// Passing a Variable to ReactDOM.render

// ReactDOM.render()El primer argumento debe evaluar una expresión JSX,
//no tiene que ser literalmente una expresión JSX

const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList,
  document.getElementById('app')
);

// example

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ul>
);

ReactDOM.render(
  myList,
  document.getElementById('app')
);
