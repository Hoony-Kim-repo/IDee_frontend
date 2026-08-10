import { Field, Textarea } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const BioField = () => {
  const { register } = useFormContext();

  return (
    <Field.Root>
      <Field.Label>Bio</Field.Label>
      <Textarea
        {...register("bio")}
        placeholder="I am..."
        borderRadius={"lg"}
      />
      <Field.HelperText>A short description of yourself</Field.HelperText>
    </Field.Root>
  );
};

export default BioField;
