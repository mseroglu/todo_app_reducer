import { useReducer } from "react"
import counterReducer from "../reducer/counterReducer"

const initialState = 0

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    
  return (
    <div className="d-flex gap-4 align-items-center justify-content-center p-3 border-bottom border-info">
      <button onClick={() => dispatch("SIFIRLA")} className="btn btn-secondary">Sıfırla</button>
      <button onClick={() => dispatch("AZALT")} className="btn btn-warning">Azalt</button>
      <span className="fs-1 lead">{state}</span>
      <button onClick={() => dispatch("ARTTIR")} className="btn btn-primary">Arttır</button>
    </div>
  )
}

export default Counter
