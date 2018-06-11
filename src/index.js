import React from 'react';
import ReactDOM from 'react-dom';

//rudex
import { createStore } from 'redux';  
import { Provider, connect } from 'react-redux';  
import registerServiceWorker from './registerServiceWorker';

//路由
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

//组件
import './index.css';
import App from './App';
import Home from './components/home'
import Inndex from './components/index'
import Login from './components/login'


import reducer from './reducers/index'

//store  
let store = createStore(reducer);  

 store.subscribe(() => {
    
    console.log(store.getState()) // 获取更新后最新的state树
    
})


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>{/*你也可以使用BrowserRouter*/}
            <Switch>{/*如果一个组件下有多个child，必须使用Switch*/}
                <Route exact path="/" component={App} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
