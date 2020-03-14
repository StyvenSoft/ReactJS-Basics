// Puede anidar elementos JSX dentro de otros elementos JSX, al igual que en HTML

<a href="https://www.example.com"><h1>Click me!</h1></a>

// usar saltos de línea y sangría de estilo HTML

<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>

/* Si una expresión JSX ocupa más de una línea,
debe ajustar la expresión JSX de varias líneas entre paréntesis. */

(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)

// ¡Las expresiones JSX anidadas se pueden guardar como variables, pasar a funciones,

// expresión JSX anidada que se guarda como una variable

const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );

 // example
 const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);
