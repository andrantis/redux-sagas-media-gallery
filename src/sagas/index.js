import { fork } from 'redux-saga/effects';
import watchSearchMeadia from './watcher';

// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* startForeman() {
    yield fork(watchSearchMeadia)
}
