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
export const overtime_success = 'overtime_success'
export const overtime_fail = 'overtime_fail'
export const info_success = 'info_success'
export const info_fail = 'info_fail'
export const login_success = 'login_success'
export const login_fail = 'login_fail'
export const register_success = 'register_success'
export const register_fail = 'register_fail'
export const resign_success = 'resign_success'
export const resign_fail = 'resign_fail'
export const company_all_success = 'company_all_success'
export const company_all_fail = 'company_all_fail'
export const company_detail_success = 'company_detail_success'
export const company_detail_fail = 'company_detail_fail'

function companyDetailData(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                let data = ret.data
                handleData(dispatch, data, company_detail_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, company_detail_fail)
            })
    }
}

function companyAllData(url, method) {
    return dispatch => {
        request(url, method)
            .then(ret => {
                let data = ret.data
                handleData(dispatch, data, company_all_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, company_all_fail)
            })
    }
}

function resignData(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                handleData(dispatch, ret, login_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, login_fail)
            })
    }
}

function loginData(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                handleData(dispatch, ret, login_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, login_fail)
            })
    }
}

function registerData(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                handleData(dispatch, ret, register_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, register_fail)
            })
    }
}

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

function overTimeData(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                handleData(dispatch, ret, overtime_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, overtime_fail)
            })
    }
}

function getInfoData(url, method) {
    return dispatch => {
        request(url, method)
            .then(ret => {
                const data = ret.data
                handleData(dispatch, data, info_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, info_fail)
            })
    }
}

export default {
    addLeaveData,
    getAllLeaveByIdData,
    addBuinessData,
    findBusinessById,
    clockInData,
    overTimeData,
    getInfoData,
    loginData,
    registerData,
    resignData,
    companyAllData,
    companyDetailData,
}
