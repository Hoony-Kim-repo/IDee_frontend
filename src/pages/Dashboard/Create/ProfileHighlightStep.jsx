import { Fieldset } from "@chakra-ui/react";
import BioField from "../../../components/dashboard/Field.Bio";
import TagsField from "../../../components/dashboard/Field.Tags";

const ProfileHighlightStep = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Content>
        <BioField />
      </Fieldset.Content>

      <Fieldset.Content>
        <TagsField />
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

export default ProfileHighlightStep;
