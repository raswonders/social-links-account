import { ReactNode } from "react";

type SocialLinkProps = {
  href: string;
  children: ReactNode;
};

export function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a href={href}>
      <div className="w-full p-3 bg-grey rounded-lg justify-center items-center gap-2 inline-flex">
        <div className="text-white text-sm font-bold font-custom leading-normal">
          {children}
        </div>
      </div>
    </a>
  );
}
