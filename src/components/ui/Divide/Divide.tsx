import { css } from "@emotion/css";
import { Box } from "@ui/Box/Box";
import { FC } from "react";

interface IDivideProps {
  width?: string;
  orientation?: "horizontal" | "vertical";
}

export const Divide: FC<IDivideProps> = ({
  width = "100px",
  orientation = "horizontal",
}) => {
  const _style = css`
    ${orientation === "horizontal" && `min-width: ${width}; min-height: 3px;`}
    ${orientation === "vertical" && `min-width: 3px; min-height: ${width};`}
    background-color: var(--secondary);
  `;
  return (
    <Box
      border="none"
      padding="none"
      radius="2"
      margin="1"
      className={_style}
    ></Box>
  );
};
