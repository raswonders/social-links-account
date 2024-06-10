import avatarImage from "/public/assets/images/avatar-jessica.jpeg";

export function Card() {
  return (
    <div className="w-80 p-6 bg-darkGrey rounded-xl flex-col justify-start items-center gap-6 inline-flex">
      <img
        className="w-[88px] h-[88px] relative rounded-[999px]"
        src={avatarImage}
      />
      <div className="self-stretch h-[61px] flex-col justify-start items-center gap-1 flex">
        <div className="self-stretch text-center text-white text-2xl font-semibold font-['Inter'] leading-9">
          Jessica Randall
        </div>
        <div className="self-stretch text-center text-neonGreen text-sm font-bold font-['Inter'] leading-[21px]">
          London, United Kingdom
        </div>
      </div>
      <div className="self-stretch text-center text-white text-sm font-normal font-['Inter'] leading-[21px]">
        "Front-end developer and avid reader."
      </div>
      <div className="self-stretch h-[289px] flex-col justify-start items-center gap-4 flex">
        <div className="self-stretch p-3 bg-grey rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-white text-sm font-bold font-['Inter'] leading-[21px]">
            GitHub
          </div>
        </div>
        <div className="self-stretch p-3 bg-grey rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-white text-sm font-bold font-['Inter'] leading-[21px]">
            Frontend Mentor
          </div>
        </div>
        <div className="self-stretch p-3 bg-grey rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-white text-sm font-bold font-['Inter'] leading-[21px]">
            LinkedIn
          </div>
        </div>
        <div className="self-stretch p-3 bg-grey rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-white text-sm font-bold font-['Inter'] leading-[21px]">
            Twitter
          </div>
        </div>
        <div className="self-stretch p-3 bg-grey rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-white text-sm font-bold font-['Inter'] leading-[21px]">
            Instagram
          </div>
        </div>
      </div>
    </div>
  );
}
