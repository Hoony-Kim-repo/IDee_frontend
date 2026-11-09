/**
 * Field.ProfilePicture.jsx
 *
 * Optional profile picture upload of the create/edit profile form.
 *
 * The picture is not an <input> registered with register(), so it is written into the form with setValue():
 *  - a File when the user picks an image
 *  - null when there is no picture (nothing picked, or the user removed it)
 *
 * File type/size limits come from src/constants/profilePicture.js.
 * The upload widget blocks invalid files first, and the Zod schema checks them again.
 */
import { Badge, Button, Field, FileUpload } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { LuFileImage } from "react-icons/lu";
import {
  MAX_PROFILE_PICTURE_BYTES,
  MAX_PROFILE_PICTURE_MB,
  PROFILE_PICTURE_ACCEPT,
} from "../../constants/profilePicture";
import FileUploadPreview from "./FileUploadPreview";

// Human readable messages for the reasons the upload widget can reject a file.
const REJECT_MESSAGES = {
  DEFAULT_REJECT_MESSAGE:
    "This file cannot be used. Please choose another image.",
  FILE_INVALID_TYPE: "Please choose a PNG, JPG or WebP image.",
  FILE_TOO_LARGE: `The image must be ${MAX_PROFILE_PICTURE_MB} MB or smaller.`,
};

const ProfilePictureField = () => {
  const {
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  // Called whenever the file list changes: a file was picked, rejected, or removed with the X button on the preview.
  const handleFileChange = (details) => {
    const file = details.acceptedFiles?.[0] ?? null;
    setValue("profilePicture", file, { shouldDirty: true });

    const rejectReason = details.rejectedFiles?.[0]?.errors?.[0];

    if (rejectReason) {
      setError("profilePicture", {
        type: "manual",
        message:
          REJECT_MESSAGES[rejectReason] ??
          REJECT_MESSAGES["DEFAULT_REJECT_MESSAGE"],
      });
    } else {
      clearErrors("profilePicture");
    }
  };

  return (
    <Field.Root invalid={!!errors.profilePicture}>
      <Field.Label>
        Profile Picture{" "}
        <Field.RequiredIndicator
          fallback={
            <Badge size={"xs"} variant={"surface"}>
              Optional
            </Badge>
          }
        />
      </Field.Label>

      <FileUpload.Root
        accept={PROFILE_PICTURE_ACCEPT}
        maxFileSize={MAX_PROFILE_PICTURE_BYTES}
        maxFiles={1}
        onFileChange={handleFileChange}
      >
        <FileUpload.HiddenInput />
        <FileUpload.Trigger asChild>
          <Button variant="solid" borderRadius="lg">
            <LuFileImage /> Upload Profile Picture
          </Button>
        </FileUpload.Trigger>
        <FileUploadPreview />
      </FileUpload.Root>

      <Field.HelperText>
        PNG, JPG or WebP, up to {MAX_PROFILE_PICTURE_MB} MB.
      </Field.HelperText>
      <Field.ErrorText>{errors.profilePicture?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default ProfilePictureField;
