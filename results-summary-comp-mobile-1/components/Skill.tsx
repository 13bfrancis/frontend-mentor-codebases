import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { colors, fonts } from "../constants";

interface Props {
  skillType: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
}

export default ({ skillType, score }: Props) => {
  const colorFromSkillType: { [key: string]: string } = {
    Reaction: colors.lightRedClear,
    Memory: colors.orangeyYellowClear,
    Verbal: colors.greenTealClear,
    Visual: colors.cobaltBlueClear,
  };
  const textColorFromSkillType: { [key: string]: string } = {
    Reaction: colors.lightRed,
    Memory: colors.orangeyYellow,
    Verbal: colors.greenTeal,
    Visual: colors.cobaltBlue,
  };
  const imageFromSkillType: { [key: string]: any } = {
    Reaction: require("../assets/images/icon-reaction.png"),
    Memory: require("../assets/images/icon-memory.png"),
    Verbal: require("../assets/images/icon-verbal.png"),
    Visual: require("../assets/images/icon-visual.png"),
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorFromSkillType[skillType] },
      ]}
    >
      <Image style={styles.image} source={imageFromSkillType[skillType]} />
      <Text
        style={[
          styles.skillTypeText,
          { color: textColorFromSkillType[skillType] },
        ]}
      >
        {skillType}
      </Text>
      <View style={styles.scoreTextContainer}>
        <Text style={styles.numeratorText}>{score}</Text>
        <Text style={styles.scoreText}>/</Text>
        <Text style={styles.scoreText}>100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  image: {
    width: 20,
    height: 20,
  },
  skillTypeText: {
    fontSize: 16,
    fontFamily: fonts.hanken500,
  },
  scoreTextContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    gap: 8,
  },
  scoreText: {
    fontFamily: fonts.hanken700,
    opacity: 0.5,
    color: colors.darkGreyBlue,
  },
  numeratorText: {
    fontFamily: fonts.hanken700,
    color: colors.darkGreyBlue,
  },
});
