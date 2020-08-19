import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { px2dp } from '../utils/px2dp'

function Input({ isSelect, name, placeholder, width, placeholderTextColor, scrollEnabled, onChangeText, isTips, tips, clearButtonMode, clearTextOnFocus, keyboardType }) {
    return (
        <View style={styles.inputBox}>
            <View style={[styles.nameBox, {width: px2dp(width)}]}>
                <Text style={styles.text}>{name}</Text>
                {isSelect ? <Text style={styles.sle}>*</Text> : null}
            </View>
            <TextInput
                style={styles.textBox}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                scrollEnabled={scrollEnabled}
                onChangeText={onChangeText}
                clearButtonMode={clearButtonMode}
                clearTextOnFocus={clearTextOnFocus}
                keyboardType={keyboardType}
            />
            {isTips ? <Text style={styles.tips}>{tips}</Text> : null}
        </View>
    )
}

Input.propTypes = {
    isSelect: PropTypes.bool,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    name: PropTypes.string,
    scrollEnabled: PropTypes.bool,
    onChangeText: PropTypes.func,
    isTips: PropTypes.bool,
    tips: PropTypes.string,
    clearButtonMode: PropTypes.string,
    clearTextOnFocus: PropTypes.bool,
    /**
     *   输入框默认输入值 type: string
     *      default
            number-pad
            decimal-pad
            numeric
            email-address
            phone-pad
     */
    keyboardType: PropTypes.string,
    width: PropTypes.number,
}

export default Input

const styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        width: px2dp(325),
        alignSelf: 'center',
        marginVertical: px2dp(12),
        borderBottomColor: '#eee',
        borderBottomWidth: px2dp(.5),
        paddingBottom: px2dp(4)
    },
    nameBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        width: '100%',
        textAlign: 'left'
    },
    sle: {
        marginLeft: px2dp(6),
        marginTop: px2dp(5),
        textAlign: 'center',
        color: 'red'
    },
    textBox: {
        marginHorizontal: px2dp(16),
        paddingHorizontal: px2dp(6)
    },
    tips: {
        color: 'red',
        fontSize: px2dp(12)
    }
})
