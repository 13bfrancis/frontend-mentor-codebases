import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../constants";
import ScoreCircle from "./ScoreCircle";

export default () => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[colors.lightSlateBlue, colors.lightRoyalBlue]}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Your Result</Text>
        <ScoreCircle score={76} />
        <Text style={styles.scoreStatusText}>Great</Text>
        <Text style={styles.descriptionText}>
          Your performance exceed 65% of the people conducting the test here!
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  container: {
    minHeight: 20,
    paddingBottom: 20,
    alignItems: "center",
    gap: 24,
    marginHorizontal: 70,
    marginBottom: 40,
  },
  headerText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.hanken700,
    color: colors.lightLavender,
  },
  scoreStatusText: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fonts.hanken700,
  },
  descriptionText: {
    textAlign: "center",
    fontFamily: fonts.hanken500,
    color: colors.lightLavender,
    opacity: 0.8,
  },
});
