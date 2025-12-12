import { Field, Textarea } from "@chakra-ui/react";

const BioField = () => {
  return (
    <Field.Root>
      <Field.Label>Bio</Field.Label>
      <Textarea id="bio" name="bio" placeholder="I am..." borderRadius={"lg"} />
      <Field.HelperText>A short description of yourself</Field.HelperText>
    </Field.Root>
  );
};

export default BioField;
