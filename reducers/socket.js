export default (state = {}, action)=>
{
    console.log(action);
    switch(action.type){
      case 'message':
        return Object.assign({}, {message:action.data});
      default:
        return state;
    }
}
