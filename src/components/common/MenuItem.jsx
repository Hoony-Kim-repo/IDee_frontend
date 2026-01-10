import { Menu } from "@chakra-ui/react";

const MenuItem = ({ value, highlightBg, cursor, children, ...props }) => {
  return (
    <Menu.Item
      value={value}
      _highlighted={{ bg: highlightBg }}
      cursor={cursor}
      {...props}
    >
      {children}
    </Menu.Item>
  );
};

export default MenuItem;
