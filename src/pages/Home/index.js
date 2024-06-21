import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
      <View style={styles.cabecalho}>
        <Image source={require('./../../../imgs/titulo.png')} style={styles.titulo} />
        <Image source={require('./../../../imgs/livro.png')} style={styles.livro} />
      </View>


      <View style={{width:'100%', height:300,gap:90, alignItems:"center",
          alignContent:"center",marginBottom:80}}>
        <TouchableOpacity style={styles.button} onPress={acessarLogin}>

          <Text style={styles.texto}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={acessarCadastro}>
          <Text style={styles.texto}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>



    </View>
  );
}
