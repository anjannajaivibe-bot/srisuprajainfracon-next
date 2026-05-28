import Image, { type ImageProps } from "next/image";
import clsx from "clsx";

type SmartImageProps = ImageProps & {
  wrapperClassName?: string;
  imageClassName?: string;
};

export default function SmartImage({
  wrapperClassName,
  imageClassName,
  className,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
  ...props
}: SmartImageProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        wrapperClassName,
        className
      )}
    >
      <Image
        {...props}
        fill={fill}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className={clsx("object-cover", imageClassName)}
      />
    </div>
  );
}