// Establecer estado inicial

// Un componente React puede acceder a información dinámica de dos maneras: propsy state.

// A diferencia props, unos de los componentes statees no pasaron desde el exterior

// Para hacer que un componente tenga state, dele al componente una statepropiedad

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mood: 'decent' };
    }
  
    render() {
      return <div></div>;
    }
  }
  
  <Example />

  // Este objeto representa el "estado" inicial de cualquier instancia de componente

  // Example

  import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = { title: 'Best App' }
}
	
  render() {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
}
<App />