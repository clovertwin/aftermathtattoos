import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";

const MobileNav = () => {
  return (
    <header className="sticky top-0 z-30 px-5 bg-neutral-900 md:hidden">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/" className="h-16 w-16">
          <a aria-label="link to home">
            <Image
              alt="aftermath small logo"
              src="/images/tattoo-logo-2.PNG"
              width={64}
              height={64}
              priority
            />
          </a>
        </Link>
        <Popover className="h-[40px] w-[40px]">
          <Popover.Button className="focus:outline-none focus:ring focus:ring-neutral-100 active:ring active:ring-neutral-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-neutral-100 ui-open:hidden focus:outline-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-neutral-100 ui ui-not-open:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="z-30 mt-1 mr-1 absolute right-0 w-3/4 max-w-xs">
              <div className="flex flex-col justify-center items-center bg-neutral-900 ring ring-neutral-100 rounded-lg mt-2 p-10">
                <Link href="/">
                  <a
                    aria-label="link to home"
                    className="text-2xl font-bold text-neutral-100"
                  >
                    Home
                  </a>
                </Link>
                <Link href="/#gallery">
                  <a
                    aria-label="link to photo gallery"
                    className="text-2xl font-bold text-neutral-100 mt-5"
                  >
                    Gallery
                  </a>
                </Link>
                <Link href="/#booking">
                  <a
                    aria-label="link to booking"
                    className="text-2xl font-bold text-neutral-100 mt-5"
                  >
                    Book Now
                  </a>
                </Link>
                <Link href="/#faq">
                  <a
                    aria-label="link to frequently asked questions"
                    className="text-2xl font-bold text-neutral-100 mt-5"
                  >
                    FAQ
                  </a>
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </header>
  );
};

export default MobileNav;
