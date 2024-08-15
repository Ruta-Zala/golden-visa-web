import { Button } from "../ButtonGenz/index";
import React from "react";

export default function DaysCounter({
  daysButton = "Days",
  fourButton = "04",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[24%] max-[1050px]:w-full`}
    >
      <Button
        size="md"
        variant="fill"
        className="self-stretch bg-slate-100 rounded-tl-[20px] rounded-tr-[20px] border border-solid border-gray-300 font-medium uppercase tracking-[0.32px]"
      >
        {daysButton}
      </Button>
      <Button
        size="3xl"
        variant="fill"
        className="self-stretch bg-slate-100 rounded-bl-[20px] rounded-br-[20px] border-b border-l border-r border-solid border-gray-300 !text-dark-0 shadow-sm"
      >
        {fourButton}
      </Button>
    </div>
  );
}
