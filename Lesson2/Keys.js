// Cuando haces una lista en JSX, a veces tu lista necesitará incluir algo llamado keys

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

// A keyes un atributo JSX. El nombre del atributo es key. El valor del atributo debe ser algo único, similar a un idatributo.

// Example

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
 <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
<ul>{peopleLis}</ul>,
document.getElementById('app')
);
