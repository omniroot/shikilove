import { useFetchCurrentUser } from "@/shared/hooks/useFetchCurrentUser";
import { Box } from "@ui/Box/Box";
import { Divide } from "@ui/Divide/Divide";
import { Typography } from "@ui/Typography/Typography";

export const UserInfoCard = () => {
  // get user info
  const { loading, nickname, lastOnlineAt, avatarUrl } = useFetchCurrentUser();

  return (
    <Box width="100%" border="none" padding="none">
      <img src={avatarUrl} width={200} />
      <Divide orientation="vertical" width="170px" />
      <Box flexDirection="column" width="100%" border="none" padding="none">
        <Box justifyContent="space-between" width="100%" border="none">
          <Typography size="3">{nickname}</Typography>
          <Typography size="4">{lastOnlineAt}</Typography>
        </Box>
        <Box justifyContent="space-between" width="100%" border="none">
          <Typography>I love anime</Typography>
        </Box>
      </Box>
    </Box>
  );
};
