import { CALL_API } from 'redux-api-middleware';
export const ApiServer="http://127.0.0.1:3000";//config.get("ApiUrl");

export const VIEW = 'VIEW'
export const VIEW_SUCCESS = 'VIEW_SUCCESS'
export const VIEW_FAIL = 'VIEW_FAIL'

export const UPDATE = 'UPDATE'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_FAIL = 'UPDATE_FAIL'

const defaultReq={
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
};

export const onView = () => ({
    [CALL_API]: Object.assign(defaultReq,{
      types: [VIEW, VIEW_SUCCESS,VIEW_FAIL] 
      ,endpoint: ApiServer+'/getEvents',
    })
  });

export const onUpdate = (id) => ({
    [CALL_API]: Object.assign(defaultReq,{
      types: [Update, VIEW_SUCCESS,VIEW_FAIL] 
      ,endpoint: ApiServer+'/updateEvent',
      body: JSON.stringify({id})
    })
  });