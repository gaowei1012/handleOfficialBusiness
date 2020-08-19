import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'

class About extends React.PureComponent {
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                    title='关于我'
                    statusBar={StatusBar}
                    style={{ backgroundColor: "#fff" }}
                    leftButton={GoBack(this.props)}
                />
        )
        return (<SafeAreaView style={styles.container}>
            {renderTop}
        </SafeAreaView>)
    }
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
