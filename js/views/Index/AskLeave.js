import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import { px2dp } from '../../utils/px2dp'
import { connect } from 'react-redux'
import Input from '../../components/Input'

class AskLeave extends React.PureComponent {
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
                />
                <Input
                    placeholder='目的地'
                    placeholderTextColor='#ccc'
                    name='年龄'
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
            <SafeAreaView style={styles.aske}>
                {renderTop}
                {_content}
                {_fotter}
            </SafeAreaView>
        )
    }
}

export default connect(({ }) => ({}), dispatch => ({}))(AskLeave)

const styles = StyleSheet.create({
    aske: {
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
