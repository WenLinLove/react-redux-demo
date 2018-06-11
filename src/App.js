import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux';  
import {addNum, minuxNum} from './action/index'
import {bindActionCreators} from 'redux';
import Home from './components/home'


class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        val: ''
      }

    
  }

//   addNum(){
//     let currentNum=this.state.num
//     this.setState({num:currentNum+1})
// }
// minusNum(){
//     let currentNum=this.state.num
//     this.setState({num:currentNum-1})
// }

    inclick(){

        this.setState({
          val: this.refs.myInput.value
      })

    }

// 1 react 的this 指向问题  解决方案  箭头函数 （）=》 this.onclick() 
// 2 this.inclick = this.inclick.bind(this)
// 3  this.inclick.bind(this)

    tiao() {

       this.props.history.push('/home')

    }


  render(){

      var tt = {
        name: "tt",
        age: 12
      };

      return(
          <div>
              <h1>num: </h1>
              <input type="text" ref="myInput" onInput={ ()=> this.inclick() }/> <br/>
              <button onClick={ ()=> this.props.addNum(this.state.val) }>添加事项</button>
              <button onClick={ ()=> this.tiao() }>跳转</button> 
              <ul>
                {

                    this.props.state.map( (item, index) => {
                      return(
                        <li onClick={ ()=> this.props.minuxNum(index) } key={index}>{item.vals}</li>
                      )
                    })
                  }
         
              </ul>
              <hr/>
              <Home tt={tt}></Home>  
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
     state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return (
    bindActionCreators({ addNum, minuxNum}, dispatch)
  )

}

export default connect(mapStateToProps,mapDispatchToProps)(App)