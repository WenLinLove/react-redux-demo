import React, { Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom'
import { Provider, connect } from 'react-redux';  
import {addNum, minuxNum} from '../action/index'
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

class Home extends Component {
    
  constructor(props) {
     super(props)

    this.state = {
      tt: [{
          name: 'hah1'
        },
        {
          num: 2,
          name: 'hah2'
        },
        {
          num: 2,
          name: 'hah2'
        },
        {
          name: 'hah1'
        }
      ]
    }
}

  cli(index) {

    console.log(index);

  }


  render() {

    return (
      <div>
           {
                this.state.tt.map( (item, index) => {
                  if(item.num == 2){
                    return(
                      <li onClick={ ()=> this.cli(index) } key={index}>{item.name}</li>
                    )
                  }else{

                    return (
                      <p>判断下</p>
                    )

                  }

                })
            }

            <p>{this.props.tt.age}</p>
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

Home.propTypes = {
  tt: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
