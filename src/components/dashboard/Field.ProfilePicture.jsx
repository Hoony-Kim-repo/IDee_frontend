import { Button, Field, FileUpload } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { LuFileImage } from "react-icons/lu";
import FileUploadPreview from "./FileUploadPreview";

const ProfilePictureField = () => {
  const { setValue } = useFormContext();

  return (
    <Field.Root>
      <Field.Label>Profile Picture</Field.Label>

      <FileUpload.Root
        onFileChange={(details) => {
          const file = details.acceptedFiles?.[0];
          if (file) setValue("profilePicture", file);
        }}
      >
        <FileUpload.HiddenInput />
        <FileUpload.Trigger asChild>
          <Button as={"div"} variant="solid" borderRadius="lg">
            <LuFileImage /> Upload Profile Picture
          </Button>
        </FileUpload.Trigger>
        <FileUploadPreview />
      </FileUpload.Root>
    </Field.Root>
  );
};

export default ProfilePictureField;
