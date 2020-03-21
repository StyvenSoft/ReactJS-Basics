// cómo hacer que un componente muestre información transmitida:

/* 
1 - Encuentra la clase de componente que va a recibir esa información.
2 - Incluir this.props.name-of-informationen la declaración del método 
de representación de esa clase de componente return.

*/

// Example Greeting

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Steveen' />, 
  document.getElementById('app')
);