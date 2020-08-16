import React from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Text } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import SettingItem from './components/setting'
import NavigationUtil from '../../utils/NavigationUtil'
import Modal from 'react-native-modal'
import {Toast} from '../../utils/Toast'

// svg 
import SettingSvg from '../../assets/svg/setting.svg'
import Download from '../../assets/svg/download.svg'
import Person from '../../assets/svg/person.svg'
import { px2dp } from '../../utils/px2dp'

class Setting extends React.PureComponent {
    state = {
        avatar: 'https://iph.href.lu/80x80?text=%E5%A4%B4%E5%83%8F&fg=ffffff&bg=9fc5e8',
        isVisible: false
    }
    _login = () => {
        NavigationUtil.goPage({}, 'Login')
    }
    // 系统更新
    _update = () => {
        this.setState({
            isVisible: true
        })
    }
    _cancle = () => {
        this.setState({
            isVisible: false
        })
    }

    // 系统更新
    _modal() {
        return (
            <Modal
                isVisible={this.state.isVisible}
            >
                <View style={styles.modalBox}>
                    <Text style={styles.updateTitle}>更新提示</Text>
                    <Text style={styles.updateVersion}>当前可更新到最新版本1.0.19</Text>
                    <View style={styles.updateFotter}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this._cancle}
                            style={[styles.btn, { borderRightColor: 'rgba(187, 187, 187, 1)', borderRightWidth: px2dp(.5) }]}
                        >
                            <Text style={styles.canleText}>取消</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this._dowload}
                            style={styles.btn}
                        >
                            <Text style={styles.downloadText}>前往下载</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }

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
            <TouchableOpacity
                onPress={this._login}
                style={styles.headerBox}>
                <Image style={styles.avatar} source={{ uri: this.state.avatar }} />
            </TouchableOpacity>
        );
        const _content = (
            <>
                <SettingItem
                    name='系统设置'
                    // onPress={() => { NavigationUtil.goPage({}, 'SySetting') }}
                    onPress={() => {
                        Toast.showToast('功能开发中')
                    }}
                    icon={<SettingSvg width='22' height='22' />}
                />
                <SettingItem
                    name='版本更新'
                    onPress={this._update}
                    icon={<Download width='22' height='22' />}
                />
                <SettingItem
                    name='关于我们'
                    onPress={() => { NavigationUtil.goPage({}, 'About') }}
                    icon={<Person width='22' height='22' />}
                />
            </>
        );
        return (
            <SafeAreaView style={styles.settingBox}>
                {this._modal()}
                {_renderTop}
                {_header}
                {_content}
            </SafeAreaView>
        );
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
        borderRadius: px2dp(30)
    },
    modalBox: {
        width: px2dp(259),
        height: px2dp(144),
        borderRadius: px2dp(13),
        backgroundColor: '#FDFFFB',
        alignSelf: 'center',
        alignItems: 'center'
    },
    updateTitle: {
        fontSize: px2dp(18),
        color: '#030303',
        marginTop: px2dp(21)
    },
    updateVersion: {
        marginTop: px2dp(4),
        fontSize: px2dp(14),
        color: '#333'
    },
    updateFotter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: px2dp(44),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: px2dp(.5),
        borderTopColor: 'rgba(187, 187, 187, 1)'
    },
    btn: {
        width: px2dp(259 / 2),
        height: px2dp(44),
        alignItems: 'center',
        justifyContent: 'center'
    },
    canleText: {
        color: '#E31E1E',
        fontSize: px2dp(17)
    },
    downloadText: {
        fontSize: px2dp(17),
        color: '#4DAB6D'
    }
})