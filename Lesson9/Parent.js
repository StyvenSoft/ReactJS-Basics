import React from 'react';
import ReactDOM from 'react-dom';
import { DefineEventHandler } from './DefineEventHandler';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
  }
  changeName(newName) {
      this.setState({
        name: newName
      });
    }

  render() {
    return <Child name={this.state.name} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);