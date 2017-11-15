import React from 'react';
import { connect } from 'react-redux';
import {onView,onUpdate,onViewClick} from '../actions/creators'
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
        dispatch(onViewClick(id));
        dispatch(onUpdate(id));
      }
    }
}

@connect(mapStateToProps,mapDispatchToProps)
export class AppBase extends React.Component {
    componentWillMount(){
        this.setState({data:[]});
    }
    componentDidMount(){
        this.props.onLoad();
    }
    onPress(event_id){
        this.props.onUpdate(event_id);
    }
    list(){
        return (this.props.data?this.props.data:[])
        .sort((x,y)=>{ return x.starting_timestamp-y.starting_timestamp})
        .map(d=>(<li key={d.event_id}>
                    <a href="#" onClick={()=>this.onPress(d.event_id)}>{d.prediction}</a>
                    <br/>time : {d.starting_timestamp}
                </li>));
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