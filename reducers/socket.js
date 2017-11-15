export default (state = {data:[]}, action)=>
{
    console.log(action);
    switch(action.type){
      case 'event':
        console.log(state.data);
        state.data.push(action.data);
        return {...state};
      default:
        return state;
    }
}
