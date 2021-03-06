import React from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import { px2dp } from '../../utils/px2dp'
import Input from '../../components/Input'
import { connect } from 'react-redux'
import actions from './redux/actions'
import constant from '../../expand/api'
import { Loading } from '../../utils/Loading'
import NavigationUtil from '../../utils/NavigationUtil'

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
        let { addBuinessData } = this.props
        Loading.show()
        const data = {
            "username": username,
            "reason": reason,
            "remarks": remarks,
            "date": date,
            "address": address
        }
        addBuinessData(insterBusiness, 'POST', data)
        setTimeout(() => {
            Loading.hidden()
            NavigationUtil.goBack(this.props.navigation)
        }, 600)
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
                    width={50}
                />
                <Input
                    placeholder='目的地'
                    placeholderTextColor='#ccc'
                    name='目的地'
                    isSelect={true}
                    onChangeText={this._address}
                    width={50}
                />
                <Input
                    placeholder='填写出差时间'
                    placeholderTextColor='#ccc'
                    name='时间'
                    isSelect={true}
                    onChangeText={this._date}
                    width={50}
                />
                <Input
                    placeholder='填写出差事由'
                    placeholderTextColor='#ccc'
                    name='事由'
                    isSelect={true}
                    onChangeText={this._reason}
                    width={50}
                />
                <Input
                    placeholder='填写备注'
                    placeholderTextColor='#ccc'
                    name='备注'
                    onChangeText={this._remarks}
                    width={50}
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