import Image from 'next/image'
import { PropsWithClassName } from 'app/utils'
import { Dot } from 'app/components/generic/Dot'

export interface ImageWithPlaceholderProps extends PropsWithClassName {
  size: number
  src: string
  alt: string
}

export const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  className,
  size,
  src,
  alt,
}) => {
  return src && alt ? (
    <Image
      className={`rounded-full ${className}`}
      src={src}
      width={size}
      height={size}
      alt={alt}
    ></Image>
  ) : (
    <Dot className={`bg-gray-200 ${className}`} />
  )
}
