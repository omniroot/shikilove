import React, { FC } from "react";
import styles from "./BaseComponent.module.scss";
import clsx from "clsx";
interface IBaseComponent {
  className?: string;
  children?: React.ReactNode;
  touchable?: boolean;
}

export const BaseComponent: FC<IBaseComponent> = ({
  children,
  className,
  touchable = false,
}) => {
  const _class = clsx(styles.basecomponent, className, {
    [styles.touchable]: touchable,
  });

  return <div className={_class}>{children}</div>;
};
