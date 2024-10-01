import { FC } from "react";
import styles from "./BaseComponent.module.scss";
import clsx from "clsx";
import { css } from "@emotion/css";

export interface IBaseComponent {
  className?: string;
  children?: React.ReactNode;
  touchable?: boolean;
  border?: boolean | "default" | "active";
  radius?: boolean | "1" | "2";
  padding?: boolean | "1" | "2";
  flexDirection?: "row" | "column";
  justifyContent?: "start" | "center" | "end";
  alignItems?: "start" | "center" | "end";
}

export const BaseComponent: FC<IBaseComponent> = ({
  children,
  className,
  touchable = false,
  border = false,
  radius = false,
  padding = false,
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "start",
}) => {
  const _style = css`
    ${touchable ? "cursor: pointer;" : "cursor: default;"}
    ${border === "default" && "border: var(--border-default);"}
    ${border === "active" && "border: var(--border-active);"}
    ${radius === "1" && "border-radius: var(--radius-1);"}
    ${radius === "2" && "border-radius: var(--radius-2);"}
    ${padding === "1" && "padding: var(--padding-1);"}
    ${padding === "2" && "padding: var(--padding-2);"}
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;

  const _class = clsx(styles.basecomponent, _style, className);

  return <div className={_class}>{children}</div>;
};
