const todoReducer = (state, action) => {
    console.log("action >> ", action)
    switch (action.type){
        case "ADD":
            const newTodo = {
                id: new Date().getTime(), 
                text: action.payload
            }
            return {...state, todos: state.todos.concat(newTodo)}
        
        case "DEL":
            const filtered = state.todos.filter((item) => item.id !== action.payload)
            return {...state, todos: filtered}
        
        case "UPDATE":
            const updated = state.todos.map((item) => item.id === action.payload.id ? action.payload : item )
            return {...state, todos: updated}        
        
        case "CHANGE_THEME":
            return {...state, isDark: !state.isDark}
        
        default:
            return state
    }
}

export default todoReducer
