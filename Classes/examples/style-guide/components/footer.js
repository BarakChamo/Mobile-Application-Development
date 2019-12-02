import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { buttonStyle, textStyle, containerStyle } from '../styles'

const Footer = (props) => {
    let stateStyle = null

    if(props.valid) stateStyle = buttonStyle.valid
    if(props.warning) stateStyle = buttonStyle.warning
    if(props.error) stateStyle = buttonStyle.error
    if(props.disabled) stateStyle = buttonStyle.disabled

    return (
    <View style={[styles.footer, containerStyle.card, stateStyle]}>
        <Text style={textStyle.main}>
            {props.label}
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: 200,
        height: 50,
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
    }
})

export default Footer