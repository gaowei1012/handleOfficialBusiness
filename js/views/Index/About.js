import React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'

function About ({}) {
    return (<SafeAreaView style={styles.container}>
        <Text>管我我们</Text>
    </SafeAreaView>)
}


export default About

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
