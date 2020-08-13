import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import NavigationUtil from '../../utils/NavigationUtil'

// Svg
import Tips from '../../assets/svg/tips.svg'
import Setting from '../../assets/svg/setting.svg'
import DaKa from '../../assets/svg/daka.svg'

class Index extends React.PureComponent {

    state = {
        list: [
            {id: 1, name: '上班打卡', icon: <DaKa width={24} height={24}/>, com: 'ClockIn' },
            {id: 2, name: '出差申请', icon: <DaKa width={24} height={24}/>, com: 'BusinessTrip'  },
            {id: 3, name: '日历', icon: <DaKa width={24} height={24}/>, com: 'Calendar'  },
            {id: 4, name: '资金支付', icon: <DaKa width={24} height={24}/>, com: ''  },
        ]
    }

    _tips=()=> {
        NavigationUtil.goPage({}, 'Tips')
    }

    _setting=()=> {
        NavigationUtil.goPage({}, 'Setting')
    }

    _goToPage=(com)=> {
        if (com) {
            NavigationUtil.goPage({}, com)
        }
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
        const _content = (
            <View style={styles.contentBox}>
                {this.state.list.map(l => (
                    <TouchableOpacity
                        style={styles.menuBox}
                        activeOpacity={1}
                        onPress={() => this._goToPage(l.com)}
                    >
                        {l.icon}
                        <Text style={styles.menuName}>{l.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
        return (
            <SafeAreaView style={styles.landContainer}>
                {renderTop}
                {_content}
            </SafeAreaView>
        )
    }
}

export default Index

const styles = StyleSheet.create({
    landContainer: {
        flex: 1,
        // backgroundColor: '#f0f0f0f0'
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
    contentBox: {
        width: px2dp(345),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    menuBox: {
        alignItems: 'center',
        width: px2dp(110),
        height: px2dp(80),
        paddingHorizontal: px2dp(10),
        paddingVertical: px2dp(10)
    },
    menuName: {
        marginTop: px2dp(10)
    }
})
