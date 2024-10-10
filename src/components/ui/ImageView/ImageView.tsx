import { css } from "@emotion/css";
import { FC } from "react";

interface IImageViewProps {
  src?: string;
  width?: string;
  height?: string;
  radius?: "none" | "1" | "2";
}

export const ImageView: FC<IImageViewProps> = ({
  width = "100%",
  height = "100%",
  radius = "none",
  src,
}) => {
  const _style = css`
    width: ${width};
    height: ${height};

    ${`border-radius: var(--radius-${radius});`};
  `;

  return <img src={src} className={_style} />;
};
