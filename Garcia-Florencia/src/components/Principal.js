import data from "./data.json"

import React from "react";
import Seleccion from "./Seleccion";
import Botones from "./Botones"

class Principal extends React.Component {
    //creo el constructor xq voy a necesitar el estado de mi clase con sus respectivos atributos
    constructor(props) {
        super(props);
        this.state = {
            seleccionPrevia: '',
            contador: 0,
            historial: [],
        };
    }
    //puedo llamar al this.state xq inicialice en el constructor explico Joan clase 30
    componentDidUpdate(prevProps, prevState) {
        console.log(2, "El estado o las props del componente han cambiado(y se vuelvea redibujar)")
        console.log(prevProps);
        console.log(prevState);
        if (prevState.contador !== this.state.contador) {
            this.state.historial.push(this.state.seleccionPrevia);
        }
    }
    //el contador va a estar relacionado con el click 
    //y aca me sirve hacer el alert final tambien
    //si yo lo defino de forma expresada como arrow no tengo que usar el bindg(ya q hereda el contexto de esta forma), por eso hice eso
    //y el evento nativo 
    handleClick = (e) => {
        //el target es el objeto que origina el evento(el button en este caso)
        const id = e.target.id;
        if (this.state.contador >= 7) {
            alert('Fin.');
            //la suma dependiendo del de si el indice de mi data es par o impar, le sumo en el contador
        } else if (this.state.seleccionPrevia !== 'A' &&  id === 'A') {
            this.setState({
                contador: this.state.contador + 1,
                seleccionPrevia: 'A',
            });
        } else if (this.state.seleccionPrevia === 'A' && id === 'A' ) {
            this.setState({
                contador: this.state.contador + 2,
            });
        } else if ( this.state.seleccionPrevia === 'A' && id === 'B' ) {
            this.setState({
                contador: this.state.contador + 3,
                seleccionPrevia: 'B',
            });
        } else if (id === 'B') {
            this.setState({
                contador: this.state.contador + 2,
                seleccionPrevia: 'B',
            });
        }
    };

    render() {
        return (
            // <>
            //  <h2 className="historia"> probando </h2> 
            // </>
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                {/* le paso la clase donde esta mi boton relacionado con el handle  y sin () xq si no significa en ejecucion inmediata*/}
                <Botones
                //es el nombre q le asigno para despues usarlo en el componenten Botones
                    handleClick={this.handleClick}
                    //de acuerdo a lo que dice el estado de mi contador, traeme la linea a o la linea b 
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Seleccion
                    seleccionPrevia={this.state.seleccionPrevia}
                    historial={this.state.historial.map(
                        (elemento, indice) => (
                            <li key={indice}>{elemento}</li>
                        ),
                        data[this.state.contador].id
                    )}
                />
            </div>
        )
    }
}

export default Principal;