import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();
    generarTabla = (event) =>{
        event.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            aux.push(resultado);
        }
        this.setState({
            resultados: aux,
        })
    }
    state={
        resultados : [],
    }
    
    render() {
        return (<div>
            <h1>Tabla de Multiplicar</h1> 
            <form onSubmit={this.generarTabla}>
                <label>Introduzca número</label>
                <input type='number' ref={this.cajaNumero}></input>
                <button>Crear Tabla</button>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.resultados.map((resultado,index) => {
                                return(<tr key={index}>
                                    <td>{this.cajaNumero.current.value} * {index+1}</td>
                                    <td>{resultado}</td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </form>
        </div>
        )
        }
}
