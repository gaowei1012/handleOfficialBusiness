import React from 'react'
import {View,SafeAreaView,StyleSheet,TouchableOpacity,Text} from 'react-native'
import {px2dp} from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import { Loading } from '../../utils/Loading'

class LeaveOff extends React.PureComponent {
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='销假'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        return (
            <SafeAreaView style={styles.container}>
                {renderTop}
                <Text>销假</Text>
            </SafeAreaView>
        )
    }
}

export default LeaveOff

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})