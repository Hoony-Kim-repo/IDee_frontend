/**
 * TagItemsInput.jsx
 *
 * The tags input of ONE tag group (the "items" array of a group).
 *
 * It is connected to the form with 'useController'. The hook gives us:
 *  - field.value       : the whole array, e.g. ["react", "vue"]
 *  - field.onChange    : Stores a new array in the form
 *  - fieldState        : The validation state/error of this field
 * Why not register()? TagsInput is not a plain <input> and its value is an array, so it must be controlled.
 *
 * Props:
 *  - name : form path of the array, e.g. "tags.0.items"
 *
 * The tags input is Chakra's TagsInput, which handles keyboard navigation, pasting several tags and screen reader announcements for us.
 */

import { Field, TagsInput, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { useController } from "react-hook-form";
import { MAX_TAG_LENGTH, MAX_TAGS_PER_GROUP } from "../../constants/tags";

// TagsInput calls validate() before adding a tag: return true to accept it.
const isNewTag = ({ inputValue, value }) =>
  !value.some((tag) => tag.toLowerCase() === inputValue.trim().toLowerCase());

const TagItemsInput = ({ name }) => {
  // Inside <FormProvider> no 'control' argument is needed.
  const { field, fieldState } = useController({ name });
  const [notice, setNotice] = useState("");

  const tags = field.value;

  const isFull = field.value.length >= MAX_TAGS_PER_GROUP;

  return (
    <Field.Root invalid={fieldState.invalid}>
      <TagsInput.Root
        colorPalette={"blue"}
        value={field.value}
        onValueChange={(details) => {
          setNotice("");
          field.onChange(details.value);
        }}
        // Called when validate() refuses a tag (a duplicate).
        onValueInvalid={() => setNotice("That tag is already added.")}
        max={MAX_TAGS_PER_GROUP}
        maxLength={MAX_TAG_LENGTH}
        validate={isNewTag}
        // Text that was typed but not confirmed with Enter becomes a tag when the input loses focus, instead of being lost.
        blurBehavior="add"
        addOnPaste
      >
        <TagsInput.Label>Tags</TagsInput.Label>
        <TagsInput.Control>
          <TagsInput.Input
            disabled={isFull}
            placeholder={
              isFull
                ? `Maximum ${MAX_TAGS_PER_GROUP} tags`
                : "Type a tag, press Enter"
            }
          />
        </TagsInput.Control>

        <Wrap mt={"2"} gap={"2"}>
          {tags.map((tag, tagIndex) => (
            <TagsInput.Item key={tag} index={tagIndex} value={tag}>
              <TagsInput.ItemPreview rounded={"full"}>
                <TagsInput.ItemText>{tag}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger tabIndex={0} />
              </TagsInput.ItemPreview>
            </TagsInput.Item>
          ))}
        </Wrap>
      </TagsInput.Root>

      {/* At the limit the library silently ignores new tags, so we explain it here */}
      <Field.HelperText
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
        fontVariantNumeric={"tabular-nums"}
      >
        <span>
          {notice ||
            (isFull ? "Maximum reached" : "Press Enter or comma to add a tag")}
        </span>
        <span>
          {field.value.length}/{MAX_TAGS_PER_GROUP}
        </span>
      </Field.HelperText>
      <Field.ErrorText>{fieldState.error?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default TagItemsInput;
