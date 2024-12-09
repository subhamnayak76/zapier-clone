"use client"

import { useRouter } from "next/navigation";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondaryButton";
import { Feature } from "./Feature";

export const Hero = () => {
    const router = useRouter()
  return (
    <div>
    <div className="flex justify-center">
        <div className="text-5xl   font-semibold text-center max-w-md pt-8">
          Automate as fast you can
        </div>
    </div>
      <div className="flex justify-center">
      <div className="text-xl font-normal text-center pt-8 max-w-2xl">
      Turn chaos into smooth operations by automating workflows yourself—no developers, no IT tickets, no delays. The only limit is your imagination.
      </div>
      </div>
      <div className="flex justify-center pt-8 gap-5">
        <PrimaryButton onClick={() =>{
            router.push('/signup')
        }}size="big">Get started Free</PrimaryButton>
        <SecondaryButton onClick={() => {}} size="big">Contact Sales</SecondaryButton>
      </div>
      <div className="flex justify-center pt-8 ">
        <Feature title={"free forever"} subtitle={"for core features"} />
        <Feature title ={"More apps"} subtitle={"than the other platform "} />
        <Feature title={"cutting edge"} subtitle={"ai features"} />

      </div>
    </div>
  );
};
