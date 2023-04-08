import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  {document.title=`new pages ${count} `}
  
  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>click {count}</button>
    </div>
  )
}

export default App