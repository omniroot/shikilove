import { css } from "@emotion/css";
import { IBaseComponent } from "@ui/BaseComponent/BaseComponent";
import { Box } from "@ui/Box/Box";
import { FC } from "react";

interface IButtonProps extends IBaseComponent {
  children?: React.ReactNode;
}
export const Button: FC<IButtonProps> = ({ children, ...rest }) => {
  const _style = css`
    padding: var(--padding);
    border-radius: calc(var(--radius) / 1.6);
    color: var(--color-primary);
    background-color: var(--color-accent);
    border: none;
    cursor: pointer;
    transition: all 200ms;
    font-size: var(--text-size-h4);
    font-family: inherit;
    font-weight: bold;

    :active {
      transform: scale(0.95);
    }
  `;

  return (
    <Box
      className={_style}
      {...rest}
      backgroundColor="accent"
      textColor="primary"
    >
      {children}
    </Box>
  );
};
