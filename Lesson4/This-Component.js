// "this" dentro del cuerpo de una declaración de clase de componente.


class IceCreamGuy extends React.Component {
    get food() {
      return 'ice cream';
    }
  
    render() {
      return <h1>I like {this.food}.</h1>;
    }
  }

  // Example 

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
get name() {
  return 'whatever-your-name-is-goes-here';
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));