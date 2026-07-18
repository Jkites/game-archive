import Image, { StaticImageData } from "next/image";

export default function BannerImage({ src, alt }: { src: StaticImageData; alt: string; }) {
  return (
    <Image
        className="w-3/4 h-auto self-center"
        src={src}
        alt={alt}
    />
  );
}