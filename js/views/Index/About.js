import React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'

function About ({}) {
    return (<SafeAreaView style={styles.container}>
        <Text>关于我们</Text>
    </SafeAreaView>)
}


export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
