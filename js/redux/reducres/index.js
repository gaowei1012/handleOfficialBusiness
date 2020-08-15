import {combineReducers} from 'redux'
import {rootCom, RootNavigation} from '../../navigation/AppNavigation'
import theme from './theme/index'
import {
    onGetLeaveByIdAction,
    onLeaveAction,
    onGetBusinessByIdAction,
    onAddBusinessAction,
    onClockInAction
} from '../../views/Index/redux/reducres'

const navState = RootNavigation.router.getStateForAction(
    RootNavigation.router.getActionForPathAndParams(rootCom),
);

const navReducer = (state = navState, action) => {
    const nextState = RootNavigation.router.getStateForAction(action, state);
    return nextState || state
}

const root = combineReducers({
    nav: navReducer,
    theme: theme,
    addLeave: onLeaveAction,
    getLeave: onGetLeaveByIdAction,
    addBusiness: onAddBusinessAction,
    getBusiness: onGetBusinessByIdAction,
    clockIn: onClockInAction,
})

export default root
