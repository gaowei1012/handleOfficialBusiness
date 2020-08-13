import React from 'react'
import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {px2dp} from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'

class ClockIn extends React.PureComponent {
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
        return (
            <SafeAreaView style={styles.clockBox}>
                {renderTop}
                <Text>打卡</Text>
            </SafeAreaView>
        )
    }
}

export default ClockIn

const styles = StyleSheet.create({
    clockBox: {
        flex: 1
    }
})