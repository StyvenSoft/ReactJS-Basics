// Puede pasar información a un componente React.

<MyComponent foo = "bar" />

// pasar un componente del mensaje, "This is some top secret info."
// necesita un nombre para la información que desea pasar.

<Example message="This is some top secret info." />

// pasar información que no sea una cadena, entonces envuelva esa información en llaves.

<Greeting myInfo={["top", "secret", "lol"]} />

//  Los valores que no son cadenas están envueltos en llaves

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

// Example Props

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello"/>,
               document.getElementById('app'))
