// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import React from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


export default function App () {

  //todo --- declarative declaration:
  // return <h1 className="firt">hello Ai</h1>

  //todo --- imperative declaration:
  //  return React.createElement('h1',{
  //   id: 'first',
  //   classs : 'second'
  //  },'hello world')

  return <div className="container d-flex justify-content-center align-item-center my-5 ">
    <CadComponent/>
    <CadComponent/>
    <CadComponent/>
    <CadComponent/>
    <CadComponent/>
    <CadComponent/>
    <CadComponent/>
    <CadComponent/>
    <CadComponent/>
    <CadComponent/>
    <CadComponent/>
  </div>

}

const CadComponent = () => {
  return (<div className="card p-4 mt-2 bg-dark d-inline w-75 cardcontainer">
    <h1 className="card-title text-light">Stranger Things</h1>
    <img src="https://wallpaper.forfun.com/fetch/7b/7b429bd4c613702027a342639c88a88c.jpeg" alt="" className="card-img img-thumbnail" />
    <h3 className="ratting card-text text-light mt-4">Rate : 7.2</h3>
    <p className="card-text text-light mt-2">
      Stranger Things is a science fiction drama television series created by Alexander Hamilton and David Lynch. It premiered on HBO on October 19, 2016, and aired for 12 seasons.
    </p>
    <button className="btn btn-sm btn-light float-right mr-3">Buy</button>
  </div>);
}
