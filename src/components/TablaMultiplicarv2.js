import React, { Component } from 'react'

export default class TablaMultiplicarv2 extends Component {
    selectNumero = React.createRef();
    
    generarTabla = (event) =>{
        event.preventDefault();
        let numero = parseInt(this.selectNumero.current.value);
        let aux = [];
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            aux.push(resultado);
        }
        this.setState({
            resultados: aux,
        })
    }

    generarRandoms = () =>{
        for (var i = 1; i<=5; i++){
            var random = parseInt(Math.random() * 20) +1;
            this.arrayAleatorios.push(random)
        }
    }

    state={
        resultados : [],
    }
    arrayAleatorios = [];
    render() {
        return (<div>
            <h1 style={{color:"red"}}>Tabla de Multiplicar V2</h1>
            {this.generarRandoms()}
            <form>
                <label>Seleccione número</label>
                <select ref={this.selectNumero}>
                    {
                        this.arrayAleatorios.map((numero,index) => {
                            return(<option key={index}>{numero}</option>)
                        })
                    }
                </select>
                <button onClick={this.generarTabla}>Crear Tabla</button>
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
                                    <td>{this.selectNumero.current.value} * {index+1}</td>
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
