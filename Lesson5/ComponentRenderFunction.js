// un .render()método que devuelve un elemento JSX similar a HTML

class Example extends React.Component {
    render() {
      return <h1>Hello world</h1>;
    }
  }

  // Los métodos de representación también pueden devolver otro tipo de JSX

  class OMG extends React.Component {
    render() {
      return <h1>Whooaa!</h1>;
    }
  }
  
  class Crazy extends React.Component {
    render() {
      return <OMG />;
    }
  }

  