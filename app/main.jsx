import React from 'react';
//var TestOne = require('./TestOne.jsx');
//import TestTwo from  './TestTwo.jsx';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {onView,onUpdate} from '../actions/creators'
function mapStateToProps(state) {
   return {
      ...state.default
   }
}

function mapDispatchToProps(dispatch) {
    return {
      
      onLoad:() => {
        dispatch(onView());
      },
      onUpdate:(id) => {
        dispatch(onUpdate(id));
      }
    }
}

@connect(mapDispatchToProps,mapStateToProps)
class Main extends React.Component {
    componentDidMount(){
        this.props.onLoad();
    }
    render() {
        return (
            <div>
                
            </div>      
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("main"));
