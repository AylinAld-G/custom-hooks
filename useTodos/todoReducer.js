
export const todoReducer = (initialState=[], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload);
        
        case '[TODO] Toggle Todo':
            //regresamos un nuevo arreglo gracias al map.
            return initialState.map( todo => {   // Por cada uno de los elementos del arreglo vamos a tener un todo
                if( todo.id === action.payload){   //id
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
    
        default:
            return initialState;
    }
}