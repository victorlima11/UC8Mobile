import { ArrowRight } from "lucide-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Card({ title, description, image }) {

  const handlePress = () => {
    alert(`Você selecionou ${title}`);
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.description}>{description}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <ArrowRight color="#000" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#27272A",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15, // espaço entre imagem e textos
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  description: {
    fontSize: 14,
    color: "#A1A1AA",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 100,
    marginTop: 10,
    marginLeft: 12,
  },
});
