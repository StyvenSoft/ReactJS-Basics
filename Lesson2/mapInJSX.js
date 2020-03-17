// Si desea crear una lista de elementos JSX, entonces .map()es su mejor opción. 

const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>

//  Los JSX <li>no tienen que estar en una matriz como esta, pero pueden estarlo.

// This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

// const liArray = [
//   <li>item 1</li>, 
//   <li>item 2<li>, 
//   <li>item 3</li>
// ];

<ul>{liArray}</ul>

// Example list listItems

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
 <li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
<ul>{peopleLis}</ul>,
document.getElementById('app')
);