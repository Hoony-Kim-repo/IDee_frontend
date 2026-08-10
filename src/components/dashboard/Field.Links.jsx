import { Button, Field, HStack, Input, VStack } from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";

const LinksField = ({ name, maxLinks = 5 }) => {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const canAddMore = fields.length < maxLinks;

  return (
    <Field.Root>
      <Field.Label>Links</Field.Label>

      <VStack align={"baseline"}>
        {fields.map((field, index) => (
          <HStack key={field.id}>
            <Input
              placeholder="Title"
              {...register(`${name}.${index}.title`)}
            />
            <Input
              placeholder="https://..."
              {...register(`${name}.${index}.url`, {
                required: true,
                message: "Invalid URL",
              })}
            />

            <Button onClick={() => remove(index)}>Remove</Button>
          </HStack>
        ))}

        {canAddMore && (
          <Button
            onClick={() =>
              append({
                title: "",
                url: "",
              })
            }
          >
            Add Link (Max 3)
          </Button>
        )}
      </VStack>
    </Field.Root>
  );
};

export default LinksField;
