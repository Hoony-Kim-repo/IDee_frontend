import { Box, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { layouts } from "./config/layouts";
import BackgroundContentEditor from "./editors/BackgroundContentEditor";

const BackgroundContentStep = () => {
  const { control, watch } = useFormContext();

  // Selected Layout value from RHF
  const selectedLayoutValue = watch("backgroundLayout");

  // Lookup Layout config
  const selectedLayout = useMemo(() => {
    return layouts.find((layout) => layout.value === selectedLayoutValue);
  }, [selectedLayoutValue]);

  // Derived values from layout config
  const slots = selectedLayout?.slots ?? [];
  const contentCount = slots.length;
  const layout = selectedLayout?.layout;

  // RHF FieldArray controller
  const { fields, replace } = useFieldArray({
    control,
    name: "backgdroundContents",
  });

  // Sync fieldArray length with layout contentCount
  useEffect(() => {
    if (!contentCount) return;

    if (fields.length === contentCount) return;

    const nextFields = Array.from(
      { length: contentCount },
      (_, index) =>
        fields[index] ?? {
          type: "",
          data: {},
        },
    );

    replace(nextFields);
  }, [contentCount, fields, replace]);

  // Safety Guards
  if (!selectedLayout || !layout) return null;

  return (
    <Box>
      <Heading size="md" mb={6}>
        Configure Background Contents
      </Heading>

      <Grid
        templateColumns={layout.templateColumns}
        templateRows={`repeat(${layout.rowCounts}), auto`}
        templateAreas={layout.areas}
      >
        {slots.map((slot, index) => (
          <Box key={slot.id} gridArea={slot.id}>
            <Heading size={"sm"}>{slot.label}</Heading>

            <BackgroundContentEditor index={index} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default BackgroundContentStep;
