import { css } from "@emotion/css";
import { FC } from "react";

interface ITestProps {
  children?: React.ReactNode;
  justifyContent?: "start" | "center" | "end";
  alignItems?: "start" | "center" | "end";
}

export const Test: FC<ITestProps> = ({
  children,
  justifyContent,
  alignItems,
}) => {
  const _style = css`
    display: flex;
    width: 250px;
    height: 250px;
    border: 1px solid brown;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
  return <div className={_style}>{children}</div>;
};
