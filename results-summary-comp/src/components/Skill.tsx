interface Props {
  imageUrl: string;
  skillText: string;
  score: number;
  background: string;
}

export default ({ score, skillText, imageUrl, background }: Props) => {
  const backgrounds: { [key: string]: string } = {
    "light-red": "bg-light-red",
    "orangey-yellow": "bg-orangey-yellow",
    "green-teal": "bg-green-teal",
    "cobalt-blue": "bg-cobalt-blue",
  };

  return (
    <div
      className={`flex w-full justify-between rounded-xl ${backgrounds[background]}  bg-opacity-10 px-4 py-5`}
    >
      <div className="flex space-x-3">
        <img src={imageUrl} role="presentation" />
        <p>{skillText}</p>
      </div>
      <div>
        <p className="font-bold">
          <span>{score}</span>
          <span className="mx-2 text-dark-grey-blue text-opacity-50">/</span>
          <span className="text-dark-grey-blue text-opacity-50">100</span>
        </p>
      </div>
    </div>
  );
};
