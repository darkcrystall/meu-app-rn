import { StyleSheet, FlatList, View, Text } from 'react-native'
import React from 'react'

const CardsDeUsuario = () => {
    const dados = [
        { id: '1', nome: 'Maria' },
        { id: '2', nome: 'João' },
        { id: '3', nome: 'Ana' },
      ];
  return (
    <View>
        <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
        />
    </View>
  )
}

export default CardsDeUsuario

const styles = StyleSheet.create({})