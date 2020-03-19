// Las funciones de procesamiento a menudo contienen oyentes de eventos

render() {
    return (
      <div onHover={myFunc}>
      </div>
    );
}

// En React, define manejadores de eventos como métodos en una clase de componente.

class MyClass extends React.Component {
    myFunc() {
      alert('Stop it.  Stop hovering.');
    }
  
    render() {
      return (
        <div onHover={this.myFunc}>
        </div>
      );
    }
  }

  