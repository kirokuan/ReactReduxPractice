import { combineReducers} from 'redux';
import { UPDATE,UPDATE_FAIL,UPDATE_SUCCESS,VIEW,VIEW_SUCCESS,VIEW_FAIL,CLICKVIEW} 
from '../actions/creators'
const INITIAL_STATE={};
export const main=(state=INITIAL_STATE, action)=> {
    switch(action.type) 
    {
        case CLICKVIEW:
            state.pendingChange=state.pendingChange?state.pendingChange:[];
            const pendingItem=state.data.filter((x)=>{
                return x.event_id===action.id;});
            state.data=state.data.filter((x)=>{
                    return x.event_id!=action.id;
                });
            if(pendingItem.length>0)
                state.pendingChange.push(pendingItem[0]);
            return state;
        case UPDATE_FAIL:
            state.data=[...state.data,...state.pendingChange];
            state.pendingChange=[];
            return {...state}
        
        case UPDATE_SUCCESS:
             state.pendingChange=[];
            return state;
        case VIEW_SUCCESS:
            return {...state,data:action.payload.data}
        default:
            return {...state};
    }
}

export default combineReducers({
  default : main
});
