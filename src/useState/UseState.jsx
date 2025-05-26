import { useState } from "react"

export const UseState = () => {
    const [contador, setContador] = useState(0);
  return (
    <>
    <h1>{contador}</h1>
    <button onClick={() => setContador ( contador + 100 )}>
        Aumentar
    </button>
    </>

    
  )
}


