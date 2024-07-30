import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LanguageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language</Text>
      <Text style={styles.content}>Details about language settings...</Text>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
  },
});