import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { px2dp, width } from '../../utils/px2dp'
import NavigationUtil from '../../utils/NavigationUtil'
import RecommenItem from './components/recommenItem'

export default class Personal extends React.PureComponent {
    handleLogin = () => {
        NavigationUtil.goPage({}, 'Login')
    }
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='个人中心'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
            />
        );
        
        return <SafeAreaView style={styles.personalContainer}>
            {renderTop}
        </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    personalContainer: {
        flex: 1,
        //backgroundColor: 'rgba(255, 155, 155, 1)'
    },
    topWrap: {
        width: width,
        height: px2dp(120),
        backgroundColor: 'blue'
    },
    topBox: {
        width: px2dp(335),
        alignSelf: 'center',
        backgroundColor: 'red',
        marginTop: px2dp(-60),
        height: px2dp(120),
        borderRadius: px2dp(10)
    },
    avatarBox: {
        width: px2dp(80),
        height: px2dp(80),
        backgroundColor: '#000',
        alignSelf: 'center',
        marginTop: px2dp(-40),
        borderRadius: px2dp(40)
    },
    contentBox: {
        width: px2dp(335),
        alignSelf: 'center',
        marginTop: px2dp(10)
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        width: px2dp(1),
        height: px2dp(16),
        backgroundColor: 'red',
        marginRight: px2dp(4)
    },
    recommen: {
        fontSize: px2dp(16),
        color: '#333'
    },
    topAvatarDesc: {
        marginTop: px2dp(12),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: px2dp(20)
    },
    desc: {
        color: '#333',
        fontSize: px2dp(12),
        marginVertical: px2dp(6),
        marginHorizontal: px2dp(3)
    }
})