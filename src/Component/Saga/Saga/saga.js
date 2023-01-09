import {all,call,put,takeEvery} from 'redux-saga/effects'
import  axios from 'axios';

export function* fetchData() {
    var array = [];var APIDATA
    yield call(()=>axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        APIDATA=array.concat(response.data)
    }))
    yield put({type:'FETCH', payload :APIDATA})
}
export function* watchfetch(){
    console.log('watch fetch..')
    yield takeEvery('ASYNC_FETCH',fetchData)
}