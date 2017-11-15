import main from '../reducers/index.js'
import { UPDATE,UPDATE_FAIL,UPDATE_SUCCESS,VIEW,VIEW_SUCCESS,VIEW_FAIL,CLICKVIEW} 
from '../actions/creators'

describe('main reducer', () => {
    const event1={event_id:1};
    const event2={event_id:2};
    it('empty case#UPDATE', () => {
            const st=main({},{type:UPDATE});
            expect(st).toEqual({default:{}});
    });
    it('empty case#UPDATE_SUCCESS', () => {
        const st=main({},{type:UPDATE_SUCCESS});
        expect(st).toEqual({default:{pendingChange:[]}});
    });
    it('empty case#VIEW', () => {
        const st=main({},{type:VIEW});
        expect(st).toEqual({default:{pendingChange:[]}});
    });
    it('get data success#VIEW_SUCCESS', () => {
        const data=[{test:123}];
        const st=main({ },{type:VIEW_SUCCESS,payload:{ data}});
        expect(st).toEqual({default:{ data,pendingChange:[]}});
    });
    it('remove data#CLICKVIEW', () => {
        const data=[event1,event2];
        const st=main({default:{data} },{type:CLICKVIEW,id:2});
        expect(st).toEqual({default:{ data:[event1],pendingChange:[event2]}});
    });
    it('remove data not in the set#CLICKVIEW', () => {
        const data=[event1,event2];
        const st=main({default:{data} },{type:CLICKVIEW,id:3});
        expect(st).toEqual({default:{ data:[event1,event2],pendingChange:[]}});
    });
    it('restore data when#UPDATE_FAIL', () => {
        const data=[event1];
        const st=main({default:{data,pendingChange:[event2]} },{type:UPDATE_FAIL});
        expect(st).toEqual({default:{ data:[event1,event2],pendingChange:[]}});
    });
    it('udpate data when#event', () => {
        const data=[event1];
        const st=main({default:{data} },{type:"event",data:[event2]});
        expect(st).toEqual({default:{ data:[event1,event2]}});
    });
});