import Image, { StaticImageData } from "next/image";

export default function BannerImage({ src, alt, width, height }: { src: string; alt: string; width?: number; height?: number; }) {
  return (
    <Image
        className="w-3/4 h-auto self-center"
        src={src}
        alt={alt}
        width={width}
        height={height}
    />
  );
}