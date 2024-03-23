import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  
  return (
    <View style={estilos.container}>
      <text style={estilos.texto}>
        E-BOOKS
      </text>

        <TouchableOpacity 
          style={estilos.button}>
            <Text style={estilos.button}>
              INICIAR
            </Text>
        
        </TouchableOpacity>
      
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
    justifyContent: 'right',
    gap: 350
  },
  texto:{
    color: "#000",
    backgroundColor: '#E28E8E',
    fontSize: 70,
    justifyContent: 'right',
    height: 125,
    borderRadius: 20
  },
  input:{
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width:"80%"
  },
  button:{
    backgroundColor: "#E28E8E",
    paddingHorizontal: 36 ,
    paddingVertical: 8,
    borderRadius: 8,
    fontSize: 17,
    justifyContent: 'center'
  }
});
