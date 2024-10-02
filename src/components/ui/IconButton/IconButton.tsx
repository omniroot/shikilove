import { BaseComponent, IBaseComponent } from "@ui/BaseComponent/BaseComponent";
import styles from "./IconButton.module.scss";
import { FC } from "react";

interface IIconButtonProps extends IBaseComponent {}

export const IconButton: FC<IIconButtonProps> = ({
  children,
  border = "default",
  radius = "1",
  padding = "1",
  justifyContent = "center",
  alignItems = "center",
  clickable = true,
  ...rest
}) => {
  return (
    <BaseComponent
      {...rest}
      border={border}
      radius={radius}
      padding={padding}
      justifyContent={justifyContent}
      alignItems={alignItems}
      clickable={clickable}
    >
      {children}
    </BaseComponent>
  );
};
