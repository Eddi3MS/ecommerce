import { SyntheticEvent, useEffect, useState } from 'react'

export type ImageProps = {
  src: string
  alt: string
  fallback: string
}

type ImagePropsGetter = () => Omit<ImageProps, 'fallback'> & {
  onError: (e: SyntheticEvent<HTMLImageElement>) => void
}

const useImage = ({
  src: srcFromProps,
  fallback,
  alt,
}: ImageProps): { getImageProps: ImagePropsGetter } => {
  const [src, setSrc] = useState(srcFromProps)

  const onError = () => {
    setSrc(fallback)
  }

  useEffect(() => {
    setSrc(srcFromProps)
  }, [srcFromProps])

  const getImageProps: ImagePropsGetter = () => {
    return { src, alt, onError }
  }

  return { getImageProps }
}

export { useImage }
