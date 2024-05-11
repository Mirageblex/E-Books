import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";

export default function Login({ navigation }){
    function acessarTelainicial(){
        navigation.navigate('Telainicial');

    }
    return(
        <View style={styles.container}>
        <Text style={styles.texto2}>
          Seu Livro!!!
        </Text>  
  
        <TextInput style={styles.input}
        secureTextEntry={true}/>
  
        <TouchableOpacity style={styles.button}
            onPress={acessarTelainicial}
        >
          <Text>
            ENTRAR
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text>VOLTAR</Text>
            </TouchableOpacity>
      </View>
    );
}