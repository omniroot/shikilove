import { css } from "@emotion/css";
import { FC } from "react";

interface IButtonProps {
  children?: React.ReactNode;
}
export const Button: FC<IButtonProps> = ({ children }) => {
  const _style = css`
    padding: var(--padding);
    border-radius: calc(var(--radius) / 1.6);
    background-color: var(--color-accent);
    color: var(--color-text);
    border: none;
    cursor: pointer;
    transition: all 200ms;
    font-family: inherit;

    :active {
      transform: scale(0.95);
    }
  `;

  return <button className={_style}>{children}</button>;
};
