import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Use this stylesheet to create styles for the TodoItem
const styles = StyleSheet.create({})

class TodoItem extends React.Component {
    render() {
        // This simple component expects the `item` prop and renders a view with a text
        return (
            <View>
                <Text>{this.props.item}</Text>
            </View>
        )
    }    
}

export default TodoItem;