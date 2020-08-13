import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'

class Setting extends React.PureComponent {
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const _renderTop = (
            <TopNavigationBar
                title='设置'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        return (
            <SafeAreaView style={styles.settingBox}>
                {_renderTop}
                <Text>设置</Text>
            </SafeAreaView>
        )
    }
}

export default Setting

const styles = StyleSheet.create({
    settingBox: {
        flex: 1
    }
})