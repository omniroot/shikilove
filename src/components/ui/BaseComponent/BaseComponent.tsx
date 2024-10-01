import React, { FC } from "react";
import styles from "./BaseComponent.module.scss";
import clsx from "clsx";
interface IBaseComponent {
  className?: string;
  children?: React.ReactNode;
  touchable?: boolean;
  border?: boolean | "default" | "active";
  radius?: boolean | "1" | "2";
}

export const BaseComponent: FC<IBaseComponent> = ({
  children,
  className,
  touchable = false,
  border = false,
  radius = false,
}) => {
  const _class = clsx(styles.basecomponent, className, {
    [styles.touchable]: touchable,
    [styles.border_default]: border === "default",
    [styles.border_active]: border === "active",
    [styles.radius_1]: radius === "1",
    [styles.radius_2]: radius === "2",
  });

  return <div className={_class}>{children}</div>;
};
