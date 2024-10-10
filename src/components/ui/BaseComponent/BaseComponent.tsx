import React, { FC, ReactElement, ReactNode } from "react";
import styles from "./BaseComponent.module.scss";
import clsx from "clsx";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

type IColors =
  | "primary"
  | "secondary"
  | "accent"
  | "text"
  | "text-secondary"
  | "transparent"
  | "red"
  | "violet"
  | "blue"
  | "green"
  | "yellow";

export interface IBaseComponent {
  className?: string;
  as?: React.ElementType | "div" | typeof Link;
  width?:
    | string
    | "max-content"
    | "min-content"
    | "fit-content"
    | "auto"
    | "stretch";
  height?:
    | string
    | "max-content"
    | "min-content"
    | "fit-content"
    | "auto"
    | "stretch";
  children?: React.ReactNode;
  clickable?: boolean;
  hoverable?: boolean;
  border?: "none" | "transparent" | "default" | "active";
  radius?: "none" | "1" | "2";
  padding?: "none" | "1" | "2";
  flexDirection?: "row" | "column";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe center"
    | "unsafe center";
  alignItems?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "anchor-center"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center";
  gap?: "none" | "1" | "2";
  margin?: "none" | "1" | "2";
  textColor?: IColors;
  backgroundColor?: IColors;
  pseudoHide?: boolean;
  to?: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: () => void;
}

export const BaseComponent: FC<IBaseComponent> = ({
  children,
  className,
  width = "auto",
  height = "auto",
  clickable = false,
  hoverable = false,
  border = "none",
  radius = "none",
  padding = "none",
  margin = "none",
  flexDirection = "row",
  flexWrap = "nowrap",
  justifyContent = "start",
  alignItems = "start",
  textColor = "text",
  backgroundColor = "transparent",
  gap = "none",
  pseudoHide = false,
  as = "div",
  onClick = () => {},
  ...rest
}) => {
  const onBaseClickHandle = () => {
    onClick && onClick();
  };

  const _style = css`
    ${clickable ? "cursor: pointer;" : "cursor: default;"}
    ${clickable && " *{ cursor: pointer; }"}
    ${hoverable && ":hover {border: var(--border-accent);}"}
    ${border === "none" && "border: var(--border-none);"}
    ${border === "transparent" && "border: var(--border-transparent);"}
    ${border === "default" && "border: var(--border-default);"}
    ${border === "active" && "border: var(--border-active);"}
    ${radius === "1" && "border-radius: var(--radius-1);"}
    ${radius === "2" && "border-radius: var(--radius-2);"}
    ${padding === "1" && "padding: var(--padding-1);"}
    ${padding === "2" && "padding: var(--padding-2);"}
    ${margin === "1" && "margin: var(--margin-1);"}
    ${margin === "2" && "margin: var(--margin-2);"}
    ${gap === "1" && "gap: var(--gap-1);"}
    ${gap === "2" && "gap: var(--gap-2);"}

  flex-wrap: ${flexWrap};
    width: ${width};
    height: ${height};
    text-decoration: none;
    ${`color: var(--color-${textColor});`}
    ${`background-color: var(--color-${backgroundColor});`}
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
    <Component {...rest} className={_class} onClick={onBaseClickHandle}>
      {children}
    </Component>
  );
};
