// Acceder al estado de un componente

// Para leer un componente state, use la expresión this.state.name-of-property

class TodayImFeeling extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mood: 'decent' };
    }
  
    render() {
      return (
        <h1>
          I'm feeling {this.state.mood}!
        </h1>
      );
    }
  }