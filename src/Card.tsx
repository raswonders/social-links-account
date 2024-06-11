import { SocialLink } from "./SocialLink";
import avatarImage from "/public/assets/images/avatar.jfif";

export function Card() {
  return (
    <div className="w-80 sm:w-96 sm:p-10 p-6 sm:shrink-0 bg-darkGrey rounded-xl flex-col justify-start gap-6 inline-flex text-center">
      <img
        className="w-[88px] self-center relative rounded-full"
        src={avatarImage}
        alt="Rastislav's Avatar"
      />
      <div className="flex-col justify-start items-center gap-1 flex">
        <h1 className="text-white text-2xl font-semibold font-custom leading-9">
          Rastislav Hepner
        </h1>
        <div className="text-neonGreen text-sm font-bold font-custom leading-normal">
          Brno, Czech Republic
        </div>
      </div>
      <div className="text-white text-sm font-normal font-custom leading-normal">
        "Front-end developer and avid reader."
      </div>

      <ul className="flex-col justify-start items-stretch gap-4 flex">
        <li>
          <SocialLink href="https://github.c`om/raswonders">GitHub</SocialLink>
        </li>
        <li>
          <SocialLink href="https://www.frontendmentor.io/profile/raswonders">
            Frontend Mentor
          </SocialLink>
        </li>
        <li>
          <SocialLink href="https://www.linkedin.com/in/rastislavhepner/">
            LinkedIn
          </SocialLink>
        </li>
        <li>
          <SocialLink href="https://twitter.com/raswonders">Twitter</SocialLink>
        </li>
        <li>
          <SocialLink href="">Instagram</SocialLink>
        </li>
      </ul>
    </div>
  );
}
