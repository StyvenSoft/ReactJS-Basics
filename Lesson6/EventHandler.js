// Poner un controlador de eventos en una clase de componente

// pasar funciones como props. Es especialmente común pasar las funciones del controlador de eventos .

// Explample.js

import React from 'react';

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}

// Talker.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  
  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// Button.js

import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button>
        Click me!
      </button>
    );
  }
}

