import React from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import { px2dp } from '../../utils/px2dp'
import Input from '../../components/Input'
import { connect } from 'react-redux'
import actions from './redux/actions'
import constant from '../../expand/api'

const { insterBusiness } = constant

class BusinessTrip extends React.PureComponent {
    state = {
        username: null,
        address: null,
        date: null,
        reason: null,
        reason: null,
        remarks: null
    }
    _name = (username) => {
        this.setState({ username })
    }
    _address = (address) => {
        this.setState({ address })
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

    // 提交
    handleSubmit = () => {
        let { username, address, reason, remarks, date } = this.state
        const { addBuinessData } = this.props
        const data = {
            "username": username,
            "reason": reason,
            "remarks": remarks,
            "date": date,
            "address": address
        }
        addBuinessData(insterBusiness, 'POST', data)
    }

    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='出差申请'
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
                    placeholder='目的地'
                    placeholderTextColor='#ccc'
                    name='目的地'
                    isSelect={true}
                    onChangeText={this._address}
                />
                <Input
                    placeholder='填写出差时间'
                    placeholderTextColor='#ccc'
                    name='时间'
                    isSelect={true}
                    onChangeText={this._date}
                />
                <Input
                    placeholder='填写出差事由'
                    placeholderTextColor='#ccc'
                    name='事由'
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
            <SafeAreaView style={styles.clockBox}>
                {renderTop}
                {_content}
                {_fotter}
            </SafeAreaView>
        )
    }
}

export default connect(({ addBusiness }) => ({ addBusiness }), dispatch => ({
    addBuinessData(url, method, data) {
        dispatch(actions.addBuinessData(url, method, data))
    }
}))(BusinessTrip)

const styles = StyleSheet.create({
    clockBox: {
        flex: 1
    },
    ftBox: {
        marginTop: px2dp(100),
        width: px2dp(312),
        alignSelf: 'center',
        alignItems: 'center',
        height: px2dp(32),
        backgroundColor: 'blue',
        borderRadius: px2dp(6),
        justifyContent: 'center'
    },
    ftText: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600'
    }
})