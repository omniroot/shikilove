import { BaseComponent, IBaseComponent } from "@ui/BaseComponent/BaseComponent";
import styles from "./IconButton.module.scss";
import { FC } from "react";

interface IIconButtonProps extends IBaseComponent {}

export const IconButton: FC<IIconButtonProps> = ({
  children,
  border = "none",
  radius = "1",
  padding = "1",
  justifyContent = "center",
  alignItems = "center",
  gap = "1",
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
      gap={gap}
      clickable={clickable}
    >
      {children}
    </BaseComponent>
  );
};
