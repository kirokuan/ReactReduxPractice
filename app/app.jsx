import React from 'react';
import { connect } from 'react-redux';
import {onView,onUpdate} from '../actions/creators'
import store from '../stores/createStore';
import {Provider} from 'react-redux';
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

@connect(mapStateToProps,mapDispatchToProps)
export class AppBase extends React.Component {
    componentDidMount(){
        this.props.onLoad();
    }
    onUpdate(id){
        this.props.onUpdate(id);
    }
    list(){
        return this.state.data.map(d=>(<li>d.title</li>));
    }
    render() {
        return (
           <div>
                <ul>
                    {this.list()}
                </ul>
            </div>      
        );
    }
}


export class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                <AppBase/>      
            </Provider>
        );
    }
}