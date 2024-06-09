import { useReducer, useRef, useState } from "react"
import todoReducer from "../reducer/todoReducer"

const initialState = {
    isDark: true,
    todos: []
}

const TodoList = () => {
    const [updateId, setUpdateId] = useState(null)

    const [state, dispatch] = useReducer(todoReducer, initialState)
    const refInput = useRef(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        const text = e.target[0].value
        if (updateId) {
            dispatch({ type: "UPDATE", payload: { id: updateId, text } })
            setUpdateId(null)
        } else {
            dispatch({ type: "ADD", payload: text })
        }
        refInput.current.value = ""
        refInput.current.focus()
    }

    return (
        <div className={` vh-100 vw-100 pt-4 ${state.isDark ? "bg-dark text-white" : "bg-light text-dark"}`}>
            <div className="container d-flex flex-column p-5 bg-warning rounded ">
                <button onClick={() => dispatch({ type: "CHANGE_THEME" })}
                    className={`mb-5 ${!state.isDark ? "bg-dark text-white" : "bg-light text-dark"}`}>{state.isDark ? "Try Light Mode" : "Try Dark Mode"}</button>
                <h2 className="text-center">TODO LİST</h2>
               
                <form onSubmit={handleSubmit} className="d-flex gap-2 align-items-center my-5">
                    <input ref={refInput} className="form-control shadow" type="text" />
                    <button className="btn btn-success shadow">{updateId ? "Güncelle" : "Ekle"}</button>
                </form>

                <ul className="list-group gap-1">
                    {state.todos.map((todo) => (
                        <li className={`list-group-item bg-secondary bg-gradient text-light bg-opacity-50 hstack p-0 ps-2 ${updateId === todo.id ? "border border-danger" : ""}`} key={todo.id}>
                            <span >{todo.text}</span>
                            <button onClick={(e) => {
                                console.log(e)
                                setUpdateId(todo.id);
                                refInput.current.value = todo.text;
                                refInput.current.focus()
                            }
                            }
                                className="btn btn-secondary ms-auto">Düzenle</button>
                            <button onClick={() => {setUpdateId(null); dispatch({ type: "DEL", payload: todo.id })}} className="btn btn-danger ">Sil</button>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )

}
export default TodoList;
