import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function Detalhes(props){
    return(
        <View style={styles.container}>
            <View style={styles.modal}>
                <Image
                    source={require('../img/gas.png')}
                />
            <Text style={{color:'#4dba3f', fontSize:28, fontWeight:'bold',marginTop: 10}}>Compensa usar {props.escolha}</Text>
            
            <Text style={{color:'#fff',fontSize:20, fontWeight:'bold', marginTop: 10 }}>Com os preços:</Text>
            
            <Text style={styles.text}>Álcool: R${props.alcool}</Text>
            <Text style={styles.text}>Gasolina: R${props.gasolina}</Text>

            <TouchableOpacity style={styles.botao} onPress={props.fechar}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent:'center',
        margin: 15,
        
    },
    modal:{
        backgroundColor:"#292929",
        width:'100%',
        height: 550,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 10
    },
    text:{
        color:'#fff',
        fontSize: 17,
        marginTop: 5
    },
    botao:{
        backgroundColor:'#d42b29',
        width:'100%',
        marginTop: 50,
        height: 45,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    textoBotao:{
        color:'#fff',
        fontWeight: '600',
        fontSize: 17
    }
});