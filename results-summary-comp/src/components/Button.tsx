import type { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren) => {
  return (
    <button className="w-full rounded-[128px] bg-dark-grey-blue py-4 text-lg font-bold text-white">
      {children}
    </button>
  );
};
