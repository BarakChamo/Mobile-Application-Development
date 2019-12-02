import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button'

import { textStyle } from './styles' 

export default function App() {
  return (
    <View style={[styles.container]}>
      <Text style={[textStyle.main, textStyle.heading]}>Amazing App!</Text>
      <Text style={textStyle.main}>Open up App.js to start working on your app!</Text>
      <Button label="My Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
