import React from "react"; 
import ReactDOM from "react-dom";
import App from "./App";
import './App.css';


class Receita extends React.Component{
    render(){
        return(
            <div>
                <App />
            </div>
        );
    }
}
ReactDOM.render(<Receita />, document.getElementById('root'))