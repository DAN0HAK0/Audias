import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const HomeScreen = () => {
  //Initialisations----------------------
  //State--------------------------------
  //Hanlders-----------------------------
  //View---------------------------------
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8a5757",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
