import { BaseComponent } from "@ui/BaseComponent/BaseComponent";
import { Box } from "@ui/Box/Box";
import { Test } from "@ui/Test/Test";

export const ProfilePage = () => {
  return (
    <div>
      <span>ProfilePage</span>
      <Box>Hello world</Box>
      <Box>Subscribe</Box>
      <Test justifyContent="center" alignItems="center">
        123
      </Test>
    </div>
  );
};
