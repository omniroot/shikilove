import React, { FC } from "react";
import styles from "./BaseComponent.module.scss";
import clsx from "clsx";
interface IBaseComponent {
  className?: string;
  children?: React.ReactNode;
  touchable?: boolean;
  border?: boolean;
}

export const BaseComponent: FC<IBaseComponent> = ({
  children,
  className,
  touchable = false,
  border = false,
}) => {
  const _class = clsx(styles.basecomponent, className, {
    [styles.touchable]: touchable,
    [styles.border]: border,
  });

  return <div className={_class}>{children}</div>;
};
