import React, { Component } from 'react'

export default class FormSimple extends Component {
    // Necesitamos crear una variable de referencia para cada objeto de form
    cajaNombre = React.createRef();

    peticionFormulario = (event) => {
        //DETENEMOS EL SUBMIT DEL FORMULARIO (IMPORTANTE)
        event.preventDefault();
        console.log("Petición lista!!!")
        //Recuperar el valor de un objeto React:
        let nombre = this.cajaNombre.current.value;
        console.log("nombre recibido: "+ nombre)
        this.setState({
            nombre:nombre
        })
    }
    state = {
        nombre: ""
    }
    render() {
        return (<div>
            <h1>Formulario Simple React</h1> 
            <h2 style={{color:"darkslateblue"}}>{this.state.nombre}</h2>
            <form onSubmit={this.peticionFormulario}>
                <label>Nombre: </label>
                <input type='text' ref={this.cajaNombre}/>
                <button>Realizar petición</button>
                </form>
        </div>
        )
        }
}
