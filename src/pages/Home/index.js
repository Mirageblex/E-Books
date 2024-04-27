import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { useState } from "react";

export default function Home({ navigation }) {
  function acessarLogin() {
    navigation.navigate('Login');
  }

  function acessarCadastro() {
    navigation.navigate('Cadastro');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={acessarCadastro}>
        <Text>CADASTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={acessarLogin}>
        <Text>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
