const { Component } = require("react");

class Home extends Component{
    render () {
        return (<div>
            <h1>Estoy en home</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" 
            style={{width:"100px",height:"100px"}} 
            alt="casita"></img>
        </div>)
    }
}

export default Home;