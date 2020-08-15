import React from 'react'
import {View,SafeAreaView,StyleSheet,TouchableOpacity,Text} from 'react-native'
import {px2dp} from '../../utils/px2dp'

class OvertimeApplication extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>加班申请</Text>
            </SafeAreaView>
        )
    }
}

export default OvertimeApplication

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})