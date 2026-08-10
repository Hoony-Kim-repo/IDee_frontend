import { Fieldset, RadioCard, SimpleGrid } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { layouts } from "./config/layouts";

const BackgroundLayoutStep = () => {
  const { setValue, watch } = useFormContext();

  const selectedLayout = watch("backgroundLayout");

  return (
    <Fieldset.Root>
      <RadioCard.Root
        value={selectedLayout}
        size={"lg"}
        onChange={(val) => setValue("backgroundLayout", val.target.value)}
      >
        <RadioCard.Label>Select Background Layout</RadioCard.Label>

        <SimpleGrid columns={3} gap={6}>
          {layouts.map((layout) => {
            const Preview = layout.preview;

            return (
              <RadioCard.Item key={layout.value} value={layout.value}>
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl>
                  <Preview />

                  <RadioCard.ItemContent>
                    <RadioCard.ItemText>{layout.title}</RadioCard.ItemText>
                    <RadioCard.ItemDescription>
                      {layout.description}
                    </RadioCard.ItemDescription>
                  </RadioCard.ItemContent>

                  <RadioCard.ItemIndicator />
                </RadioCard.ItemControl>
                <RadioCard.ItemAddon>{layout.addText}</RadioCard.ItemAddon>
              </RadioCard.Item>
            );
          })}
        </SimpleGrid>
      </RadioCard.Root>
    </Fieldset.Root>
  );
};

export default BackgroundLayoutStep;
