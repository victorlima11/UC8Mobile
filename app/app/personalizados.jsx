import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card/Card';

export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Componentes Personalizados</Text>
        <Card
          title="React"
          description="Biblioteca JavaScript para UI"
          image="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png"
        />
        <Card
          title="Next.js"
          description="Framework React para SSR"
          image="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png"
        />
        <Card
          title="Go"
          description="Linguagem de programação"
          image="https://images.icon-icons.com/2699/PNG/512/golang_logo_icon_171073.png"
        />
        <Card
          title="FastAPI"
          description="Framework para construção de APIs"
          image="https://svgmix.com/uploads/skillicons/151df7-fastapi.svg"
        />
        <Card
          title="Docker"
          description="Ferramenta de containerização"
          image="https://img.icons8.com/fluent/512/docker.png"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#18181B',
  },
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
  },
});
