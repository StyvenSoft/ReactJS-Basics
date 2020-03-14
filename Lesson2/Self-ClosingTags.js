// JSX implica etiquetas de cierre automático .

//Fine in HTML with a slash:

  <br />

//Also fine, without the slash:

  <br></br>

  // En JSX, debe incluir la barra inclinada

//Fine in JSX:

  <br />

//NOT FINE AT ALL in JSX:

  <br></br>

  // Example 

const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" />
      <article>
        I LIKE TO SIT
        <br/>
        JENKINS IS MY NAME
        <br/>
        THANKS HA LOT
      </article>
    </div>
);