import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

const Botao = () => {
  return (
    <View>
      {/* componente do botão */}
      <TouchableOpacity
      onPress={() => console.log("Clicou")} 
      style={styles.botao}>Clique</TouchableOpacity>
    </View>
  );
};

export default Botao;

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "black",
    color: "white",
    fontSize: 18,
    borderRadius: 5,
    padding: 15,
    marginTop: 50,
  },
});