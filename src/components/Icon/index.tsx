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
  return (
    <img
      src={getImageUrl(name)}
      onError={({ currentTarget }) => currentTarget.classList.add("hidden")}
    />
  );
};

export default Icon;
