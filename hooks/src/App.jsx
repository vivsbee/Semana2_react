import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



function App() {

  let count1 = 0; //variable de JavaScript
  const [count2, setCount2] = useState(0) //variable de estado

  function handleCount () {
    // count1 = count + 1
    // count1 = count1++
    count1++
    console.log('Count: ' + count1)
    setCount2(count2 + 1)
  }

  return (
    <>
      <h1>Contador Reactivo con useState y con useEffect</h1>
      <p>Este es una práctica guiada, para entender los conceptos y usos de los hooks useState y useEffect a partir de controlar el valor de un contador.
        <br />
        -   Qué son los estados locales (como actualizamos contenido para que se muestre, podria decirse estatico o quieto)      
        <br />
        -   y Que son los efectos (acciones que se ejecutan cuando el valor 'state' cambia, que no son estaticos, q cambian nojoda AJAJJSSJAJK)
      </p>

      <section>
        <h2>Contador JS: {count1} </h2>
        
        <h2>Contenedor con estado: {count2} </h2>

        <button onClick={handleCount}>Incrementar</button>
      </section>

    </>
  )
}

export default App
