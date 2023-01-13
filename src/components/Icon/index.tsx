import { FC } from "react";

interface IIconProp {
  name?: string;
}

const Icon: FC<IIconProp> = ({ name }) => {
  if (!name) return null;

  const getImageUrl = (name: string) => {
    return new URL(
      `../../assets/images/${name.toLowerCase()}.png`,
      import.meta.url
    ).href;
  };
  const IMAGE_URL = getImageUrl(name);
  return !(IMAGE_URL.split("/").pop() !== "undefined") ? null : <img src={IMAGE_URL} />;
};

export default Icon;
