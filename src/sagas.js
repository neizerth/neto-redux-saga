import { retry, put, takeLatest, spawn, debounce } from 'redux-saga/effects'
import { 
    setQuery, 
    createRequest, 
    requestSuccess,
    requestFailed
} from './features/search';
import { search } from './api';

function* watchSearchQueryUpdate() {
    yield debounce(200, setQuery.match, handleSearchQueryUpdate);
}

function* handleSearchQueryUpdate({ payload }) {
    yield put(createRequest(payload));
}

function* watchSearchRequest() {
    yield takeLatest(createRequest.match, handleSearchRequest);
}

function* handleSearchRequest({ payload }) {
    try {
        const triesCount = 3;
        const tryDelay = 1000;
        const response = yield retry(triesCount, tryDelay, search, payload);

        yield put(requestSuccess(response));
    }
    catch (e) {
        yield put(requestFailed(e));
    }
}

export default function* rootSaga() {
    yield spawn(watchSearchQueryUpdate);
    yield spawn(watchSearchRequest);
}