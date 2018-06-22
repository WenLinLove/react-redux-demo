import React, { Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom'
import { Provider, connect } from 'react-redux';  
import {addNum, minuxNum} from '../action/index'
import {bindActionCreators} from 'redux';

class Home extends Component {


  back() {

     this.props.history.push('/')

  }


  render() {
      let tha = this;
    return (
      <div>
           <p>{this.props.state.name}</p>
            <ul>
                  {
                      this.props.state.data.map( (item, index) => {
                        return(
                          <li onClick={ ()=> tha.props.minuxNum(index) } key={index}>{item.id}</li>
                        )
                      })
                    }
            </ul>
            <button onClick={ ()=> this.back()}>返回</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
 