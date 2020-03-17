// La mayoría de los programadores de React usan JSX, y lo usaremos para el resto de 
// este tutorial, pero debes entender que es posible escribir código React sin él.

const h1 = <h1>Hello world</h1>;

// puede reescribirse sin JSX, de esta manera:

const h1 = React.createElement(
    "h1",
    null,
    "Hello, world"
);

// Cuando se compila un elemento JSX, el compilador transforma el 
//elemento JSX en el método que se ve arriba: React.createElement().

const greatestDivEver = React.createElement(
    "div", 
    null, 
    "i am div"
);