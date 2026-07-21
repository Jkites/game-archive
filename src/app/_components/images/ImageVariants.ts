// components/images/imageVariants.ts
export const IMAGE_VARIANTS = {
  banner: {
    aspect: "aspect-video w-1/2 self-center",
    sizes: "50vw"
  },
  // thumbnail: "aspect-square w-1/2",
  icon: {
    aspect: "aspect-square w-1/16",
    sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
  },
  card: {
    aspect: "aspect-[3/2] w-full max-w-sm",
    sizes: "64px"
  },
} as const;

export type ImageVariant = keyof typeof IMAGE_VARIANTS;