import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import NavigationUtil from '../../utils/NavigationUtil'

// Svg
import Tips from '../../assets/svg/tips.svg'
import Setting from '../../assets/svg/setting.svg'

class Index extends React.PureComponent {

    _tips=()=> {
        NavigationUtil.goPage({}, 'Tips')
    }

    _setting=()=> {
        NavigationUtil.goPage({}, 'Setting')
    }
   
    render() {
        const _rightBtn = (
            <View style={styles.rightBox}>
                <TouchableOpacity
                    style={styles.tipsBox}
                    activeOpacity={1}
                    onPress={this._tips}
                >
                    <Tips width={22} height={22}/>
                    {/* <Text style={styles.rightText}>通知</Text> */}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.settingBox}
                    activeOpacity={1}
                    onPress={this._setting}
                >
                    <Setting width={22} height={22}/>
                    {/* <Text style={styles.rightText}>设置</Text> */}
                </TouchableOpacity>
            </View>
        )
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='移动办公'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                rightButton={_rightBtn}
            />
        );
        return (
            <SafeAreaView style={styles.landContainer}>
                {renderTop}
                <Text>首页</Text>
            </SafeAreaView>
        )
    }
}

export default Index

const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    },
    rightBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tipsBox: {

    },
    settingBox: {
        marginLeft: px2dp(6)
    },
})
