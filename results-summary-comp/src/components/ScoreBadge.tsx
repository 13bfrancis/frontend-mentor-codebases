interface Props {
  score: number;
}

export default ({ score }: Props) => {
  return (
    <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-light-royal-blue-clear md:h-[200px] md:w-[200px]">
      <p className="text-6xl font-extrabold text-white md:text-7xl">{score}</p>
      <p className="text-light-lavender/50 md:text-lg">of 100</p>
    </div>
  );
};
