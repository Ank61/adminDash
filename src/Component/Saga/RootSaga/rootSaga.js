import {all} from 'redux-saga/effects'
import {watchfetch} from '../Saga/saga'

export default function* rootSaga(){
    yield all([watchfetch()])
}