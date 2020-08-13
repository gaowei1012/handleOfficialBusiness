
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  createAppContainer,
  BottomTabBar,
  createBottomTabNavigator,
} from 'react-navigation';

import Index from '../views/Index/Index';

const TABS = {
  Index: {
    screen: Index,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => {
        return (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../assets/tab/home.png')}
            selectedImage={require('../assets/tab/sele_home.png')}
          />
        );
      },
    },
  }
}


class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  _tabNavgator() {
    /// 如果有当前Tabs
    if (this.Tabs) {
      return this.Tabs;
    }
    const { Index } = TABS;
    const tabs = { Index };
    // IndexPage.navigationOptions.tabBarLabel = '首页';
    return (this.Tabs = createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBarComponent {...props} theme={this.props.theme} />;
      },
    }));
  }

  render() {
    // 保存navigation为了后面调用
    //console.log(this.props.navigation);
    const Tab = createAppContainer(this._tabNavgator());
    return <Tab />;
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BottomTabBar {...this.props} activeTintColor={this.props.theme} />;
  }
}

class TabBarItem extends React.Component {
  render() {
    return (
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
        source={
          this.props.focused ? this.props.selectedImage : this.props.normalImage
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
