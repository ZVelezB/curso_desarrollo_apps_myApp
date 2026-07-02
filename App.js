import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        React Native
      </Text>
      <View style={{ backgroundColor: 'red', width: 100, height: 100 }}>
      </View>
      <Text style={styles.baseText}>
        Bienvenido a la aplicacion de React Native
      </Text>
      <Button
        title="Presioname"
        onPress={() => alert('Boton presionado!')}
      />
      <Link href="./detalles" asChild>
        <TouchableOpacity
          style={{ backgroundColor: 'green', padding: 10, marginTop: 10 }}
        >
          <Text style={{ color: 'white' }}>Presioname</Text>
        </TouchableOpacity>
      </Link>

      <Pressable
        onPressIn={() => console.log('Boton presionado!')}
        onPressOut={() => console.log('Boton soltado!')}
        onLongPress={() => console.log('Boton presionado por mucho tiempo!')}
        style={{ backgroundColor: 'blue', padding: 10, marginTop: 10 }}
      >
        <Text style={{ color: 'white' }}>Presioname</Text>
      </Pressable>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.baseText}>
        El codigo es responsivo
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56070c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
