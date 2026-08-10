import { Button, Popover, Portal, Text } from "@chakra-ui/react";
import { CONTENT_REGISTRY } from "./editorRegistry";

const ContentTypeSelector = ({ value, onChange }) => {
  return (
    <Popover.Root
      positioning={{ placement: "bottom-start", strategy: "fixed" }}
    >
      <Popover.Trigger asChild>
        <Button size={"sm"} variant={"surface"} mb={"2"}>
          {value ? "Change type" : "Select Content Type"}
        </Button>
      </Popover.Trigger>

      <Portal>
        <Popover.Positioner>
          <Popover.Content bg={"gray.900"} borderRadius="lg">
            <Popover.Body>
              {Object.entries(CONTENT_REGISTRY).map(([type, config]) => {
                return (
                  <Popover.CloseTrigger asChild>
                    <Button
                      key={type}
                      onClick={() => onChange(type)}
                      m={1}
                      borderRadius="lg"
                      cursor="pointer"
                    >
                      <Text>{config.label}</Text>
                    </Button>
                  </Popover.CloseTrigger>
                );
              })}
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};

export default ContentTypeSelector;
