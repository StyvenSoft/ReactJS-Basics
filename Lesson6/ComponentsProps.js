// Un componente propses un objeto. Contiene información sobre ese componente.

// Para ver el propsobjeto de un componente , usa la expresión this.props.

render() {
    console.log("Props object comin' up!");
  
    console.log(this.props);
  
    console.log("That was my props object!");
  
    return <h1>Hello world</h1>;
}

// Example 

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
ReactDOM.render(
    <PropsDisplayer/>,
    document.getElementById('app')
);