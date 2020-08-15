import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import SettingItem from './components/setting'

// svg 
import Ban from '../../assets/svg/ban.svg'
import { px2dp } from '../../utils/px2dp'

class Setting extends React.PureComponent {
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const _renderTop = (
            <TopNavigationBar
                title='个人设置'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        const _header = (
            <View style={styles.headerBox}>
                <View style={styles.avatar}/>
            </View>
        )
        const _content = (
            <>
                <SettingItem
                    name='name'
                    onPress={() => { }}
                    icon={<Ban width='22' height='22'/>}
                />
                <SettingItem
                    name='name'
                    onPress={() => { }}
                    icon={<Ban width='22' height='22'/>}
                />
            </>
        );
        return (
            <SafeAreaView style={styles.settingBox}>
                {_renderTop}
                {_header}
                {_content}
            </SafeAreaView>
        )
    }
}

export default Setting

const styles = StyleSheet.create({
    settingBox: {
        flex: 1
    },
    headerBox: {
        marginVertical: px2dp(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: px2dp(60),
        height: px2dp(60),
        borderRadius: px2dp(30),
        backgroundColor:'red'
    }
})