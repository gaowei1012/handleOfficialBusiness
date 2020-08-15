import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { px2dp } from '../../../utils/px2dp'
import PropTyeps from 'prop-types'

import Arrow from '../../../assets/svg/arrow.svg'

function SettingItem({ onPress, name, icon }) {
    return (
        <TouchableOpacity
            activeOpacity={.5}
            onPress={onPress}
            style={styles.container}
        >
            <View style={styles.avatarBox}>
                {icon}
                <Text style={styles.name}>{name}</Text>
            </View>
            <Arrow width='22' height='22'/>
        </TouchableOpacity>
    )
}

SettingItem.propTypes = {
    onPress: PropTyeps.func,
    icon: PropTyeps.element,
    name: PropTyeps.string
}

export default SettingItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: px2dp(345),
        alignSelf: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: px2dp(1),
        paddingBottom: px2dp(6),
        marginVertical: px2dp(14),
        justifyContent: 'space-between',
        paddingHorizontal: px2dp(6)
    },
    avatarBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        marginLeft: px2dp(6)
    }
})