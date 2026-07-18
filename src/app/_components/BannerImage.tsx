import Image, { StaticImageData } from "next/image";

export default function BannerImage({ src, alt}: { src: string; alt: string;}) {
  return (
    <Image
        className="w-3/4 h-auto self-center"
        src={src}
        alt={alt}
        width={800}
        height={450}
    />
  );
}