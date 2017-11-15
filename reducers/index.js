import { combineReducers} from 'redux';
import { UPDATE,UPDATE_FAIL,UPDATE_SUCCESS,VIEW,VIEW_SUCCESS,VIEW_FAIL,CLICKVIEW} 
from '../actions/creators'
const INITIAL_STATE={};
export const main=(state=INITIAL_STATE, action)=> {
    switch(action.type) 
    {
        case CLICKVIEW:
            state.data=state.data.filter((x)=>{
                    return x.event_id!=action.id;
                });
            
            if(!state.pendingChange) 
              return {...state,pendingChange:[action.id]}
            else{
                state.pendingChange.push(action.id);
              
            }
            return state;
        case UPDATE:
            console.log(action);
            return {...state}
        case UPDATE_SUCCESS:
             state.pendingChange=[];
             return state;
        case VIEW_SUCCESS:
            return {...state,data:action.payload.data}
        default:
            return state;
    }
}

export default combineReducers({
  default : main
});
