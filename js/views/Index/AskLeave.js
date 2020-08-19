import React from 'react'
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import { px2dp } from '../../utils/px2dp'
import { connect } from 'react-redux'
import Input from '../../components/Input'
import actions from './redux/actions'
import constant from '../../expand/api'
import { Loading } from '../../utils/Loading'
import NavigationUtil from '../../utils/NavigationUtil'

const { insterLeave } = constant

class AskLeave extends React.PureComponent {

    state = {
        username: null,
        address: null,
        date: null,
        reason: null,
        remarks: null
    }

    _name = (username) => {
        this.setState({ username })
    }
    _reason = (reason) => {
        this.setState({ reason })
    }
    _remarks = (remarks) => {
        this.setState({ remarks })
    }
    _date = (date) => {
        this.setState({ date })
    }
    _address = (address) => {
        this.setState({ address })
    }

    handleSubmit = () => {
        let { username, reason, remarks, date, address } = this.state
        let { addLeaveData } = this.props
        Loading.show()
        const data = {
            "username": username,
            "reason": reason,
            "remarks": remarks,
            "date": date,
            "address": address
        }
        addLeaveData(insterLeave, 'POST', data)

        setTimeout(() => {
            Loading.hidden()
            NavigationUtil.goBack(this.props.navigation)
        }, 300)
    }

    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='请假申请'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        const _content = (
            <>
                <Input
                    placeholder='申请人姓名'
                    placeholderTextColor='#ccc'
                    name='姓名'
                    isSelect={true}
                    onChangeText={this._name}
                    width={40}
                />
                <Input
                    placeholder='项目组'
                    placeholderTextColor='#ccc'
                    name='项目组'
                    isSelect={true}
                    onChangeText={this._address}
                    width={40}
                />
                <Input
                    placeholder='填写出差时间'
                    placeholderTextColor='#ccc'
                    name='时间'
                    isSelect={true}
                    onChangeText={this._date}
                    width={40}
                />
                <Input
                    placeholder='填写请假原因'
                    placeholderTextColor='#ccc'
                    name='事由'
                    isSelect={true}
                    onChangeText={this._reason}
                    width={40}
                />
                <Input
                    placeholder='填写备注'
                    placeholderTextColor='#ccc'
                    name='备注'
                    onChangeText={this._remarks}
                    width={40}
                />
            </>
        );
        const _fotter = (
            <TouchableOpacity
                style={styles.ftBox}
                activeOpacity={1}
                onPress={this.handleSubmit}
            >
                <Text style={styles.ftText}>提交</Text>
            </TouchableOpacity>
        );
        return (
            <SafeAreaView style={styles.aske}>
                {renderTop}
                {_content}
                {_fotter}
            </SafeAreaView>
        )
    }
}

export default connect(({ addLeave }) => ({ addLeave }), dispatch => ({
    addLeaveData(url, method, data) {
        dispatch(actions.addLeaveData(url, method, data))
    }
}))(AskLeave)

const styles = StyleSheet.create({
    aske: {
        flex: 1
    },
    ftBox: {
        marginTop: px2dp(100),
        width: px2dp(335),
        alignSelf: 'center',
        alignItems: 'center',
        height: px2dp(36),
        backgroundColor: '#33CC99',
        borderRadius: px2dp(3),
        justifyContent: 'center'
    },
    ftText: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600'
    }
})
