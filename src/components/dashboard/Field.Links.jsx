/**
 * Field.Links.jsx
 *
 * Optional list of links (title + URL) of the create/edit profile form.
 * Uses useFieldArray, so the user can add and remove rows.
 *
 * Validation lives in the Zod schema
 *  - empty rows are allowed and dropped on submit
 *  - only http/https addresses are accepted
 *  - a missing "https://" is added automatically
 *
 * Props:
 *  - name      : field array name in the form (e.g. "links")
 *  - maxLinks  : maximum number of rows
 */
import {
  Badge,
  Button,
  Field,
  Fieldset,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { get, useFieldArray, useFormContext } from "react-hook-form";
import { MAX_LINKS } from "../../constants/links";

const LinksField = ({ name, maxLinks = MAX_LINKS }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const canAddMore = fields.length < maxLinks;

  return (
    <Fieldset.Root>
      <Fieldset.Legend>
        Links{" "}
        <Badge size={"xs"} variant={"surface"}>
          Optional
        </Badge>
      </Fieldset.Legend>

      {/* Visible text, because a disabled button cannot be focused and screen reader users would never learn why it is disabled. */}
      <Fieldset.HelperText>
        {canAddMore
          ? "Each link needs a title and a web address."
          : `You can add up to ${maxLinks} links. Remove one to add another.`}
      </Fieldset.HelperText>

      <Fieldset.Content>
        <VStack align={"stretch"}>
          {fields.map((field, index) => {
            // Errors of a field array are stored per row, e.g., errors.links[0].url
            const titleError = get(errors, `${name}.${index}.title`);
            const urlError = get(errors, `${name}.${index}.url`);

            return (
              <HStack key={field.id} align={"start"}>
                <Field.Root invalid={!!titleError} flex={"1"}>
                  <Input
                    {...register(`${name}.${index}.title`)}
                    aria-label={`Link ${index + 1} title`}
                    placeholder="Title"
                    autoComplete="off"
                  />
                  <Field.ErrorText>{titleError?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!urlError} flex={"2"}>
                  <Input
                    {...register(`${name}.${index}.url`)}
                    aria-label={`Link ${index + 1} URL`}
                    // url keyboard on mobile; the browser's own validation is off because the form uses noValidate.
                    type="url"
                    inputMode="url"
                    autoComplete="off"
                    placeholder="https://..."
                  />
                  <Field.ErrorText>{urlError?.message}</Field.ErrorText>
                </Field.Root>

                <Button
                  type="button"
                  aria-label={`Remove link ${index + 1}`}
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              </HStack>
            );
          })}

          <Button
            type="button"
            alignSelf={"flex-start"}
            disabled={!canAddMore}
            onClick={() =>
              append({
                title: "",
                url: "",
              })
            }
          >
            Add Link ({fields.length}/{maxLinks})
          </Button>
        </VStack>
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

export default LinksField;
