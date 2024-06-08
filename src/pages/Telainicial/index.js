import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";

export default function Login({ navigation }) {
    function acessarTelainicial() {
        navigation.navigate('Telainicial');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.searchButton}>
                    {/* Ícone de pesquisa pode ser adicionado aqui */}
                    <Text style={styles.searchButtonText}>🔍</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.content}>
                <TouchableOpacity style={styles.genreButton}>
                    <Text style={styles.genreButtonText}>FANTASIA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}