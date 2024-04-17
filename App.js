import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Alert } from "react-native";

import Detalhes from "./src/Modal";


export default function App() {
    const[alcool, setAlcool] = useState('');
    const[gasolina, setGasolina] = useState('');
    const[melhorEscolha, setMelhorEscolha] = useState('');
    const[modalVisible, setModalVisible] = useState(false);
    function abrirModal(){
     
          if(gasolina === '' && alcool === '' )return;
      
            const resultado = (parseFloat(alcool) / parseFloat(gasolina));
     

            if(resultado < 0.7){
    
                setMelhorEscolha('Álcool')
    
            }else{
    
                setMelhorEscolha('Gasolina')
            }
      
           
        
   

        setModalVisible(true)
    }

    function sairModal(){
        setAlcool('')
        setGasolina('')
        setModalVisible(false)
       
        
    }
   

    return (
        <View style={styles.container}>
            <View style={styles.areaImg}>
                <Image
                    style={styles.img}
                    source={require('./src/img/posto.jpg')}

                />
                <Text style={{ color: '#fff', marginTop: 20, fontSize: 20, fontWeight: 400 }}>Qual melhor opção?</Text>
            </View>
            <Text style={styles.tituloInput}>Álcool(preço por litro)</Text>
            <TextInput
            style={styles.input}
            value={alcool}
            onChangeText={(text) => setAlcool(text)}
            />
            <Text style={styles.tituloInput}>Gasolina(preço por litro)</Text>
            <TextInput
            style={styles.input}
            value={gasolina}
            onChangeText={(text) => setGasolina(text)}
            />
        <TouchableOpacity style={styles.Botao} onPress={abrirModal}>
            <Text style={styles.textBotao}>Calcular</Text>
        </TouchableOpacity>

        <Modal transparent={true} animationType="slide" visible={modalVisible}>
         <Detalhes 
         fechar={sairModal}
         escolha={melhorEscolha}
         alcool={alcool}
         gasolina={gasolina}   
         />

        </Modal>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 10,
        justifyContent:'center'
        
    },
    areaImg: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    img: {
        borderRadius: 50,
        width: 200,
        height: 150

    },
    tituloInput:{
        color:"#fff",
        fontSize: 15
       
    },
    input:{
        borderWidth:1,
        borderRadius: 5,
        backgroundColor:"#ffffff",
        marginBottom: 5,
        padding: 10,
        fontSize: 16
        
    },
    Botao:{
        marginTop: 15,
        backgroundColor:'#d42b29',
        height: 45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5
    },
    textBotao:{
        color:'#ffffff',
        fontSize: 17,
        fontWeight:'bold'
       
    }

});