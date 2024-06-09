

const counterReducer = (state, action) => {
    switch (action){
        case "ARTTIR":
            return state + 1;
        
        case "AZALT":
            return state - 1;
        
        case "SIFIRLA":
            return 0;
        
        default:
            return state;
    }
  

}

export default counterReducer;
