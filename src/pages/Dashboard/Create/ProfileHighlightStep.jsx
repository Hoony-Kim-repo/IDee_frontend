/**
 * ProfileHighlightStep.jsx
 *
 * Third step of the create-dashboard wizard ("Profile Highlight")
 * Groups the bio and the tags. Each field component owns its own label, input and error message, so this file only handles layout.
 */
import { Fieldset } from "@chakra-ui/react";
import BioField from "../../../components/dashboard/Field.Bio";
import TagsField from "../../../components/dashboard/Field.Tags";

const ProfileHighlightStep = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Legend srOnly>Profile Highlight</Fieldset.Legend>

      <Fieldset.Content>
        <BioField />
        <TagsField />
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

export default ProfileHighlightStep;
