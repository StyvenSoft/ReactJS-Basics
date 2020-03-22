// Introducción: React es una biblioteca de vista de código abierto creada y mantenida por Facebook. 
//Es una gran herramienta para representar la interfaz de usuario (UI) de las aplicaciones web modernas.

// crear un elemento JSX simple

const JSX = <h1>Hello JSX!</h1>;

// crear un elemento JSX complejo

// Valid JSX:

<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>


// Example 

const JSX = <div>
    <h1>Welcome</h1>
    <p>This is a project React</p>
    <ul>
        <li>Firds</li>
        <li>Seconds</li>
        <li>Three</li>
    </ul>
</div>

// Agregar comentarios en JSX

// Para poner comentarios dentro de JSX, usa la sintaxis {/* */}para ajustar el texto del comentario.

const JSX = (
  <div>
    {/* Example comments in JSX*/}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

// renderizar elementos HTML al DOM

/* ReactDOM ofrece un método simple para representar 
 elementos React ante el DOM que se ve así: ReactDOM.render(componentToRender, targetNode) */

 // Example

 const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

ReactDOM.render(
  JSX,
  document.getElementById('challenge-node')
);

// definir una clase HTML en JSX

/*
Una diferencia clave en JSX es que ya no puede usar la palabra classpara definir clases HTML. 
Esto se debe a que classes una palabra reservada en JavaScript. En cambio, utiliza JSX className.
*/

const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

// Las etiquetas JSX de cierre automático

// Cualquier elemento JSX puede escribirse con una etiqueta de cierre automático

// <br />para que sea JSX válido que se pueda transpilar.
//  se puede escribir como <div />o <div></div>. 

const JSX = (
  <div>
    {/* remove comment and change code below this line
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
    remove comment and change code above this line */}
    <br />
    <hr />
  </div>
);

// crear un componente funcional sin estado

// Para crear un componente con una función, simplemente escriba una función de JavaScript que devuelva JSX o null.

// After being transpiled, the <div> will have a CSS class of 'customClass'
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};

// crear un componente de React

// La otra forma de definir un componente React es con la classsintaxis ES6 

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

// Example

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return(
      <div>
        <h1>Hello React!</h1>
      </div>
    );

  }
};

