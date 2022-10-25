import Image from "next/image";
import { TattooImg } from "../lib/types";

const GalleryImage = ({ alt, path }: TattooImg) => {
  return (
    <div className="relative rounded-lg border-2 border-neutral-100 w-full max-w-[200px] h-[230px] bg-neutral-900 overflow-hidden justify-self-center lg:max-w-[300px] lg:h-[370px]">
      <Image alt={alt} src={path} layout="fill" objectFit="cover" />
    </div>
  );
};

export default GalleryImage;
