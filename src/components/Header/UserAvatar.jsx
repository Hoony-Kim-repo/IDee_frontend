import { Avatar, Menu, Portal, Separator } from "@chakra-ui/react";
import { useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import MenuItem from "../common/MenuItem";

const UserAvatar = () => {
  const { user } = useAuth();
  const { data: profile } = useProfile();

  const ref = useRef(null);
  const getAnchorRect = () => ref.current.getBoundingClientRect();

  const imageSrc = profile?.profileImage?.url;

  const name = profile?.fullName || user?.nickname || "User";

  if (!user) {
    return null;
  }

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
