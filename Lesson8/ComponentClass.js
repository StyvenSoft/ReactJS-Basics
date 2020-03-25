// Construir una clase de componentes con estado

// necesita dos clases de componentes: una clase con estado y una clase sin estado .

// Parent.js

import React from 'react';
import ReactDOM from 'react-dom';


class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = { name : 'Frarthur' };
  }
  render() {
    return <div></div>;
  }
}

// child.js

import React from 'react';

export class Child extends React.Component{
  
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}