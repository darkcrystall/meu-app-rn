import { StyleSheet, View } from 'react-native';
import Home from './pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Home/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 5,
    height: 500,
    width: 600
  }
});
