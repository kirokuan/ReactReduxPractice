import {onView,onUpdate } from '../actions/creators.js';
import { CALL_API } from 'redux-api-middleware';

describe('action creator', () => {
it('onView Action', () => {
    const action=onView()
    expect(Object.keys(action).length).toBe(1);
    expect(action[CALL_API].method).toBe("POST");
  });

  it('onUpdate Action', () => {
    const action=onUpdate(1);
    expect(Object.keys(action).length).toBe(1);
    expect(action[CALL_API].method).toBe("POST");
    expect(JSON.parse(action[CALL_API].body)).toEqual({id:1});
  });
});