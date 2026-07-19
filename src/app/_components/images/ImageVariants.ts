// components/images/imageVariants.ts
export const IMAGE_VARIANTS = {
  banner: "aspect-video w-1/2 self-center",
  // thumbnail: "aspect-square w-1/2",
  icon: "aspect-square w-1/16",
  card: "aspect-[3/2] w-full max-w-sm",
} as const;

export type ImageVariant = keyof typeof IMAGE_VARIANTS;