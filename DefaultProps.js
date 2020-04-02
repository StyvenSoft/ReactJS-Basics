// React también tiene una opción para establecer accesorios predeterminados. 

// Por ejemplo, si declara

MyComponent.defaultProps = { location: 'San Francisco' }

//  accesorio de ubicación que se establece en la cadena San Francisco
//

// Defina accesorios predeterminados en este componente que especifiquen un accesorio itemscon un valor de 0.

const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
};

ShoppingCart.defaultProps = { items: 0 }


// anular props predeterminados

// La forma de anular los accesorios predeterminados es establecer explícitamente los valores de los accesorios para un componente.

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* change code below this line */ }
      return <Items quantity={10}/>
      
    }
  };
  // Output :
  // Current Quantity of Items in Cart: 10