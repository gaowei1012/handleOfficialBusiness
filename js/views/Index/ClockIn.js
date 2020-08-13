import React from 'react'
import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {px2dp} from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import moment from 'moment'

class ClockIn extends React.PureComponent {
    state = {
        date: null
    }
    componentDidMount() {
        let date = moment().format('HH:ss')
        this.setState({date})
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
        const _content = (
            <View style={styles.contentBox}>
                <View style={styles.crlesBox}>
                    <Text>{this.state.date}</Text>
                    <Text>上班打开</Text>
                </View>
            </View>
        );
        return (
            <SafeAreaView style={styles.clockBox}>
                {renderTop}
                {_content}
                <Text>打卡</Text>
            </SafeAreaView>
        )
    }
}

export default ClockIn

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
    }
})