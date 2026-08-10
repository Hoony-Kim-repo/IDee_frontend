import { Box } from "@chakra-ui/react";
import { useFormContext, useWatch } from "react-hook-form";
import ContentTypeSelector from "./ContentTypeSelector";
import { CONTENT_REGISTRY } from "./editorRegistry";

const BackgroundContentEditor = ({ index }) => {
  const { control, setValue } = useFormContext();

  const type = useWatch({ control, name: `backgroundContents.${index}.type` });

  const onTypeChange = (value) => {
    const defaultData = CONTENT_REGISTRY[value]?.defaultData ?? {};

    setValue(`backgroundContents.${index}`, {
      type: value,
      data: defaultData,
    });
  };

  const Editor = CONTENT_REGISTRY[type]?.editor;

  if (!type) {
    return <ContentTypeSelector value={type} onChange={onTypeChange} />;
  }

  return (
    <Box>
      <ContentTypeSelector value={type} onChange={onTypeChange} />

      {Editor && <Editor index={index} />}
    </Box>
  );
};

export default BackgroundContentEditor;
