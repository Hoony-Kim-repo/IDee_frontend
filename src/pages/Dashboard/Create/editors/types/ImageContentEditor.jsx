import { CloseButton, FileUpload, Input, InputGroup } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { LuImageUp } from "react-icons/lu";

const ImageContentEditor = ({ index }) => {
  const { setValue } = useFormContext();

  const onFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setValue(`backgroundContents.${index}.data.file`, file);
  };

  return (
    <FileUpload.Root
      alignItems={"stretch"}
      gap={"1"}
      maxFiles={1}
      accept={["image/*"]}
      onFileChange={onFileChange}
    >
      <FileUpload.HiddenInput />
      <FileUpload.Label>Upload an Image</FileUpload.Label>
      <InputGroup
        startElement={<LuImageUp />}
        endElement={
          <FileUpload.ClearTrigger asChild>
            <CloseButton
              me={"-1"}
              size={"xs"}
              variant={"plain"}
              focusVisibleRing={"inside"}
              focusRingWidth={"2px"}
              pointerEvents={"auto"}
            />
          </FileUpload.ClearTrigger>
        }
      >
        <Input asChild>
          <FileUpload.Trigger>
            <FileUpload.FileText lineClamp={1} />
          </FileUpload.Trigger>
        </Input>
      </InputGroup>
    </FileUpload.Root>
  );
};

export default ImageContentEditor;
