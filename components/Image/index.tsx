import NextImage from "next/image";

interface IImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: "responsive" | "fixed" | "intrinsic";
}

const Image = (props: IImageProps) => {
  const { src, alt, width, height, layout = "responsive" } = props;
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
    />
  );
};

export default Image;
