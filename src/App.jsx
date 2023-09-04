import { useState } from "react";

function App(){

    const [num01, setNum01] = useState(0);
    const [num02, setNum02] = useState(0);
    
    
    // funções (contas)
    function adicao(){
        let conta = num01 + num02;
        alert(`${num01} + ${num02} = ${conta}`);
    }
    function sub(){
        let conta = num01 - num02;
        alert(`${num01} - ${num02} = ${conta}`);
    }
    function mult(){
        let conta = num01 * num02;
        alert(`${num01} X ${num02} = ${conta}`);
    }
    function div(){
        let conta = num01 / num02;
        alert(`${num01} / ${num02} = ${conta}`);
    }
    return(
        <div className="conte">
            <h1>Calculadora Simples</h1>

            <input type="number" placeholder="Digite um número" onChange={e => setNum01(parseFloat(e.target.value))} />
            <input type="number" placeholder="Digite outro número" onChange={e => setNum02(parseFloat(e.target.value))}/>
            <br /><br />
           <div className="btns">
                <button onClick={adicao}>Adição</button> <br />
                <button onClick={sub}>Subtração</button> <br />
                <button onClick={mult}>Multiplicação</button> <br />
                <button onClick={div}>Divisão</button>
           </div>
               
            <div className="res"></div>
            
        </div>
    );

}
export default App;