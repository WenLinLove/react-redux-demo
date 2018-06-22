//redux 合并 reducer 处理函数
import { combineReducers } from 'redux';

import user from './user';
import home from './home';

const rootReducer = combineReducers({
    user,
    home
})

export default rootReducer;