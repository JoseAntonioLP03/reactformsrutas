const { Component } = require("react");

class Cine extends Component{
    render () {
        return (<div>
            <h1 style={{color:"blue"}}>
                Esto es cine...
            </h1>
            <img src="https://cdn-icons-png.flaticon.com/512/3875/3875391.png" 
            style={{width:"100px",height:"100px"}} 
            alt="cine"></img>
        </div>)
    }
}

export default Cine;