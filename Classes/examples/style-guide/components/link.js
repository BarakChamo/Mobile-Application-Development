import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { textStyle } from '../styles'

const Link = (props) => {
    let stateStyle = null

    if(props.valid) stateStyle = textStyle.valid
    if(props.warning) stateStyle = textStyle.warning
    if(props.error) stateStyle = textStyle.error
    if(props.disabled) stateStyle = textStyle.disabled

    let typeStyle = null
    if(props.heading) typeStyle = textStyle.heading
    if(props.subheading) typeStyle = textStyle.subheading

    return (
    <Text style={[textStyle.main, stateStyle, typeStyle]}>
        {props.children}
    </Text>
    )
}

export default Link