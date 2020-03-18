// use importpara importar la biblioteca React. Guarde la biblioteca en una variable llamada React.

import React from 'react';

// Los métodos importados 'react-dom'están destinados a interactuar con el DOM.

import ReactDOM from 'react-dom';

// Aquí hay otro hecho sobre los componentes: cada componente debe provenir de una clase de componente .

// ¡Los nombres de las variables de la clase componente deben comenzar con letras mayúsculas!

class MyComponentClass extends React.Component {

    // Un método de representación es una propiedad cuyo nombre es rendery cuyo valor es una función.
    render() {
        return <h1>Welcome to my Component class</h1>;
    }

}

// Los elementos JSX pueden ser instancias de tipo HTML o componentes .

//  Para representar un componente, ese componente debe tener un método llamado render

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
  );