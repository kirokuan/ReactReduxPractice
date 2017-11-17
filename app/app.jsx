import React from 'react';
import { connect } from 'react-redux';
import {onView,onUpdate,onViewClick,onChangeCat} from '../actions/creators'
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
      },
      onChangeCat:(id,cat) => {
        dispatch(onChangeCat(id,cat));
      }
    }
}
const cats=["cat","dog","forest","people","exam","building"];

@connect(mapStateToProps,mapDispatchToProps)
export class AppBase extends React.Component {
    componentWillMount(){
        this.setState({data:[],item:{}});
    }
    componentDidMount(){
        this.props.onLoad();
    }
    onPress(event_id){
        this.props.onUpdate(event_id);
    }
    onItemSelected(item){
//        console.log(id);
        this.setState({Title:item.event_id,item:item});
    }
    onChangeCat(id,cat){
        let item=this.state.item;
        item.prediction=cat;
        this.setState({item});
        this.props.onChangeCat(id,cat);
    }
    getTabs(id,type){
        let i=0;
        return cats.map(c=>(   <li key={i++} className={type===c?"active":""} onClick={this.onChangeCat.bind(this,id,c)}>
            <a href="#">{c}</a></li>));
    }
    list(){
        return (this.props.data?this.props.data:[])
        .sort((x,y)=>{ return x.starting_timestamp-y.starting_timestamp})
        .map(d=>(
                     <li className="list-group-item"  data-toggle="modal" data-target="#myModal" key={d.event_id} onClick={this.onItemSelected.bind(this,d)}>
                       {d.prediction}
                       <br/>
                       <span className="smaller">time : {d.starting_timestamp}</span>
                      </li>
                ), this);
    }
    render() {
        return (
           <div>
                <ul>
                    {this.list()}
                </ul>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{this.state.Title}</h4>
                        </div>
                        <div className="modal-body">
                            <p>Camera Name:{this.state.item.camera_id}</p>
                            <p>Time:{this.state.item.starting_timestamp}</p>
                            <p>Event:{this.state.item.event_id}</p>
                            <img  src={this.state.item.thumbnail} className='icon'/>
                        </div>
                        <div className="modal-footer">
                            <div className="container">
                                <ul className="nav nav-pills">
                                    {this.getTabs(this.state.item.event_id,this.state.item.prediction)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
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