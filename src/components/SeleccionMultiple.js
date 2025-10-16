import React, { Component } from 'react'

export default class SeleccionMultiple extends Component{
    selectMultiple = React.createRef();

    mostrarSeleccionados = (event) => {
        event.preventDefault();
        let options = this.selectMultiple.current.options;
        var data = "";
        //Debemos recorrer todas las opciones
        //Dentro de cada option individual , tenemos un atributo llamado
        // Selected para saber si el elemento esta seleccionado
        for (var option of options) {
            if(option.selected){
                console.log(option.value);
                data += option.value + ","
            }
        }
        this.setState({
            seleccionados : data
        })
    }

    state = {
        seleccionados : ""
    }
    render(){
        return(
            <div>
                <h1>Seleccion multiple</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label>Seleccione varios elementos</label>
                    <select size="7" multiple ref={this.selectMultiple}>
                        <option>Elemento 1</option>
                        <option>Elemento 2</option>
                        <option>Elemento 3</option>
                        <option>Elemento 4</option>
                        <option>Elemento 5</option>
                        <option>Elemento 6</option>
                        <option>Elemento 7</option>
                    </select>
                    <button>Mostrar seleccionados</button>
                <h3 style={{color:"darkviolet"}}>
                    {this.state.seleccionados}
                </h3>
                </form>
            </div>
        )
    }
}