import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import actions from './redux/actions'
import { connect } from 'react-redux'
import constant from '../../expand/api'
import { px2dp } from '../../utils/px2dp'

const { getInfo } = constant

class Tips extends React.PureComponent {

    componentDidMount() {
        const { getInfoData } = this.props
        getInfoData(getInfo, 'POST')
    }

    _renderItem = (data) => {
        const info = data.item
        return <View
            style={styles.listBox}
        >
            <Text>{info.title}</Text>
            <Text>{info.content}</Text>
        </View>
    }
    _content = () => {
        const info = this.props.info.item
        if (info == null) {
            return <View />
        }
        return <FlatList
            data={info}
            renderItem={this._renderItem}
        />
    }

    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const _renderTop = (
            <TopNavigationBar
                title='通知'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        return (
            <SafeAreaView style={styles.tipsBox}>
                {_renderTop}
                {this._content()}
            </SafeAreaView>
        )
    }
}

export default connect(({ info }) => ({ info }), dispatch => ({
    getInfoData(url, method) {
        dispatch(actions.getInfoData(url, method))
    }
}))(Tips)

const styles = StyleSheet.create({
    tipsBox: {
        flex: 1
    },
    listBox: {
        backgroundColor: 'red',
        width: px2dp(345),
        alignSelf: 'center',
        marginVertical: px2dp(8),
        padding: px2dp(8),
        borderRadius: px2dp(6)
    }
})
