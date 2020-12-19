import { takeEvery, all } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes';
import * as authSagas from './auth';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, authSagas.logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, authSagas.checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authSagas.authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authSagas.authCheckStateSaga)
    ]);
}