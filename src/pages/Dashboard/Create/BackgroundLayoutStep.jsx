/**
 * BackgroundLayoutStep.jsx
 *
 * Fourth step of the create-dashboard wizard ("Background Layout").
 * The user picks how the back of the card is divided into content areas (the available layouts are defined in config/layouts.js)
 *
 * The selected layout is stored in the form field "backgroundLayout".
 * useController is used because this component both READS and WRITES the value: field.onChange also marks the form as changed
 */
import { Fieldset, RadioCard, SimpleGrid } from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { layouts } from "./config/layouts";

const BackgroundLayoutStep = () => {
  // field.value    -> current layout
  // field.onChange -> store a new layout (also marks the form as changed)
  const { field } = useController({ name: "backgroundLayout" });

  return (
    <Fieldset.Root>
      <Fieldset.Legend srOnly>Bacgkground Layout</Fieldset.Legend>

      <RadioCard.Root
        value={field.value}
        size={"lg"}
        onValueChange={(details) => field.onChange(details.value)} // details.value is the value of the selected card.
      >
        <RadioCard.Label>Select Background Layout</RadioCard.Label>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
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
