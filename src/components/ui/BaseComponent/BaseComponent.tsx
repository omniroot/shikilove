import React, { FC } from "react";
import styles from "./BaseComponent.module.scss";
import clsx from "clsx";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

export interface IBaseComponent {
  className?: string;
  as?: React.ElementType | "div" | typeof Link;
  children?: React.ReactNode;
  clickable?: boolean;
  hoverable?: boolean;
  border?: "none" | "transparent" | "default" | "active";
  radius?: "none" | "1" | "2";
  padding?: "none" | "1" | "2";
  flexDirection?: "row" | "column";
  justifyContent?: "start" | "center" | "end";
  alignItems?: "start" | "center" | "end";
  gap?: "none" | "1" | "2";
  pseudoHide?: boolean;
  to?: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const BaseComponent: FC<IBaseComponent> = ({
  children,
  className,
  clickable = false,
  hoverable = false,
  border = "none",
  radius = "none",
  padding = "none",
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "start",
  gap = "none",
  pseudoHide = false,
  as = "div",
  ...rest
}) => {
  const _style = css`
    ${clickable ? "cursor: pointer;" : "cursor: default;"}
    ${hoverable && ":hover {border: var(--border-default);}"}
    ${border === "none" && "border: var(--border-none);"}
    ${border === "transparent" && "border: var(--border-transparent);"}
    ${border === "default" && "border: var(--border-default);"}
    ${border === "active" && "border: var(--border-active);"}
    ${radius === "1" && "border-radius: var(--radius-1);"}
    ${radius === "2" && "border-radius: var(--radius-2);"}
    ${padding === "1" && "padding: var(--padding-1);"}
    ${padding === "2" && "padding: var(--padding-2);"}
    ${gap === "1" && "gap: var(--gap-1);"}
    ${gap === "2" && "gap: var(--gap-2);"}

    opacity: 1;
    ${pseudoHide
      ? "visibility: hidden;width: 1px; opacity: 0;"
      : "visibility: visible;"}
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;

  const _class = clsx(className, styles.basecomponent, _style);
  const Component = as;

  return (
    <Component {...rest} className={_class}>
      {children}
    </Component>
  );
};
