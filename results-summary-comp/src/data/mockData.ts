import iconMemory from "../assets/images/icon-memory.svg";
import iconReaction from "../assets/images/icon-reaction.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";

type SkillType = "Reaction" | "Memory" | "Verbal" | "Visual";

type Skill = {
  score: number;
  skillType: SkillType;
  skillLogo: string;
  background: "light-red" | "orangey-yellow" | "green-teal" | "cobalt-blue";
};

export const data: Skill[] = [
  {
    skillType: "Reaction",
    score: 80,
    skillLogo: iconReaction,
    background: "light-red",
  },
  {
    skillType: "Memory",
    score: 92,
    skillLogo: iconMemory,
    background: "orangey-yellow",
  },
  {
    skillType: "Verbal",
    score: 61,
    skillLogo: iconVerbal,
    background: "green-teal",
  },
  {
    skillType: "Visual",
    score: 73,
    skillLogo: iconVisual,
    background: "cobalt-blue",
  },
];
