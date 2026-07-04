import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Button, Pressable, TouchableOpacity, TextInput} from 'react-native';
import { styles } from './styles.js';
import { Link } from 'expo-router';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <View style={isDarkMode ? styles.containerOscuro : styles.containerClaro}>
      <Text style={isDarkMode ? styles.titleTextOscuro : styles.titleTextClaro}>
        React Native
      </Text>
      <View style={{ backgroundColor: 'red', width: 100, height: 100 }}>
        <TextInput
          placeholder="Escribe algo"
        />
      </View>
      <Text style={isDarkMode ? styles.baseTextOscuro : styles.baseTextClaro}>
        Bienvenido a la aplicacion de React Native
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Link href="./detalles" asChild>
          <TouchableOpacity
            style={{ backgroundColor: 'green', padding: 10, marginTop: 10 }}
          >
            <Text style={{ color: 'white' }}>Presioname</Text>
          </TouchableOpacity>
        </Link>
        <Pressable
          onPress={() => setIsDarkMode(!isDarkMode)}
          onPressIn={() => console.log('Boton presionado!')}
          onPressOut={() => console.log('Boton soltado!')}
          onLongPress={() => console.log('Boton presionado por mucho tiempo!')}
          style={{ backgroundColor: 'blue', padding: 10, marginTop: 10 }}
        >
          <Text style={isDarkMode ? styles.buttonTextOscuro : styles.buttonTextClaro} >
            {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </Text>
        </Pressable>
      </View>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        }}
        style={{ width: 20, height: 20 }}
      />
      <Text style={isDarkMode ? styles.baseTextOscuro : styles.baseTextClaro}>
        El codigo es responsivo
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}