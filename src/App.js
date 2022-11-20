import { useState } from "react";
import Game from "./components/Game";
import './style.scss'

function App() {
  const [row, setRow] = useState(0)
  const [column, setColumn] = useState(0)
  const [size, setSize] = useState(true)
  const [start,setStart] = useState(false)

  const handleRowChange = (e) => {
    setRow(e.target.value)
  }
  const handleColumnChange = (e) => {
    setColumn(e.target.value)
  }

  const handleSubmit = (e) => {
    if (row > 2 && column > 2) {
      setSize(false)
      setStart(true)
      e.preventDefault();
    }
    else {
      return (
        alert('The Martians feel like you underestimated the size of their country.')
      )
    }
    
  }

  return (
    <div className="App">
      {size && <form className="info">
        <h1> Welcome To Mars terrain </h1>
        <label>Row</label>
        <input type='number' onChange={handleRowChange} value={row} />
        <label>Colum</label>
        <input type='number' onChange={handleColumnChange} value={column} />
        <button onClick={handleSubmit} > Start Journey</button>
      </form>}
      
      {start && <Game row={row} column={column} />}

    </div>
  );
}

export default App;
