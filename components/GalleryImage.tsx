import { useState, Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { ImageType } from "../lib/typings";
import { urlFor } from "../lib/client";

const GalleryImage = (props: ImageType) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const src = urlFor(props.image).url();

  return (
    <>
      <div
        onClick={openModal}
        className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[200px] h-[230px] bg-neutral-900 overflow-hidden justify-self-center lg:max-w-[300px] lg:h-[370px] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 focus-visible:ring-opacity-75 hover:cursor-pointer"
      >
        <Image
          alt={props.name}
          loader={() => src}
          src={src}
          layout="fill"
          objectFit="cover"
          unoptimized={true}
        />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all md:max-w-md">
                  <Dialog.Title
                    as="div"
                    className="relative flex justify-end items-center z-40"
                  >
                    <button
                      className="focus:outline-none focus-visible:ring focus-visible:ring-neutral-100"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-neutral-100 ring ring-neutral-100"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </Dialog.Title>
                  <div className="w-full max-w-sm h-[400px] md:max-w-md md:h-[500px]">
                    <Image
                      alt={props.name}
                      loader={() => src}
                      src={src}
                      layout="fill"
                      objectFit="cover"
                      unoptimized={true}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default GalleryImage;
