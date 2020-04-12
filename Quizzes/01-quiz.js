// ¿Qué representará "100" en la pantalla?

ReactDOM.render(
    <h1>{10 * 10}</h1>,
    document.getElementById('app')
);

// Coloque los siguientes pasos en el orden correcto:

/*

b. Se procesa un elemento JSX.
d. Todo el DOM virtual se actualiza.
c. El DOM virtual "difiere", comparando su yo actual con su yo anterior.
e. Parte de las actualizaciones reales del DOM.
a. La pantalla se ve diferente de lo que solía ser.

*/

// ¿Cuál es la forma correcta de adjuntar la función 'yo' a un evento de clic?

let yo = () => {
    alert('Yo');
};

<button onClick={yo}></button>

// ¿Qué problema intenta resolver el DOM virtual?

// rta:  La actualización de objetos DOM ocurre innecesariamente a menudo.

// ¿Puede un navegador web leer JSX directamente?

// rta: NO, JSX debe compilarse antes de que un navegador web pueda leerlo

// ¿Qué debe pasar a ReactDOM.render () para su primer argumento?

// rta: una expresión JSX que desea representar

// ¿Qué diferencia hay entre un objeto DOM y un objeto DOM virtual?

/*
Se actualizará un objeto DOM virtual si CUALQUIER elemento JSX se procesa.
Un objeto DOM virtual puede actualizarse mucho más rápido que un objeto DOM normal.
Un objeto DOM virtual no puede afectar directamente a HTML.

*/ 

// ¿A qué deberías pasar ReactDOM.render()por su segundo argumento?

// rta: Un selector que coincide con un elemento HTML

// ¿Qué hay de malo con este código?

let skateboardDog = (
    <img src="alfie.jpg" />
    <h1>Hiya kids!  I'm a dog on a skateboard.</h1>
  );

  // rta: las expresiones JSX necesitan de un elemento mas externo