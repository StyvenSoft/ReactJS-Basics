// crear un componente con composición

// componer múltiples componentes React juntos

// en el rendermétodo podrías escribir

return (
    <App>
     <Navbar />
     <Dashboard />
     <Footer />
    </App>
   )

// Example

const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* change code below this line */ }
            
             <ChildComponent />
  
          { /* change code above this line */ }
        </div>
      );
    }
  };
  

  //  usar React para representar componentes anidados

  // Example

  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* change code below this line */ }
  
        { /* change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
            <Fruits />
            <TypesOfFruit />
          { /* change code above this line */ }
        </div>
      );
    }
  };
  
// Compose React Components
  class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }
          <NonCitrus />
          <Citrus />
        { /* change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
        <Fruits />
        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

// renderizar un componente de clase al DOM

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
          <Fruits />
          <Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line

ReactDOM.render(<TypesOfFood />,
document.getElementById('challenge-node'));