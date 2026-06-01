import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const CaixaDeTexto = () => {
  return (
    <View>
        <TextInput
        style={styles.caixa} 
        placeholder="Escreva seu nome"
        onChangeText={(texto) => console.log(texto)}
        />
    </View>
  )
}

export default CaixaDeTexto

const styles = StyleSheet.create({
    caixa: {
        backgroundColor: "white",
        padding: 5,
        width: 200,
        borderColor: "black",
        borderWidth: 1
    }
})