import { Field, HStack, IconButton, Input, Tag, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { LuCheckCheck, LuPencil, LuUndo } from "react-icons/lu";

const TagList = ({ tag, onChange }) => {
  const { name, items } = tag;
  // Tag Statements
  const [tempTagName, setTempTagName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  //   items statements
  const [value, setValue] = useState("");

  const handleTagSave = () => {
    onChange({
      ...tag,
      name: tempTagName.trim(),
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempTagName(name);
    setIsEditing(false);
  };

  const handleListAdd = () => {
    const newValue = {
      id: crypto.randomUUID(),
      value: value.trim(),
    };

    if (
      items.some(
        (item) => item.value.toLowerCase() === newValue.value.toLowerCase(),
      )
    ) {
      setValue("");
      return;
    }
    onChange({
      ...tag,
      items: [...items, newValue],
    });

    setValue("");
  };

  const actionMap = {
    mode: () => setIsEditing((prev) => !prev),
    save: handleTagSave,
    cancel: handleCancel,
    itemAdd: handleListAdd,
  };

  const handleIconButtonActions = (fn) => {
    actionMap[fn]?.();
  };

  const onRemoveItem = (uid) => {
    onChange({
      ...tag,
      items: items.filter((item) => item.id !== uid),
    });
  };

  return (
    <Field.Root>
      {isEditing ? (
        <HStack>
          <Input
            value={tempTagName}
            onChange={(e) => setTempTagName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleTagSave();
              }
            }}
          />
          <IconButton
            size={"xs"}
            variant={"ghost"}
            aria-label="Edit Tag Name"
            disabled={tempTagName.trim() === ""}
            onClick={() => handleIconButtonActions("save")}
          >
            <LuCheckCheck />
          </IconButton>
          <IconButton
            size={"xs"}
            variant={"ghost"}
            aria-label="Edit Tag Name"
            onClick={() => handleIconButtonActions("cancel")}
          >
            <LuUndo />
          </IconButton>
        </HStack>
      ) : (
        <HStack>
          <Field.Label>{name}</Field.Label>
          <IconButton
            size={"xs"}
            variant={"ghost"}
            aria-label="Edit Tag Name"
            onClick={() => handleIconButtonActions("mode")}
          >
            <LuPencil />
          </IconButton>
        </HStack>
      )}

      <HStack>
        <Input
          placeholder="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
          disabled={value.trim() === ""}
          onClick={() => handleIconButtonActions("itemAdd")}
        >
          <LuCheckCheck />
        </IconButton>
      </HStack>

      {/* Tag List */}
      <Wrap>
        {items.map((item) => (
          <Tag.Root
            key={item.id}
            colorPalette={"blue"}
            rounded={"full"}
            size={"lg"}
          >
            <Tag.Label>{item.value}</Tag.Label>
            <Tag.EndElement>
              <Tag.CloseTrigger onClick={() => onRemoveItem(item.id)} />
            </Tag.EndElement>
          </Tag.Root>
        ))}
      </Wrap>
    </Field.Root>
  );
};

export default TagList;
