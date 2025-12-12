import { Button, Field, FileUpload } from "@chakra-ui/react";
import { LuFileImage } from "react-icons/lu";
import FileUploadPreview from "./FileUploadPreview";

const ProfilePictureField = () => {
  return (
    <Field.Root>
      <Field.Label>Profile Picture</Field.Label>
      <FileUpload.Root>
        <FileUpload.HiddenInput name="profilePicture" />
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
