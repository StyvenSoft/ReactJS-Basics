// Pasar un controlador de eventos como accesorio

// Se puede pasar un método exactamente de la misma manera que pasa cualquier otra información

// Example

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
    return <Button talk={this.talk}/>;
  }
}


ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);