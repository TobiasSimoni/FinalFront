export const reducer = (state,action) => {
    switch(action.type)
    {
        case 'ADD_FAVS':
            return {...state,favs:[...state.favs,action.payload]}

      

       
    }
}