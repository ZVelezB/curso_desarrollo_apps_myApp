import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Detalles() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a la pantalla de detalles</Text>
            <Link href="/" style={{ color: 'blue', marginTop: 20 }}>
                Volver a la pantalla principal
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});