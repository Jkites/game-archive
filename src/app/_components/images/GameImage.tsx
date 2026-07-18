// components/images/GameImage.tsx
import Image from "next/image";
import { IMAGE_VARIANTS, ImageVariant } from "./ImageVariants";

interface GameImageProps {
  src: string;
  alt: string;
  variant: ImageVariant;
  className?: string;
}

export default function GameImage({
  src,
  alt,
  variant,
  className = "",
}: GameImageProps) {
  const aspectClass = IMAGE_VARIANTS[variant];

  return (
    <div className={`relative ${aspectClass} ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}