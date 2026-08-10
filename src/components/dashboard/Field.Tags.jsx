import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import TagList from "./TagList";

const MAX_TAG_GROUPS = 2;

const TagsField = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  return (
    <Box>
      <VStack align={"start"}>
        {fields.map((field, index) => (
          <Box key={field.id}>
            <TagList index={index} />
            <Button onClick={() => remove(index)}>Delete</Button>
          </Box>
        ))}
      </VStack>

      {fields.length < MAX_TAG_GROUPS && (
        <Button
          mt={4}
          size={"sm"}
          type={"button"}
          onClick={() => append({ tagTitle: "", items: [] })}
        >
          Add New Tag Group
        </Button>
      )}

      {fields.length >= MAX_TAG_GROUPS && (
        <Text mt={2} fontSize={"sm"}>
          You can add up to {MAX_TAG_GROUPS} tag groups.
        </Text>
      )}
    </Box>
  );
};

export default TagsField;
