import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Imagem from '../components/Imagem'
import Botao from '../components/Botao'
import CaixaDeTexto from '../components/CaixaDeTexto'
import CaixaComScroll from '../components/CaixaComScroll'
import CardsDeUsuario from '../components/CardsDeUsuario'

const Home = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.titulo}>Home</Text>
      <Text style={styles.saudacao}>Bem vindo ao meu app</Text>
      <Botao/>
      <Imagem/>
      <CaixaDeTexto/>
      <CaixaComScroll/>
      <CardsDeUsuario/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    titulo: {
        color: "black",
        fontWeight: 600,
        fontSize: 32,
        textAlign: "center",

    },
    saudacao: {
        color: "black",
        fontSize: 24
    }
})