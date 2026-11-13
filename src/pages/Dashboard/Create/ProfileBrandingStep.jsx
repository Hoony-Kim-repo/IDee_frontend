/**
 * ProfileBrandingStep.jsx
 *
 * Second step of the create-dashboard wizard ("Profile Branding").
 * Groups the profile picture and the links.
 * Each field component owns its own label, input and error emssage, so this file only handles layout.
 */
import { Fieldset } from "@chakra-ui/react";
import LinksField from "../../../components/dashboard/Field.Links";
import ProfilePictureField from "../../../components/dashboard/Field.ProfilePicture";

const ProfileBrandingStep = () => {
  return (
    <Fieldset.Root>
      {/* Accessable name for screen readers; the wizard header already shows this title, so hide it visually */}
      <Fieldset.Legend srOnly>Profile Branding</Fieldset.Legend>

      <Fieldset.Content>
        <ProfilePictureField />
        <LinksField name={"links"} />
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

export default ProfileBrandingStep;
