import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Estilo para Modo Oscuro
  containerOscuro: {
    flex: 1,
    backgroundColor: '#56070c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseTextOscuro: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
  },
  titleTextOscuro: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonTextOscuro: {
    color: 'white',
    fontSize: 20,
  },
  // Estilo para el Modo Claro
  containerClaro: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseTextClaro: {
    color: 'black',
    fontSize: 20,
    marginTop: 5,
  },
  titleTextClaro: {
    color: 'black',
    fontSize: 30,
    //fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonTextClaro: {
    color: 'black',
    fontSize: 20,
  },
});