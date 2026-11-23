/**
 * BackgroundContentStep.jsx
 *
 * Fifth step of the create-dashboard wizard ("Background contents").
 * Shows one content editor per slot of the layout selected in the previous step, arranged like the layout itself (config/layouts.js).
 *
 * The form always holds content for the largest layout (see config/defaultValues.js),
 * so this step only decides how many editors to show.
 * Hidden slots keep their data, which mans switching to a smaller layout and back does not lose anything.
 * The submitted data is cut to the current layout in the Zod schema.
 *
 * Note: The content belongs to the slot NUMBER, not to its name.
 * Switching between two layouts with the same number of slots keeps the content in the same slot
 */
import { Box, Grid, Heading } from "@chakra-ui/react";
import { useWatch } from "react-hook-form";
import { layouts } from "./config/layouts";
import BackgroundContentEditor from "./editors/BackgroundContentEditor";

const BackgroundContentStep = () => {
  // Selected layout value from the form (inside <FormProvider> no 'control' is needed)
  const selectedLayoutValue = useWatch({ name: "backgroundLayout" });

  // Lookup Layout config
  const selectedLayout = layouts.find(
    (layout) => layout.value === selectedLayoutValue,
  );

  if (!selectedLayout) return null;

  const { slots, layout } = selectedLayout;

  return (
    <Box>
      <Heading size="md" mb={6}>
        Configure Background Contents
      </Heading>

      <Grid
        templateColumns={{ base: "minmax(0, 1fr)", md: layout.templateColumns }}
        templateRows={{ base: "none", md: `repeat(${layout.rowCounts}, auto)` }}
        templateAreas={{ base: "none", md: layout.areas }}
        gap={6}
      >
        {slots.map((slot, index) => (
          // minW={0}: a grid cell must not be pushed wider by a wide editor (for example the table editor).
          <Box key={slot.id} gridArea={{ base: "auto", md: slot.id }} minW={0}>
            <Heading size={"sm"}>{slot.label}</Heading>

            <BackgroundContentEditor index={index} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default BackgroundContentStep;
