
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NavigationUtil from '../../utils/NavigationUtil'
import {width,height} from '../../utils/px2dp'
export default class Welcom extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.init();
  }

  // 加载首页初始化
  init() {
    this.timer = setTimeout(() => {
      NavigationUtil.restToHomePage({
        navigation: this.props.navigation,
      });
    }, 1000);
  }

  componentWillMount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerBox}>
        <Image style={{width: width, height: height}} source={require('../../assets/common/weclome.png')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
