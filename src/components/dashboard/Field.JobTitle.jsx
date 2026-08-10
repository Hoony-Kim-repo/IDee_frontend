import { Field, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const JobTitleField = () => {
  const { register } = useFormContext();

  return (
    <Field.Root>
      <Field.Label>Job Title (or Alter Ego)</Field.Label>
      <Input
        {...register("jobTitle")}
        placeholder="Job Title or your Alter Ego"
        borderRadius={"lg"}
      />
    </Field.Root>
  );
};

export default JobTitleField;
