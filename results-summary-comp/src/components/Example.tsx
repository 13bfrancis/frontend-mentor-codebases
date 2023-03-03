import Logo from "../assets/react.svg";

export default () => {
  return (
    <div className="mx-auto flex max-w-xs items-center space-x-4 rounded-xl bg-white p-6 shadow-lg sm:max-w-sm">
      <div className="shrink-0">
        <img className="h-12 w-12" src={Logo} role="presentation" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Chit Chat</div>
        <p className="font text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
};
