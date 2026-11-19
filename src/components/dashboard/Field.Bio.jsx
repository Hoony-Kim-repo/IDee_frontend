/**
 * Field.Bio.jsx
 *
 * Optional "Bio" textarea of the create/edit profile form.
 *
 * The length is limited three ways:
 *  - maxLength on the textarea (the user cannot type or paste more)
 *  - a live counter (e.g., 12/150)
 *  - the Zod schema (safety net, because HTML attributes can be bypassed)
 */
import { Badge, Field, Span, Textarea } from "@chakra-ui/react";
import { useFormContext, useWatch } from "react-hook-form";
import { MAX_BIO_LENGTH } from "../../constants/bio";

const BioField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // useWatch re-renders only this component when the bio changes (inside <FormProvider> no 'control' argument is needed).
  const bio = useWatch({ name: "bio" });
  const length = (bio ?? "").length;

  return (
    <Field.Root invalid={!!errors.bio}>
      <Field.Label>
        Bio{" "}
        <Field.RequiredIndicator
          fallback={
            <Badge size={"xs"} variant={"surface"}>
              Optional
            </Badge>
          }
        />
      </Field.Label>

      <Textarea
        {...register("bio")}
        maxLength={MAX_BIO_LENGTH}
        placeholder="I am..."
        borderRadius={"lg"}
      />

      {/* The helper text is linked to the textarea with aria-describedby,
          so screen readers also read the counter. Full width + space-between puts the text on the left and the counter on the right;
          tabular-nums keeps the digits the same width so the counter does not jitter. */}
      <Field.HelperText
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
        fontVariantNumeric={"tabular-nums"}
      >
        <Span>A short description of yourself</Span>
        <Span>
          {length}/{MAX_BIO_LENGTH}
        </Span>
      </Field.HelperText>
    </Field.Root>
  );
};

export default BioField;
