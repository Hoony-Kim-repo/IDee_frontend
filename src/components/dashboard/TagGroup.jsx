/**
 * TagList.jsx
 *
 * content of ONE tag group: a title input and a tags input.
 * (Adding and deleting whole groups is done by Field.tags.jsx, the tags input itself is TagItemsInput.jsx)
 *
 * Form values handled here (index = position of the group in 'tags'):
 *  - tags.{index}.tagTitle : string
 *  - tags.{index}.items    : string[]  (plain strings, not objects)
 */
import { Field, Input, VStack } from "@chakra-ui/react";
import { get, useFormContext } from "react-hook-form";
import { MAX_TAG_TITLE_LENGTH } from "../../constants/tags";
import TagItemsInput from "./TagItemsInput";

const TagGroup = ({ index }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const titleError = get(errors, `tags.${index}.tagTitle`);

  return (
    <VStack align={"stretch"} gap={"3"}>
      <Field.Root invalid={!!titleError} flex={"1"}>
        <Field.Label>Group Title</Field.Label>
        <Input
          {...register(`tags.${index}.tagTitle`)}
          maxLength={MAX_TAG_TITLE_LENGTH}
          autoComplete="off"
          placeholder="e.g. Skills"
        />

        <Field.ErrorText>{titleError?.message}</Field.ErrorText>
      </Field.Root>

      <TagItemsInput name={`tags.${index}.items`} />
    </VStack>
  );
};

export default TagGroup;
