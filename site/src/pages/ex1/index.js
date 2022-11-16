import { useState } from "react"

export default function Figurinhas (){
    const [p1,setP1] = useState(0)
    const [p2,setP2] = useState(0)
    const [resultado, setResultado] = useState([])
    const [cartas1, setCartas1] = useState([])
    const [cartas2, setCartas2] = useState([])


    function trocas(){
        let soma = 0
        let arr= [...cartas1, ...cartas2]
        console.log(arr)

        for(let i = 0; i < arr.length; i++){
            let number = arr[i]
            console.log(number)
                for(let cont = i+1; cont < arr.length; cont++){
                    if(number !== arr[cont]){ 
                        setResultado(soma)
                        break

                    }
                    else if(number === arr[cont]){
                        soma++
                        setResultado(soma)
                    }
                    
                    
                }
               
        }
        
    }

    function cartasp1(){
        let arrayp1 = [...cartas1, p1]

        setCartas1(arrayp1)
    }
    function cartasp2(){
        let arrayp2 = [...cartas2, p2]

        setCartas2(arrayp2)
    }

    return(
        <main>
            <div>
            <div>
                <input type="number" value={p1} onChange={e => setP1(e.target.value)}/> <button onClick={cartasp1}>Pessoa 1</button>
                {cartas1.map(item =>
                    <div>
                        {item}
                    </div>
                )}
            </div>
            <div>
                <input type="number" value={p2} onChange={e => setP2(e.target.value)}/> <button onClick={cartasp2}>Pessoa 2</button>
                {cartas2.map(item =>
                    <div>
                        {item}
                    </div>
                )}
            </div>

            <button onClick={trocas}>CLICK</button>
            {`Eles vao poder trocar ${resultado} vezes`}
            </div>


            {/* {resultado.map(item =>{
                <div>
                    {item}
                </div>
            })} */}
        </main>
    )
}