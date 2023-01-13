import { FC } from "react";

interface IIconProp {
  name?: string;
  width?: string | number;
  height?: string | number;
}

export const getImageUrl = (name: string) => {
  return new URL(
    `../../assets/images/${name.toLowerCase()}.png`,
    import.meta.url
  ).href;
};

export const checkImageExist = (url: string): boolean =>
  url.split("/").pop() !== "undefined";

const Icon: FC<IIconProp> = ({ name, width, height }) => {
  if (!name) return null;
  const IMAGE_URL = getImageUrl(name);
  return !checkImageExist(IMAGE_URL) ? null : (
    <img src={IMAGE_URL} width={width} height={height} />
  );
};

export default Icon;
