import Button from "./components/Button";
import ScoreBadge from "./components/ScoreBadge";
import Skill from "./components/Skill";
import { data } from "./data/mockData";

export default () => {
  return (
    <div className="grid min-h-full place-items-center">
      <div className="flex min-h-full flex-col items-center md:min-h-0 md:flex-row md:items-center md:justify-center md:rounded-[32px] md:bg-white md:shadow-lg">
        <div className="flex h-[376px] w-full flex-col items-center space-y-7 rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue px-14 pt-6 md:h-[512px] md:w-[368px] md:rounded-3xl">
          <h1 className="text-lg font-bold text-light-lavender md:text-2xl">
            Your Result
          </h1>
          <ScoreBadge score={76} />
          <p className="text-[24px] font-bold leading-6 text-white md:text-[32px]">
            Great
          </p>
          <p className="text-center font-medium text-light-lavender md:text-lg">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        <div className="my-6 w-full px-8 md:w-[368px]">
          <h1 className="text-lg font-bold leading-6 text-dark-grey-blue">
            Summary
          </h1>
          <div className="my-6 flex flex-col space-y-4">
            {data.map((skill, index) => (
              <Skill
                key={index}
                background={skill.background}
                imageUrl={skill.skillLogo}
                skillText={skill.skillType}
                score={skill.score}
              />
            ))}
          </div>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};
