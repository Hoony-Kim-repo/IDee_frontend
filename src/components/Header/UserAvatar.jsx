import { Avatar, Menu, Portal, Separator } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../Auth";
import { QUERY_KEYS } from "../../constants/queryKeys";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import MenuItem from "../common/MenuItem";

const UserAvatar = () => {
  const { user } = useAuth();
  const { data: profile } = useProfile();
  const { logout } = useAuthActions();

  const ref = useRef(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getAnchorRect = () => ref.current.getBoundingClientRect();

  const imageSrc = profile?.profileImage?.url;

  const name = profile?.fullName || user?.nickname || "User";

  if (!user) {
    return null;
  }

  const onUserLogout = async () => {
    try {
      await logout();

      // Remove all user-related cached data
      queryClient.removeQueries({ queryKey: QUERY_KEYS.PROFILE });
      queryClient.removeQueries({ queryKey: QUERY_KEYS.USER });

      navigate("/", { replace: true });
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <Menu.Root positioning={{ getAnchorRect }} size={"md"}>
      <Menu.Trigger rounded="full" focusRing={"outside"}>
        <Avatar.Root variant={"outline"} ref={ref} cursor={"pointer"}>
          <Avatar.Fallback name={name} />
          {imageSrc && <Avatar.Image src={imageSrc} />}
        </Avatar.Root>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem
              value="myprofile"
              highlightBg={"avatarMenuItemHighlight"}
              cursor={"pointer"}
            >
              My Dashboard
            </MenuItem>
            <MenuItem
              value="settings"
              highlightBg={"avatarMenuItemHighlight"}
              cursor={"pointer"}
            >
              Settings
            </MenuItem>

            <Separator />

            <MenuItem
              value="logout"
              highlightBg={"avatarMenuItemHighlightError"}
              color="fg.error"
              cursor={"pointer"}
              onClick={onUserLogout}
            >
              Log out
            </MenuItem>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default UserAvatar;
