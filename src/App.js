import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Provider,
  connect
} from 'react-redux';
import * as fun from './action/index';


import {
  bindActionCreators
} from 'redux';
import {
  Link
} from 'react-router-dom'

import axios from './baseurl'



class App extends React.Component {

  //constructor 参数有两个 props context  可以获取到父组件传下来的props context  一定要写super()函数  
  constructor(props) {
    // 只要组件存在 constructor 就必须要写super 否则this指向会错误
    super(props);
    
    this.state = {
      val: []
    };


  }


//组件将要挂在执行
// 一般使用在服务器渲染的时候使用
//不推荐这里请求 ajax   如果数据是空的  页面空白

  componentWillMount() {


  }


//组件渲染完成
// 组件第一次渲染完成 此时dom 已经生成 可以在这里请求ajax 返回数据  setState() 组件会重新渲染

  componentDidMount() {

      let _this = this;

        // axios({
        //      method: 'get',
        //      url:'https://www.lz365golf.com/admin/restful/menu/menu',
        //      headers:{
        //         'X-AUTH-TOKEN' : 'adminuserfe61cf7c7b7c4d32bb69dc8cde8fc38b'
        //      }
        // }).then(function (response) {
        //     console.log(response);

        //     _this.state.val = response.data.body.child;


        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        // axios.get('/demo').then(function (response) {

        //     console.log(response);
          
        //   })
        //   .catch(function (error) {

        //     console.log(error);

        //   });
 




          
  }

//接受到父组件的props 需要重新渲染组价的时候用的比较多

  componentWillReceiveProps (nextProps) {

  }

// 唯一 用于控制组件重新渲染生命周期的  return false 阻止组件更新
  // shouldComponentUpdate(nextProps,nextState) {

  //     //return false

  // }


// 返回true 以后，组件进入重新渲染的流程 
  componentWillUpdate (nextProps,nextState) {

  }

 // 在组件更新完数据  会进入这个函数   作用是拿到更新之前的 props和state 
  componentDidUpdate(prevProps,prevState) {

  }
  //   addNum(){
  //     let currentNum=this.state.num
  //     this.setState({num:currentNum+1})
  // }
  // minusNum(){
  //     let currentNum=this.state.num
  //     this.setState({num:currentNum-1})
  // }

 // 经常会用到的一个生命周期   
 //1. 清除定时器  setTimeout setInterval 
 //2. 移除所有组件中的监听 removeEventListener 
 //3. 也许你会经常 遇到这个warning   
  componentWillUnmount (){

  }




// js 对象动态添加  js对象动态添加
//总结，给对象动态添加变量属性的方法如下：
//　obj[变量]=变量值; 对象动态添加属性
//let data = {};
//data[event.target.name] = event.target.value


  inclick(event) {
    let name;
    name = event.target.name;
    let data = {};
    data[event.target.name] = event.target.value
    this.setState(data)
    console.log(this.state)
  }

  // 1 react 的this 指向问题  解决方案  箭头函数 （）=》 this.onclick() 
  // 2 this.inclick = this.inclick.bind(this)
  // 3  this.inclick.bind(this)

  
  //render 函数会插入 jsx 生成dom结构 react会生成一份虚拟的dom树
  render() {
    const { addNum1 } = this.props;
    return (
          <div>
              <h1>num: {this.props.state.name}</h1>
              <input type="text" ref="myInput" name="my" /> <br/>
              <input type="text" ref="myInput1" name="my1" /> <br/>
              <Link to="/home">home</Link><br />
              <button onClick={ ()=> addNum1(this.refs.myInput.value) }> 添加事项</button>
              <button onClick={ ()=> this.props.myGname(this.state.val) }> 添加改变 </button>
          </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return (
 //把这个方法传入下一个组件 使用此函数
    bindActionCreators(fun, dispatch)
  )

}


//export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)