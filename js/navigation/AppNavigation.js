import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { connect } from 'react-redux';
import {
    createReactNavigationReduxMiddleware,
    reduxifyNavigator,
} from 'react-navigation-redux-helpers';

import Welcom from '../views/Welcom/Welcom';
import Home from '../views/Home/Home';
import Index from '../views/Index/Index';
import Tips from '../views/Index/Tips'
import Setting from '../views/Index/Setting'
import ClockIn from '../views/Index/ClockIn'
import BusinessTrip from '../views/Index/BusinessTrip'
import Calendar from '../views/Index/Calendar'
import AskLeave from '../views/Index/AskLeave'
import OvertimeApplication from '../views/Index/OvertimeApplication'
import LeaveOff from '../views/Index/LeaveOff'
import Login from '../views/Index/Login'
import SySetting from '../views/Index/SySetting'
import About from '../views/Index/About'
import Resign from '../views/Index/Resign'
import Postion from '../views/Index/Postion'
import CompanyNews from '../views/Index/CompanyNews'
import CompanyDetail from '../views/Index/CompanyDetail'


export const rootCom = 'Init';

const InitNavigator = createStackNavigator({
    Welcom: {
        screen: Welcom,
        navigationOptions: {
            header: null,
        },
    },
});

const MainNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Index: {
        screen: Index,
        navigationOptions: {
            header: null,
        },
    },
    Tips: {
        screen: Tips,
        navigationOptions: {
            header: null
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            header: null
        }
    },
    ClockIn: {
        screen: ClockIn,
        navigationOptions: {
            header: null
        }
    },
    BusinessTrip: {
        screen: BusinessTrip,
        navigationOptions: {
            header: null
        }
    },
    Calendar: {
        screen: Calendar,
        navigationOptions: {
            header: null
        }
    },
    AskLeave: {
        screen: AskLeave,
        navigationOptions: {
            header: null
        }
    },
    OvertimeApplication: {
        screen: OvertimeApplication,
        navigationOptions: {
            header: null
        }
    },
    LeaveOff: {
        screen: LeaveOff,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            header: null
        }
    },
    SySetting: {
        screen: SySetting,
        navigationOptions: {
            header: null
        }
    },
    Resign: {
        screen: Resign,
        navigationOptions: {
            header: null
        }
    },
    Postion: {
        screen: Postion,
        navigationOptions: {
            header: null
        }
    },
    CompanyNews: {
        screen: CompanyNews,
        navigationOptions: {
            header: null
        }
    },
    CompanyDetail: {
        screen: CompanyDetail,
        navigationOptions: {
            header: null
        }
    }
});

export const RootNavigation = createAppContainer(
    createSwitchNavigator(
        {
            Init: InitNavigator,
            Main: MainNavigator,
        },
        {
            navigationOptions: {
                header: null,
            },
        },
    ),
);

export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);


const AppWithNavigationState = reduxifyNavigator(RootNavigation, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);