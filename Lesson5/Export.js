// Hay algunas formas diferentes de usar export. En este curso, 
// utilizaremos un estilo llamado "exportaciones con nombre". 


//  coloque la palabra clave exportinmediatamente antes de algo que desea exportar.
// Manifestos.js:

export const faveManifestos = {
    futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
    agile: 'https://agilemanifesto.org/iso/en/manifesto.html',
    cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
  };

// Puede exportar varias cosas desde el mismo archivo:

// Manifestos.js:

export const faveManifestos = {
    futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
    agile:  'https://agilemanifesto.org/iso/en/manifesto.html',
    cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
  };
  
  export const alsoRan = 'TimeCube';

  // Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';

// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`); 

// Cuando usa exportaciones con nombre, siempre necesita envolver sus nombres importados en llaves

import { faveManifestos, alsoRan } from './Manifestos';

// Example

export class NavBar extends React.Component {
    render() {
      const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
      const navLinks = pages.map(page => {
        return (
          <a href={'/' + page}>
            {page}
          </a>
        )
      });
  
      return <nav>{navLinks}</nav>;
    }
  }
