// Cuando un usuario hace clic en <button></button>, se disparará un evento de clic. 
// Esto hará que se llame a la función transmitida, que actualizará el estado del padre.

import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}
