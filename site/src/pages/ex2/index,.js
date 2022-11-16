import { useState } from "react";

export default function Test(){

  
    const [array, setArray] = useState([])
    const [numero, setNumero] = useState(0)
    const [test, setTest] = useState([])

    function add(){
    
    let arr = [...array,numero]
       console.log(arr)
       
        setArray(arr)
    }

    // function reverse(){
    //     let arr = []
    //     let arrayaa = []
    //     let numero = array.length
    //     let teste = array[array.length]
    //     for(let i = array.length; i >= array[0]; i--){
         
    //      }
    //         arr = [...arr, teste-- ]
            
    //     }
    //     let a = array[0]
    //     console.log(teste)
    //     setArray(arr)
    // }


    function inverter(){
        let atual = []
        let cont = 0
        for( let i = array.length-1 ; i >= 0; i-- ){
            atual[cont] = array[i];
            cont++
        }
        setArray(atual)
    }
    return(
        <main>
            <h1>bla bla</h1>
            <div>
                <input type='number' value={numero} onChange={e => setNumero(e.target.value)}></input>
                <button onClick={add}>ADD</button>
                <button onClick={inverter}>Reverter</button>
            </div>
            {array.map(item =>
                <div>
                    {item}
                </div>
                )}

                

           
            
        </main>
    );

    //setArray = [...array, numero]
}