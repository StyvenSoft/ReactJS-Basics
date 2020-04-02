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

  // usa PropTypes para definir los Props que esperas

  // configurar propTypessu componente para que los datos sean de tipo array.

  MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

// PropTypesse importa independientemente de React

  import PropTypes from 'prop-types';

  // propTypesel Itemscomponente que se necesita quantitycomo accesorio y verifique que sea de tipo number.

  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // change code below this line
  Items.propTypes = {
    quantity: PropTypes.number.isRequired
  };

  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };
  
// Output:
// Current Quantity of Items in Cart: 0

// acceder a los accesorios con this.props

// El componente de clase ES6 utiliza una convención ligeramente diferente para acceder a los accesorios.

// Por ejemplo, si un componente de clase ES6 tiene un accesorio llamado data, usted escribe 

{this.props.data} // en JSX.

// Example

class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* change code below this line */ }
              <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
             
          </div>
      );
    }
  };
  
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            { /* change code below this line */ }
              <ReturnTempPassword tempPassword="123456789" />
          </div>
      );
    }
  };


