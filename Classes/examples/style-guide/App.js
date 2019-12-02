import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button'
import Footer from './components/footer'
import Link from './components/link'

import { textStyle } from './styles' 

export default function App() {
  return (
    <View style={[styles.container]}>
      <Text style={[textStyle.main, textStyle.heading]}>Amazing App!</Text>
      <Link error style={textStyle.main}>Open up App.js to start working on your app!</Link>
      <Button warning color="purple" label="My Button" />
      <Button error color="purple" label="My Button" />
      <Button valid label="My Button" />
      <Button disabled label="My Button" />
      <Button label="My Button" />
      <Button focus label="My Button" />

      <Footer error label="Footer text" />
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
