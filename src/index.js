import React from 'react';
import ReactDOM from 'react-dom';

//rudex
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { Provider, connect } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

//路由
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//组件
import './index.css';
import App from './App';
import Home from './components/home'
import inD from './components/index'
import Login from './components/login'

//redux
import reducer from './reducers/index'

//sage
import fetchUser from './sage/index'


const sagaMiddleware = createSagaMiddleware()


//store  
let store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    
);

sagaMiddleware.run(fetchUser)

store.subscribe(() => {

	console.log(store.getState()) // 获取更新后最新的state树

})


ReactDOM.render(
	<Provider store={store}>
			<HashRouter>
            <Switch>{/*如果一个组件下有多个child，必须使用Switch*/}
                <Route exact path="/" component={App} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
				<Route path="/in" component={inD} />
            </Switch>
           </HashRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();