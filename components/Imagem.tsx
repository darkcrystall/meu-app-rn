import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Imagem = () => {
  return (
    <View>
        {/* o componente image precisa que passemos um objeto JS com o atributo URI, este atributo deve conter o caminho para a imagem*/}
        <Image style={styles.imagem} source={{uri: "https://th.bing.com/th/id/OIP.v2iuYa-25M9daNOuYtCoJQHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"}}/>
    </View>
  )
}

export default Imagem

const styles = StyleSheet.create({
    imagem: {
        margin: 20,
        width: 100,
        height: 100
    }
})