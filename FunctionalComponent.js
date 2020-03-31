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

  
  // pasar una matriz como Props

// Para pasar una matriz a un elemento JSX, debe tratarse como JavaScript y envolverse entre llaves.

<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>

// El componente hijo tiene acceso a la propiedad de matriz colors

// Métodos de matriz como los que join()se pueden usar al acceder a la propiedad.

const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>

// Esto unirá todos los colorselementos de la matriz en una cadena separada por comas y producirá: <p>green, blue, red</p>

// Example :


const List = (props) => {
    { /* change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>;
    { /* change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* change code below this line */ }
          <List tasks={["Walk", "Cook", "Bake"]} />
          <h2>Tomorrow</h2>
          { /* change code above this line */ }
          <List tasks={["Study", "Code", "Eat"]} />
        </div>
      );
    }
  };