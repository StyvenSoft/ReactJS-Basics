// En React, puede pasar accesorios o propiedades a componentes secundarios.

// Puede pasar Welcomeuna userpropiedad escribiendo

<App>
  <Welcome user='Mark' />
</App>

// Como Welcomees un componente funcional sin estado, tiene acceso a este valor de la siguiente manera

const Welcome = (props) => <h1>Hello, {props.user}!</h1>

// . Puede acceder al valor del argumento en el cuerpo de la función.

// Con los componentes de clase, verá que esto es un poco diferente.

// Example :

const CurrentDate = (props) => {
    return (
      <div>
        { /* change code below this line */ }
        <p>The current date is: {props.date}</p>
        { /* change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* change code below this line */ }
          <CurrentDate date={Date()} />
          { /* change code above this line */ }
        </div>
      );
    }
  };
  