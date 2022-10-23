import Image from "next/image";

const MobileNav = () => {
  return (
    <div className="flex flex-wrap sticky top-0 z-20 w-full items-center justify-between border-b-4 border-neutral-100 px-5 bg-neutral-900 md:hidden">
      <a href="#" className="h-16 w-16">
        <Image
          alt="aftermath small logo"
          src="/images/tattoo-logo-2.PNG"
          width={64}
          height={64}
        />
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 text-neutral-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    </div>
  );
};

export default MobileNav;
