import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { px2dp, width } from '../../utils/px2dp'

class Order extends React.PureComponent {
    
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTopBar = (
            <TopNavigationBar
                title='订单'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
            />
        );
        
        return <SafeAreaView style={{flex: 1}}>
            {renderTopBar}
        </SafeAreaView>
    }
}

export default Order

const styles = StyleSheet.create({
    menuBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        justifyContent: 'space-between'
    },
    menuItem: {
        width: px2dp(375/2),
        alignItems: 'center',
        backgroundColor: '#ccc',
        paddingVertical: px2dp(10)
    },
    menuText: {
        color: '#fff'
    }
})
