// una expresión JSX debe tener exactamente un elemento externo.

const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

// este código no funcionará

// const paragraphs = (
//   <p>I am a paragraph.</p>
//   <p>I, too, am a paragraph.</p>
// );

/* La primera etiqueta de apertura y la etiqueta de cierre final
de una expresión JSX deben pertenecer al mismo elemento JSX! */}

/*Si observa que una expresión JSX tiene múltiples elementos externos,
la solución generalmente es simple: ajuste la expresión JSX en a <div></div>*/

const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);
