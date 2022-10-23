import Image from "next/image";

const MobileNav = () => {
  return (
    <div className="flex sticky top-0 z-20 w-full items-center justify-between shadow-md px-5 py-2 bg-neutral-800 md:hidden">
      <a href="#">
        <Image
          alt="aftermath small logo"
          src="/images/tattoo-logo-2.PNG"
          width={70}
          height={70}
        />
      </a>
      <div>
        <a href="#" className="mr-5 text-xl font-serif text-neutral-100">
          Tattoos
        </a>
        <a href="#" className="text-xl font-serif text-neutral-100">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
