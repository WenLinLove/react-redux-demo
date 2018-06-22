import { delay } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LOGIN, ERR } from '../action/index'
import axios from 'axios'

function* fetchUser(action) {
    try {
        //成功
        console.log('加载中...')
        yield delay(2000);
       const data = yield call(axios.get, 'https://5b1e22a14d4fc00014b07d60.mockapi.io/demo');
       yield put({type: LOGIN, data});
    } catch (e) {
        //失败
       yield put({type: ERR, e});
    }
 }

 function* mySaga() {
   //takeEvery会在接到相应的action之后不断产生新的副作用

   yield takeEvery("ADD_NUM", fetchUser);
 }
 

 function* mySaga() {
   //takeLatest在相同的action被触发多次的时候，之前的副作用如果没有执行完，会被取消掉，只有最后一次action触发的副作用可以执行完
   yield takeLatest("ADD_NUM", fetchUser);
 }

 export default mySaga;