import {
    add_leave_fail,
    add_leave_success,
    find_leave_fail,
    find_leave_success,
    add_buiness_fail,
    add_buiness_sucess,
    find_business_fail,
    find_business_success,
    clock_in_fail,
    clock_in_success,
    overtime_success,
    overtime_fail,
    info_success,
    info_fail,
    login_fail,
    login_success,
    register_fail,
    register_success,
} from './actions'

function onLoginAction(state = {}, action) {
    switch(action.type) {
        case login_success:
            return {
                ...state,
                item: action.item
            }
        case login_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onRegisterAction(state = {}, action) {
    switch(action.type) {
        case register_success:
            return {
                ...state,
                item: action.item
            }
        case register_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onLeaveAction(state = {}, action) {
    switch(action.type) {
        case add_leave_success:
            return {
                ...state,
                item: action.item
            }
        case add_leave_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onGetLeaveByIdAction(state = {}, action) {
    switch(action.type) {
        case find_leave_success:
            return {
                ...state,
                item: action.item
            }
        case find_leave_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onAddBusinessAction(state = {}, action) {
    switch(action.type) {
        case add_buiness_sucess:
            return {
                ...state,
                item: action.item
            }
        case add_buiness_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onGetBusinessByIdAction(state = {}, action) {
    switch(action.type) {
        case find_business_success:
            return {
                ...state,
                item: action.item
            }
        case find_business_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onClockInAction(state = {}, action) {
    switch(action.type) {
        case clock_in_success:
            return {
                ...state,
                item: action.item
            }
        case clock_in_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function overTimeAction(state = {}, action) {
    switch(action.type) {
        case overtime_success:
            return {
                ...state,
                item: action.item
            }
        case overtime_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function infoAction(state = {}, action) {
    switch(action.type) {
        case info_success:
            return {
                ...state,
                item: action.item
            }
        case info_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

export {
    onLeaveAction,
    onGetLeaveByIdAction,
    onGetBusinessByIdAction,
    onAddBusinessAction,
    onClockInAction,
    overTimeAction,
    infoAction,
    onLoginAction,
    onRegisterAction,
}
