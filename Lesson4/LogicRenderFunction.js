// Una render()función debe tener una returndeclaración.

// Una render()función también puede ser un buen lugar para colocar cálculos simples que deben realizarse

class Random extends React.Component {
    render() {
      // First, some logic that must happen
      // before rendering:
      const n = Math.floor(Math.random() * 10 + 1);
      // Next, a return statement
      // using that logic:
      return <h1>The number is {n}!</h1>;
    }
}

// Cuidado con este error común:

class Random extends React.Component {
    // This should be in the render function:
    // const n = Math.floor(Math.random() * 10 + 1);
  
    render() {
      return <h1>The number is {n}!</h1>;
    }
  };

// Example 

import React from 'react';
import ReactDOM from 'react-dom';


const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render(){
    const friend = friends[0];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <Friend />,
  document.getElementById('app')
);