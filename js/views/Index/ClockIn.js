import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import moment from 'moment'
import actions from './redux/actions'
import { connect } from 'react-redux'
import constant from '../../expand/api'
import Time from '../../assets/svg/time.svg'
import Ban from '../../assets/svg/ban.svg'

const { clockIn } = constant

class ClockIn extends React.PureComponent {
    state = {
        date: null
    }
    componentDidMount() {
        let date = moment().format('HH:ss')
        this.setState({ date })
    }
    _clockIn = () => {
        const { clockInData } = this.props
        const data = {
            "username": "执念",
            "": ""
        }
        clockInData(clockIn, 'POST', data)
    }
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='上班打卡'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        const _header = (
            <View style={styles.homeBox}>
                <Ban width={24} height={24} />
                <Text style={styles.clockInText}>你已在打卡范围内！</Text>
            </View>
        )
        const _content = (
            <TouchableOpacity
                onPress={this._clockIn}
                activeOpacity={.7}
                style={styles.contentBox}>
                <View style={styles.crlesBox}>
                    <Text>{this.state.date}</Text>
                    <Text>上班打卡</Text>
                </View>
            </TouchableOpacity>
        );
        const _fotter = (
            <View style={styles.fotterBox}>
                <View style={styles.timeBox}>
                    <Time width={22} height={22} />
                    <Text style={styles.timeText}>09：00 ~ 12：00 上午</Text>
                </View>
                <View style={styles.timeBox}>
                    <Time width={22} height={22} />
                    <Text style={styles.timeText}>12：00 ~ 13：00 午休</Text>
                </View>
                <View style={styles.timeBox}>
                    <Time width={22} height={22} />
                    <Text style={styles.timeText}>13：00 ~ 18：00 下午</Text>
                </View>
            </View>
        );
        return (
            <SafeAreaView style={styles.clockBox}>
                {renderTop}
                {_header}
                {_content}
                {_fotter}
            </SafeAreaView>
        )
    }
}

export default connect(({ clockIn }) => ({ clockIn }), dispatch => ({
    clockInData(url, method, data) {
        dispatch(actions.clockInData(url, method, data))
    }
}))(ClockIn)

const styles = StyleSheet.create({
    clockBox: {
        flex: 1
    },
    contentBox: {
        width: px2dp(345),
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: px2dp(60)
    },
    crlesBox: {
        width: px2dp(100),
        height: px2dp(100),
        borderRadius: px2dp(50),
        borderWidth: px2dp(6),
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: px2dp(20)
    },
    fotterBox: {
        marginTop: px2dp(50),
        width: px2dp(335),
        alignSelf: 'center'
    },
    timeBox: {
        marginTop: px2dp(10),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    timeText: {
        paddingLeft: px2dp(6),
        color: '#333'
    },
    homeBox: {
        marginTop: px2dp(60),
        width: px2dp(345),
        alignSelf: 'center',
        alignItems: 'center'
    },
    clockInText: {
        marginVertical: px2dp(8)
    }
})