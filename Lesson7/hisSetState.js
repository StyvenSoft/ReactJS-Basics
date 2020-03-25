// Actualizar estado con this.setState

// Un componente cambia su estado llamando a la función this.setState()

// this.setState()toma dos argumentos: un objeto que actualizará el estado del componente y una devolución de llamada.

import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }

  render() {
    return <div></div>;
  }
}

<Example />

// this.setState()toma un objeto y combina ese objeto con el estado actual del componente


