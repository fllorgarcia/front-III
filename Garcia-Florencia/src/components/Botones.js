import React from "react";

class Eleccion extends React.Component{
    render(){
        return(
            //le doy las clases css 
            <div className="opciones">
            <div className="opcion">
                {/* //creo el boton, y le asigno el css,  las props me las pasa el padre pero yo le mando el evento a la clase principal que va a tener mi handleClick  */}
                <button id="A" className="botones" onClick={this.props.handleClick}>
                   {/* nombre de mi boton   */} A
                </button>
                <h2>{this.props.opcionA}</h2>
            </div>
            <div className="opcion">
                <button id="B" className="botones" onClick={this.props.handleClick}>
                    B
                </button>
                <h2>{this.props.opcionB}</h2>
            </div>
        </div>
        )
    }
}

export default Eleccion;