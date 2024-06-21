import { StyleSheet } from "react-native";


export default StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#2D3252',
          alignItems: 'center',
          justifyContent: 'center',
          gap:20
        },
        texto:{
          color: "#FFFF",
          fontSize: 20
        },
        texto2:{
          color: "#FFFF",
          fontSize: 50,
          textAlign:"center",
          letterSpacing: 15,
          marginBottom:40,
        },
        input:{
          backgroundColor: "#676F9D",
          borderWidth: 1,
          height:60,
          width:"100%",
          borderRadius: 8,
          fontSize:24,
          paddingLeft:12,
          gap:100,
        },
        button:{
          backgroundColor: "#F9B17A",
          borderRadius: 6,  
          paddingVertical:10,
        },
        button2:{
          backgroundColor: "#F9B17A",
          borderRadius: 50,  
          paddingTop:15,
          paddingHorizontal:17,
          marginBottom:20,
          marginRight:272,
        },
        livro:{
          width:90,
          height:90,
          marginLeft:10,
          resizeMode:"stretch",
        },
        titulo:{
          width:250,
          height:50,
         marginTop:10,
         resizeMode:"stretch",
        },
        cabecalho:{
          flexDirection:"row",
          
          height:30,
        },
        container2:{
          marginBottom:100,
          width:"80%",
          alignContent:"center",
          gap:10,
        
        },
        texto3:{
          color: "black",
          fontSize: 30,
          textAlign:"center",
          letterSpacing: 8,
          fontWeight: '600'
        
        },
       



});