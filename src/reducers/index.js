//reducer
 
function counter(state=[], action){
    switch (action.type){
        case 'ADD_NUM':
            return [ 
                ...state,  //... 扩展运算符  相当
                {  
                    vals: action.val
                }  
            ]
        case 'MINUS_NUM':
                state.splice(action.index, 1);
                return state.map((todo, index) => {  
                    return todo
                }); 


        default:
            return state
    }
 }
 
export default counter