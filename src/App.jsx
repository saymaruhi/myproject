import Test from "./test1.jsx";
import { useState } from "react";
import User from "./toogle.jsx";


function App() {

  const[display,setdisplay] = useState(true)
  return (
    <div>
      <h1>GitHub</h1>
      <H2>Story 1</H2>

      <h2>Toogle in React</h2>
      {
        display? <h1>Sayma Ruhi</h1>:null
      }

      <button id="toogle" onClick={()=>setdisplay(!display)}>Toogle</button>

      {
         display? <User />:null
      }


      
      <h2>Practicing Github. Im am in App.jsx</h2>
      <Test />
    </div>
  )
}

export default App;
  