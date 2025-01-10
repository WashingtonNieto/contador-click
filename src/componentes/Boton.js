import React from 'react';
import '../css/boton.css';


// Modelo componente de clases
class Boton extends React.Component{
  render(){
    return(
      <button 
        className={this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
        onClick={this.props.manejarClic}
      >
  
        {this.props.texto}
      </button>
    );
  }
}

// Modelo componente funcional

// function Boton({ texto, esBotonDeClic, manejarClic }){
//   return(
//     <button 
//       className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
//       onClick={manejarClic}
//     >

//       {texto}
//     </button>
//   );

// }

export default Boton;