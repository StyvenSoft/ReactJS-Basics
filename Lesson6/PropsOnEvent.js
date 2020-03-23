// Cuando pasa un controlador de eventos como accesorio, como acaba de hacer, hay dos nombres que debe elegir.

// El primer nombre que debe elegir es el nombre del controlador de eventos en sí.

// El segundo nombre que debe elegir es el nombre del accesorio que usará para pasar el controlador de eventos. 

return <Button talk={this.talk} />;


// nombra su controlador de eventos handleClick . Si está escuchando un evento "keyPress",
//entonces nombra su controlador de eventos handleKeyPress

class MyClass extends React.Component {
    handleHover() {
      alert('I am an event handler.');
      alert('I will be called in response to "hover" events.');
    }
  }

  // Su nombre de utilería debe ser la palabra on, más su tipo de evento. Si está escuchando un evento de "clic",
  // Si está escuchando un evento "keyPress", entonces nombra su accesorio onKeyPress:

class MyClass extends React.Component {
handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
}

render() {
    return <Child onHover={this.handleHover} />;
    }
}

// Example

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>;
  }
}

// Button.js

import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}