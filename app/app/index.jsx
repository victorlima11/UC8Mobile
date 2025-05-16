import { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={{ uri: 'https://icones.pro/wp-content/uploads/2021/06/icone-github-verte.png' }}
        style={styles.image}
      />

      <Text style={styles.text}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#71717A"
        value={nome}
        onChangeText={setNome}
      />

      <Button style={styles.button} color="#32cd32" title="Button" onPress={() => alert(`Olá, ${nome}!`)} />
      <TouchableOpacity onPressIn={() => alert(`Olá, ${nome}!`)}>
        <Text style={styles.botao}>Touchable</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18181B',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#A1A1AA',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3F3F46',
    backgroundColor: '#27272A',
    color: '#ffffff',
    padding: 10,
    width: '50%',
    borderRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  botao: {
  backgroundColor: '#32cd32',
  paddingVertical: 10,
  paddingHorizontal: 10,
  borderRadius: 2,
  marginTop: 20,
  color: '#ffffff',
  },
});
