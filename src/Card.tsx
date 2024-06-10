import { SocialLink } from "./SocialLink";
import avatarImage from "/public/assets/images/avatar-jessica.jpeg";

export function Card() {
  return (
    <div className="w-80 p-6 bg-darkGrey rounded-xl flex-col justify-start items-center gap-6 inline-flex">
      <img
        className="w-[88px] h-[88px] relative rounded-[999px]"
        src={avatarImage}
      />
      <div className="self-stretch h-[61px] flex-col justify-start items-center gap-1 flex">
        <div className="self-stretch text-center text-white text-2xl font-semibold font-custom leading-9">
          Jessica Randall
        </div>
        <div className="self-stretch text-center text-neonGreen text-sm font-bold font-custom leading-[21px]">
          London, United Kingdom
        </div>
      </div>
      <div className="self-stretch text-center text-white text-sm font-normal font-custom leading-[21px]">
        "Front-end developer and avid reader."
      </div>
      <div className="self-stretch h-[289px] flex-col justify-start items-stretch gap-4 flex">
        <SocialLink href="https://github.com/raswonders">GitHub</SocialLink>
        <SocialLink href="https://www.frontendmentor.io/profile/raswonders">
          Frontend Mentor
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/rastislavhepner/">
          LinkedIn
        </SocialLink>
        <SocialLink href="https://twitter.com/raswonders">Twitter</SocialLink>
        <SocialLink href="">Instagram</SocialLink>
      </div>
    </div>
  );
}
