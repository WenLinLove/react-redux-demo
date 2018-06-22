const user = (state = [], action) => {
    switch (action.type){
        case 'ADD_NUMM':
            console.log('user')
        return [
                ...state,
                 {
                    name: action.val
                 }
               ]

        default:
            return state
    }
 }

export default user;