/**
 * Field.Tags.jsx
 *
 * Optional tag groups of the create/edit profile form.
 * A group is a title plus a list of tags, e.g. "Skills": React, Vue.
 *
 * Form value shape: tags = [{ tagTitle: string, items: string[] }]
 * This component manages the list of groups (add / delete);
 * each group is edited by TagList.jsx.
 */
import {
  Badge,
  Box,
  Button,
  Fieldset,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { MAX_TAG_GROUPS } from "../../constants/tags";
import TagGroup from "./TagGroup";

const TagsField = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  const canAddMore = fields.length < MAX_TAG_GROUPS;

  return (
    <Fieldset.Root>
      <Fieldset.Legend>
        Tags{" "}
        <Badge size={"xs"} variant={"surface"}>
          Optional
        </Badge>
      </Fieldset.Legend>

      {/* Visible text, because a disabled button cannot be focused and screen reader users would never learn why it is disabled. */}
      <Fieldset.HelperText>
        {canAddMore
          ? "Group your skills or interests under a title, e.g. Skills."
          : `You can add up to ${MAX_TAG_GROUPS} tag groups. Delete one to add another.`}
      </Fieldset.HelperText>

      <Fieldset.Content>
        <VStack align={"start"} gap={"6"}>
          {/* key = {field.id} (not the index) keeps the typed values on the right group when a group in the middle is deleted. */}
          {fields.map((field, index) => (
            <Box
              key={field.id}
              borderWidth={"1px"}
              borderRadius={"lg"}
              p={"4"}
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
            >
              {/* Card Header: the group-level action lives here, away from the inputs, so it never has to line up with them. */}
              <HStack justify={"space-between"} mb={"3"}>
                <Text fontWeight={"semibold"}>Group {index + 1}</Text>

                <Button
                  type="button"
                  size={"xs"}
                  variant={"ghost"}
                  colorPalette={"red"}
                  aria-label={`Delete tag group ${index + 1}`}
                  onClick={() => remove(index)}
                >
                  Delete
                </Button>
              </HStack>

              <TagGroup index={index} />
            </Box>
          ))}

          <Button
            type={"button"}
            alignSelf={"flex-start"}
            disabled={!canAddMore}
            onClick={() => append({ tagTitle: "", items: [] })}
          >
            Add Tag Group ({fields.length}/{MAX_TAG_GROUPS})
          </Button>
        </VStack>
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

export default TagsField;
