import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
        <Text style={styles.text}>This is a React Native app.</Text>
        <Text style={styles.text}>It is running on Expo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18181B',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "#f1f1f1",
  },
});