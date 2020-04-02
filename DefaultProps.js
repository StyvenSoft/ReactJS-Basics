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
