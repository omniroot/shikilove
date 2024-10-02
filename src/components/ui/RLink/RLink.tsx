import { css } from "@emotion/css";
import { BaseComponent, IBaseComponent } from "@ui/BaseComponent/BaseComponent";
import { Box } from "@ui/Box/Box";
import clsx from "clsx";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface IRLinkProps extends IBaseComponent {}

export const RLink: FC<IRLinkProps> = ({
  children,
  className,
  clickable = true,
  as = Link,
  border = "transparent",
  to,
}) => {
  const isCurrentPage = useLocation().pathname === to;

  const _style = css`
    color: inherit;
    text-decoration: none;

    :hover {
      color: var(--text-secondary);
    }

    ${isCurrentPage && "color: var(--accent);"}
  `;

  const _class = clsx(className, _style);

  return (
    <BaseComponent
      as={as}
      to={to}
      clickable={clickable}
      border={border}
      className={_class}
    >
      {children}
    </BaseComponent>
  );
};
