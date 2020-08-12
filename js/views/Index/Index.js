import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import { px2dp } from '../../utils/px2dp'

class Index extends React.PureComponent {
   
    render() {
        
        return (
            <SafeAreaView style={styles.landContainer}>
                <Text>首页</Text>
            </SafeAreaView>
        )
    }
}

export default Index

const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    },
})
