// components/images/imageVariants.ts
export const IMAGE_VARIANTS = {
  banner: "aspect-video",
  thumbnail: "aspect-square",
  icon: "aspect-square",
  card: "aspect-[3/2]",
} as const;

export type ImageVariant = keyof typeof IMAGE_VARIANTS;