import { Badge, Field, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const JobTitleField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Field.Root invalid={!!errors.jobTitle}>
      <Field.Label>
        Job Title (or Alter Ego){" "}
        <Field.RequiredIndicator
          fallback={
            <Badge size={"xs"} variant={"surface"}>
              Optional
            </Badge>
          }
        />
      </Field.Label>
      <Input
        {...register("jobTitle")}
        autoComplete="organization-title"
        placeholder="Job Title or your Alter Ego"
        borderRadius={"lg"}
      />

      <Field.ErrorText>{errors.jobTitle?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default JobTitleField;
