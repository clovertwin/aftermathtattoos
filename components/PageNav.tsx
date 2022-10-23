import Image from "next/image";
import Link from "next/link";

const PageNav = () => {
  return (
    <div className="hidden md:bg-neutral-900 md:py-3 md:px-7 md:fixed md:h-full md:flex md:flex-col md:w-80 md:items-center md:justify-center md:border-r-2 md:border-neutral-100">
      <Link href="/">
        <a aria-label="link to home">
          <Image
            alt="aftermath logo large"
            src="/images/tattoo-logo-2.PNG"
            width={200}
            height={200}
            priority
          />
        </a>
      </Link>
      <Link href="/#gallery">
        <a
          aria-label="link to photo gallery"
          className="text-4xl font-bold text-neutral-100 mt-14 transition ease-in-out duration-300 hover:ring hover:ring-neutral-100 hover:scale-110"
        >
          Gallery
        </a>
      </Link>
      <Link href="/#booking">
        <a
          aria-label="link to booking"
          className="text-4xl font-bold text-neutral-100 mt-10 transition ease-in-out duration-300 hover:ring hover:ring-neutral-100 hover:scale-110"
        >
          Book Now
        </a>
      </Link>
      <Link href="/#faq">
        <a
          aria-label="link to frequently asked questions"
          className="text-4xl font-bold text-neutral-100 mt-10 transition ease-in-out duration-300 hover:ring hover:ring-neutral-100 hover:scale-110"
        >
          FAQ
        </a>
      </Link>
    </div>
  );
};

export default PageNav;
