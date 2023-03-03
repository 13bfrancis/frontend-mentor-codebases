import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../constants";
import Button from "./Button";
import Skill from "./Skill";

export default () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.summaryText}>Summary</Text>
      <View style={styles.skillsContainer}>
        <Skill score={80} skillType="Reaction" />
        <Skill score={92} skillType="Memory" />
        <Skill score={61} skillType="Verbal" />
        <Skill score={73} skillType="Visual" />
      </View>
      <Button />
      <View style={{ paddingBottom: 30 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 32,
  },
  skillsContainer: {
    gap: 16,
    marginBottom: 24,
  },
  summaryText: {
    fontFamily: fonts.hanken700,
    fontSize: 18,
    color: colors.darkGreyBlue,
    marginVertical: 24,
  },
});
