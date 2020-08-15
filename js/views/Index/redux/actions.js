import { request } from '../../../expand/request'
import { handleData, handleErrorData } from '../../../utils/asyncActionHandle'

// types
export const add_leave_success = 'add_leave_success'
export const add_leave_fail = 'add_leave_fail'
export const find_leave_success = 'find_leave_success'
export const find_leave_fail = 'find_leave_fail'
export const add_buiness_sucess = 'add_buiness_sucess'
export const add_buiness_fail = 'add_buiness_fail'
export const find_business_success = 'find_business_success'
export const find_business_fail = 'find_business_fail'
export const clock_in_success = 'clock_in_success'
export const clock_in_fail = 'clock_in_fail'


function addLeaveData(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                handleData(dispatch, ret, add_leave_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, add_leave_fail)
            })
    }
}

function getAllLeaveByIdData(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                handleData(dispatch, ret, find_leave_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, find_leave_fail)
            })
    }
}

function addBuinessData(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                handleData(dispatch, ret, add_buiness_sucess)
            })
            .catch(err => {
                handleErrorData(dispatch, err, add_buiness_fail)
            })
    }
}

function findBusinessById(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                handleData(dispatch, ret, find_business_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, find_business_success)
            })
    }
}

function clockInData(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                handleData(dispatch, ret, clock_in_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, clock_in_fail)
            })
    }
}

export default {
    addLeaveData,
    getAllLeaveByIdData,
    addBuinessData,
    findBusinessById,
    clockInData
}
