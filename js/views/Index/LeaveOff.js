import React from 'react'
import {View,SafeAreaView,StyleSheet,TouchableOpacity,Text} from 'react-native'
import {px2dp} from '../../utils/px2dp'

class LeaveOff extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
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