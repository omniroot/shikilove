import { CSSProperties, FC } from "react";
import styles from "./BaseComponent.module.scss";
import clsx from "clsx";
export interface IBaseComponent {
  className?: string;
  children?: React.ReactNode;
  touchable?: boolean;
  border?: boolean | "default" | "active";
  radius?: boolean | "1" | "2";
  padding?: boolean | "1" | "2";
  flexDirection?: "row" | "column";
  jsutifyContent?: "start" | "center" | "end";
  alignItems?: "start" | "center" | "end";
}

export const BaseComponent: FC<IBaseComponent> = ({
  children,
  className,
  touchable = false,
  border = false,
  radius = false,
  padding = false,
  flexDirection = "row",
  jsutifyContent = "start",
  alignItems = "start",
}) => {
  const _class = clsx(styles.basecomponent, className, {
    [styles.touchable]: touchable,
    [styles.border_default]: border === "default",
    [styles.border_active]: border === "active",
    [styles.radius_1]: radius === "1",
    [styles.radius_2]: radius === "2",
    [styles.padding_1]: padding === "1",
    [styles.padding_2]: padding === "2",
  });

  const _style: CSSProperties = {
    flexDirection: flexDirection,
    justifyContent: jsutifyContent,
    alignItems: alignItems,
  };

  return (
    <div className={_class} style={_style}>
      {children}
    </div>
  );
};
