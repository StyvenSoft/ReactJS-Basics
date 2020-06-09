import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

// La clase de componente principal define un método que llama this.setState().

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}