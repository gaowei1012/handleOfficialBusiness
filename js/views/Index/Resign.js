import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import Input from '../../components/Input'
import constant from '../../expand/api'
import {connect} from 'react-redux'
import actions from './redux/actions'
import { Loading } from '../../utils/Loading'
import NavigationUtil from '../../utils/NavigationUtil'

const { resign } = constant

class Resign extends React.PureComponent {
    state = {
        username: null,
        start_time: null,
        end_time: null,
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
    _endTime = (end_time) => {
        this.setState({ end_time })
    }
    _createTime = (start_time) => {
        this.setState({ start_time })
    }

    handleSubmit = () => {
        let { username, reason, remarks, end_time, start_time } = this.state
        let { resignData } = this.props
        Loading.show()
        const data = {
            "username": username,
            "reason": reason,
            "remarks": remarks,
            "end_time": end_time,
            "start_time": start_time
        }
        resignData(resign, 'POST', data)

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
                title='离职申请'
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
                />
                <Input
                    placeholder='入职时间'
                    placeholderTextColor='#ccc'
                    name='入职时间'
                    isSelect={true}
                    onChangeText={this._createTime}
                />
                <Input
                    placeholder='离职时间'
                    placeholderTextColor='#ccc'
                    name='离职时间'
                    isSelect={true}
                    onChangeText={this._endTime}
                />
                <Input
                    placeholder='原因'
                    placeholderTextColor='#ccc'
                    name='离职原因'
                    isSelect={true}
                    onChangeText={this._reason}
                />
                <Input
                    placeholder='填写备注'
                    placeholderTextColor='#ccc'
                    name='备注'
                    onChangeText={this._remarks}
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
            <SafeAreaView style={styles.container}>
                {renderTop}
                {_content}
                {_fotter}
            </SafeAreaView>
        )
    }
}

export default connect(({resign}) => ({resign}), dispatch => ({
    resignData(url, method, data) {
        dispatch(actions.resignData(url, method, data))
    }
}))(Resign)

const styles = StyleSheet.create({
    container: {
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
