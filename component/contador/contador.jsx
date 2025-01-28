import React    from 'react';
import { useState } from 'react';
import NavBar from "../navBar/navBar"


const Contador = ()=>{

    const [contador,setcontador] = useState(0);

    return(
        <div>
            <NavBar />
            <h1>Contador</h1>
            <h2>{contador}</h2>
            <button onClick={()=>setcontador(contador + 1)}>Incrementar</button>
            <button onClick={() =>setcontador(contador - 1)}>Decrementar</button>
        </div>
    )

};


export default Contador;