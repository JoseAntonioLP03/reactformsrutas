const { Component } = require("react");

class Musica extends Component{
    render () {
        return (<div>
            <h1 style={{color:"darkmagenta"}}>
                Musica!!!
            </h1>
            <img src="https://www.freeiconspng.com/uploads/music-note-icon-33.png" 
            style={{width:"100px",height:"100px"}} 
            alt="musica"></img>
        </div>)
    }
}

export default Musica;