import React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'

function SySetting ({}) {
    return (<SafeAreaView style={styles.container}>
        <Text>系统设置</Text>
    </SafeAreaView>)
}


export default SySetting

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
