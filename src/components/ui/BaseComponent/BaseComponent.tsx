import React, { FC } from "react";
import styles from "./BaseComponent.module.scss";
import clsx from "clsx";
interface IBaseComponent {
  className?: string;
  children?: React.ReactNode;
  touchable?: boolean;
  border?: boolean | "default" | "active";
}

export const BaseComponent: FC<IBaseComponent> = ({
  children,
  className,
  touchable = false,
  border = false,
}) => {
  const _class = clsx(styles.basecomponent, className, {
    [styles.touchable]: touchable,
    [styles.border_default]: border === "default",
    [styles.border_active]: border === "active",
  });

  return <div className={_class}>{children}</div>;
};
