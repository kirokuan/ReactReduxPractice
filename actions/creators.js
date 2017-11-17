import { CALL_API } from 'redux-api-middleware';
export const ApiServer="http://127.0.0.1:3000";//config.get("ApiUrl");
export const CLICKVIEW = 'VIEWCLICK'
export const VIEW = 'VIEW'
export const VIEW_SUCCESS = 'VIEW_SUCCESS'
export const VIEW_FAIL = 'VIEW_FAIL'

export const UPDATE = 'UPDATE'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_FAIL = 'UPDATE_FAIL'


export const ChangeCat = 'ChangeCat'
export const ChangeCat_SUCCESS = 'ChangeCat_SUCCESS'
export const ChangeCat_FAIL = 'ChangeCat_FAIL'

const defaultReq={
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
};

export const onView = () => ({
    [CALL_API]: Object.assign(defaultReq,{
      types: [VIEW, VIEW_SUCCESS,VIEW_FAIL] 
      ,endpoint: ApiServer+'/new-alarm-events',
    })
  });

export const onUpdate = (id) => ({
    [CALL_API]: Object.assign(defaultReq,{
      types: [UPDATE, UPDATE_SUCCESS,UPDATE_FAIL] 
      ,endpoint: ApiServer+'/event-viewed/'+id,
      body: JSON.stringify({id})
    })
  });

export const onChangeCat = (id) => ({
    [CALL_API]: Object.assign(defaultReq,{
      types: [ChangeCat, ChangeCat_SUCCESS,ChangeCat_FAIL] 
      ,endpoint: ApiServer+'/event-update/'+id,
      body: JSON.stringify({id})
    })
  });
  
export const onViewClick = (id) => ({
    type:CLICKVIEW
    ,id:id
  });