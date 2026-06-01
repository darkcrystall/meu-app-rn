import { StyleSheet, ScrollView, Text, View } from "react-native";
import React from "react";

const CaixaComScroll = () => {
  return (
    <ScrollView style={styles.caixa}>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
      <Text>Item 4</Text>
      <Text>Item 5</Text>
    </ScrollView>
  );
};

export default CaixaComScroll;

const styles = StyleSheet.create({
  caixa: {
    display: "flex",
    backgroundColor: "lightblue",
    width: 200,
    height: 20,
    margin: 20,
    padding: 20,
  },
});
