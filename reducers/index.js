import { combineReducers} from 'redux';
const INITIAL_STATE={};
const main=(state=INITIAL_STATE, action)=> {
    switch(action.type) 
    {
        default:
        return state;
    }
}

export default combineReducers({
  default : main
});
