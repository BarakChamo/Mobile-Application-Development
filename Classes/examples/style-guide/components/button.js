import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { buttonStyle, textStyle } from '../styles'

const Button = (props) => {
    let stateStyle = null

    if(props.valid) stateStyle = buttonStyle.valid
    if(props.warning) stateStyle = buttonStyle.warning
    if(props.error) stateStyle = buttonStyle.error
    if(props.disabled) stateStyle = buttonStyle.disabled

    return (
    <TouchableOpacity disabled={props.disabled} style={[buttonStyle.button, stateStyle]}>
        <Text style={textStyle.main}>
            {props.label}
        </Text>
    </TouchableOpacity>
    )
}

export default Button