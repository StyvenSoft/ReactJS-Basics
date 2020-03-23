// componente una propiedad llamada defaultProps

class Example extends React.Component {
    render() {
      return <h1>{this.props.text}</h1>;
    }
  }
  
  Example.defaultProps;

  // La defaultPropspropiedad debe ser igual a un objeto:

  class Example extends React.Component {
    render() {
      return <h1>{this.props.text}</h1>;
    }
  }
  
  // Set defaultProps equal to an object:
  Example.defaultProps = {};

  // Dentro de este objeto, escriba propiedades para cualquier valor predeterminado propsque desee establecer

  class Example extends React.Component {
    render() {
      return <h1>{this.props.text}</h1>;
    }
  }
  
  Example.defaultProps = { text: 'yo' }; 


  // Example 

  import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text : 'I am a button' }

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);