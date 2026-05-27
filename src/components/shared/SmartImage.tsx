import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export default function SmartImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: SmartImageProps) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}