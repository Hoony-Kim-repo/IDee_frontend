import {
  Field,
  HStack,
  IconButton,
  Input,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { LuCheckCheck, LuPencil, LuUndo } from "react-icons/lu";

const MAX_TAG_ITEM = 5;

const TagList = ({ index }) => {
  const { control, setValue, watch } = useFormContext();
  // Watch tag title from RHF state.
  const tagName = watch(`tags.${index}.tagTitle`);

  // UI editing state
  const [isEditing, setIsEditing] = useState(false);
  const [tempTagName, setTempTagName] = useState(tagName || "");
  const [tagValue, setTagValue] = useState("");

  const { fields, append, remove } = useFieldArray({
    control,
    name: `tags.${index}.items`,
  });

  const startEdit = () => {
    setTempTagName(tagName || "");
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmed = tempTagName.trim();

    if (!trimmed) return;

    setValue(`tags.${index}.tagTitle`, trimmed, {
      shouldDirty: true,
      shouldValidate: true,
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempTagName(tagName || "");
    setIsEditing(false);
  };

  const handleListAdd = () => {
    const trimmed = tagValue.trim();

    if (!trimmed) return;

    const duplicate = fields.some(
      (item) => item.value.toLowerCase() === trimmed.toLowerCase(),
    );

    if (duplicate) {
      setTagValue("");
      return;
    }

    if (fields.length >= MAX_TAG_ITEM) return;

    append({ value: trimmed });

    setTagValue("");
  };

  return (
    <Field.Root>
      {isEditing ? (
        <HStack>
          <Input
            placeholder="Tag Title"
            autoFocus
            value={tempTagName}
            onChange={(e) => setTempTagName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSave();
              }
            }}
          />

          <IconButton
            size={"xs"}
            variant={"ghost"}
            aria-label="Save Tag Name"
            disabled={tempTagName.trim() === ""}
            onClick={handleSave}
          >
            <LuCheckCheck />
          </IconButton>

          <IconButton
            size={"xs"}
            variant={"ghost"}
            aria-label="Cancel Edit"
            onClick={handleCancel}
          >
            <LuUndo />
          </IconButton>
        </HStack>
      ) : (
        <HStack>
          <Field.Label>{tagName || "New Tag"}</Field.Label>
          <IconButton
            size={"xs"}
            variant={"ghost"}
            aria-label="Edit Tag Name"
            onClick={startEdit}
          >
            <LuPencil />
          </IconButton>
        </HStack>
      )}

      <HStack>
        {fields.length < MAX_TAG_ITEM ? (
          <>
            <Input
              placeholder="value"
              value={tagValue}
              onChange={(e) => setTagValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleListAdd();
                }
              }}
            />

            <IconButton
              size={"xs"}
              variant={"ghost"}
              aria-label="Add Item"
              disabled={tagValue.trim() === ""}
              onClick={handleListAdd}
            >
              <LuCheckCheck />
            </IconButton>
          </>
        ) : (
          <Text mt={2} fontSize={"sm"}>
            You can add up to {MAX_TAG_ITEM} tag.
          </Text>
        )}
      </HStack>

      {/* Tag List */}
      <Wrap>
        {fields.map((item, itemIndex) => (
          <Tag.Root
            key={item.id}
            colorPalette={"blue"}
            rounded={"full"}
            size={"lg"}
          >
            <Tag.Label>{item.value}</Tag.Label>

            <Tag.EndElement>
              <Tag.CloseTrigger onClick={() => remove(itemIndex)} />
            </Tag.EndElement>
          </Tag.Root>
        ))}
      </Wrap>
    </Field.Root>
  );
};

export default TagList;
