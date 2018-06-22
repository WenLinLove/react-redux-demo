const home = (state=[], action) => {
    switch (action.type){
        case 'ADD_NUM':
           console.log('login')
            return [
                  state,
                  ...action.val
            ]

        case 'MINUS_NUM':

                state.splice(action.index,1);

                return state.map(function(index, elem) {

                        return index;

                    });

        case 'WOGAIBIAN_DE':

                return {
                    name: action.name
                }
        case 'LOGIN':

              return  action.data
                
        case 'ERR':
              console.log('异步请求失败');
              return action.e  

        default:
            return state
    }
 }

export default home;