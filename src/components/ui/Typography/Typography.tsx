import { css } from "@emotion/css";
import { BaseComponent, IBaseComponent } from "@ui/BaseComponent/BaseComponent";
import { Box } from "@ui/Box/Box";
import clsx from "clsx";
import { FC } from "react";

interface ITypographyProps extends IBaseComponent {
  size?: "1" | "2" | "3" | "4" | "5" | "6";
  weight?: "normal" | "bold";
}

export const Typography: FC<ITypographyProps> = ({
  className,
  size = "5",
  children,
  ...rest
}) => {
  const _style = css`
    ${`font-size: var(--text-size-h${size});`}
  `;

  const _class = clsx(_style, className);
  return (
    <BaseComponent {...rest} className={_class}>
      {children}
    </BaseComponent>
  );
};
