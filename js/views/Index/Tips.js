import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'


class Tips extends React.PureComponent {
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
            <Text>通知</Text>
        </SafeAreaView>
        )
    }
}

export default Tips

const styles = StyleSheet.create({
    tipsBox: {
        flex: 1
    }
})