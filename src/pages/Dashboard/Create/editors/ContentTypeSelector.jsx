/**
 * ContentTypeSelector.jsx
 *
 * Drop-down menu to choose the content type of one slot of the card back (text, image, links, table).
 * The available types come from editorRegistry.js
 *
 * It is a Menu with radio items, so keyboard users get arrow-key navigation, the current type is marked with a check,
 * and screen readers announce it as a menu.
 *
 * Props:
 *  - value     : the current type ("" when nothing is chosen yet)
 *  - onChange  : called with the chosen type
 */
import { Box, Button, Menu, Portal, Text } from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";
import { CONTENT_REGISTRY } from "./editorRegistry";

const MENU_ITEM_STYLE = {
  cursor: "pointer",
  _highlighted: { bg: "menuItemHighlight" },
};

const ContentTypeSelector = ({ value, onChange }) => {
  const buttonLabel = value
    ? `Type: ${CONTENT_REGISTRY[value]?.label ?? value}`
    : "Select content type";

  return (
    <Menu.Root positioning={{ placement: "bottom-start", strategy: "fixed" }}>
      <Menu.Trigger asChild>
        <Button size={"sm"} variant={"surface"} alignSelf={"flex-start"}>
          {buttonLabel}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content bg={"overlayBg"} minW={"64"}>
            <Menu.RadioItemGroup
              value={value}
              onValueChange={(details) => onChange(details.value)}
            >
              {Object.entries(CONTENT_REGISTRY).map(([type, config]) => (
                <Menu.RadioItem key={type} value={type} {...MENU_ITEM_STYLE}>
                  <Menu.ItemIndicator>
                    <LuCheck />
                  </Menu.ItemIndicator>

                  <Box flex={"1"}>
                    <Menu.ItemText>{config.label}</Menu.ItemText>
                    <Text fontSize={"xs"} color={"inherit"} opacity={0.8}>
                      {config.description}
                    </Text>
                  </Box>
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default ContentTypeSelector;
