import { BaseComponent } from "@ui/BaseComponent/BaseComponent";
import { Box } from "@ui/Box/Box";
import { Divide } from "@ui/Divide/Divide";
import { Test } from "@ui/Test/Test";

export const ProfilePage = () => {
  return (
    <Box border="none" padding="none" width="100%">
      <Box width="100%">
        <Box width="100%" border="none" padding="none">
          <img src="avatar.png" width={200} />
          <Divide orientation="vertical" width="170px" />
          <Box flexDirection="column" width="100%" border="none" padding="none">
            <Box justifyContent="space-between" width="100%" border="none">
              <span>OmniRoot</span>
              <span>около 5 часов назад</span>
            </Box>
            <Box justifyContent="space-between" width="100%" border="none">
              <span>I love anime</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
