import React, {useState} from "react";
import "./App.css"

function App(){

  const [count, setCount] = useState(0)
  // super setSuper
  // icetea setIcetea
  return(
    <div className="App">
      <header>
        <h1>Counter app using State/hooks</h1>
      </header>
      <h2>Current value od count is {count}</h2>
      <button onClick={()=> setCount(0)}>Reset Counter</button>
      <button onClick={()=> count > 9 ? 0 : setCount(count + 1)}>Increase Counter</button>
      <button onClick={()=> count < 1 ? 0 : setCount(count - 1)}>Decrease Counter</button>


    </div>
  )
}

export default App;
