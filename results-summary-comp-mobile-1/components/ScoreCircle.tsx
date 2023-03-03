import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../constants";

interface Props {
  score: number;
}

export default ({ score }: Props) => {
  return (
    <LinearGradient
      colors={[colors.violetBlue, colors.persianBlue]}
      style={styles.scoreCircleContainer}
    >
      <Text style={styles.scoreText}>{score.toString()}</Text>
      <Text style={styles.accentText}>of 100</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scoreCircleContainer: {
    borderRadius: 999,
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 56,
    fontFamily: fonts.hanken800,
    color: colors.white,
  },
  accentText: {
    color: colors.lightLavender,
    fontSize: 16,
    fontFamily: fonts.hanken700,
    opacity: 0.5,
  },
});
