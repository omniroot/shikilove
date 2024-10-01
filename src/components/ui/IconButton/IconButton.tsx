import { BaseComponent, IBaseComponent } from "@ui/BaseComponent/BaseComponent";
import styles from "./IconButton.module.scss";
import { FC } from "react";

interface IIconButtonProps extends IBaseComponent {}

export const IconButton: FC<IIconButtonProps> = ({
  children,
  border = "default",
  radius = "1",
  padding = "1",
  jsutifyContent = "center",
  alignItems = "center",
  touchable = true,
  ...rest
}) => {
  return (
    <BaseComponent
      {...rest}
      border={border}
      radius={radius}
      padding={padding}
      jsutifyContent={jsutifyContent}
      alignItems={alignItems}
      touchable={touchable}
    >
      {children}
    </BaseComponent>
  );
};
