import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";

export default function Cadastro({ navigation }){
    function acessarHome(){
        navigation.navigate('Telainicial');

    }
    return(
        <View style={styles.container}>
        <Text style={styles.texto2}>
          CADASTRO
        </Text>  
          
        <Text style={styles.texto}>
          E-MAIL
        </Text>    

        <TextInput style={styles.input}
        keyboardType='email-address'/>   
  
        <Text style={styles.texto}>
          SENHA
        </Text>    
  
        <TextInput style={styles.input}
        secureTextEntry={true}/>
  
        <TouchableOpacity style={styles.button}
            onPress={acessarHome}
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