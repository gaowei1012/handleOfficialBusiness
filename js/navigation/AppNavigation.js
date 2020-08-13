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