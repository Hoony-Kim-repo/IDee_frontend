import { Fieldset } from "@chakra-ui/react";
import LinksField from "../../../components/dashboard/Field.Links";
import ProfilePictureField from "../../../components/dashboard/Field.ProfilePicture";

const ProfileBrandingStep = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Content>
        <ProfilePictureField />
        <LinksField name={"links"} />
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

export default ProfileBrandingStep;
