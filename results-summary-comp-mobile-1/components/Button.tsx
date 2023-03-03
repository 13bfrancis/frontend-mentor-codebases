import { View, Pressable, StyleSheet, Text } from "react-native";
import { colors, fonts } from "../constants";

export default () => {
  return (
    <Pressable
      onPress={() => console.log("button pressed")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Continue</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.darkGreyBlue,
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 128,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.hanken700,
    textAlign: "center",
    color: colors.white,
  },
});
