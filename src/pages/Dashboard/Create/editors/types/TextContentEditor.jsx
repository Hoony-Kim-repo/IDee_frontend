import { Textarea } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const TextContentEditor = ({ index }) => {
  const { register } = useFormContext();

  return (
    <Textarea
      placeholder="Write something..."
      size="md"
      rows={5}
      {...register(`backgroundContents.${index}.data.text`)}
    />
  );
};

export default TextContentEditor;
