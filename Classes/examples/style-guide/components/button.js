import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { buttonStyle, textStyle } from '../styles'

const Button = (props) => (
    <TouchableOpacity style={buttonStyle.button}>
        <Text style={textStyle.main}>
            {props.label}
        </Text>
    </TouchableOpacity>
)

export default Button