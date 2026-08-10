import { Fieldset, Grid } from "@chakra-ui/react";
import DateOfBirthField from "../../../components/dashboard/Field.DOB";
import FullNameField from "../../../components/dashboard/Field.FullName";
import JobTitleField from "../../../components/dashboard/Field.JobTitle";
import NicknameField from "../../../components/dashboard/Field.Nickname";
import PhoneNumberField from "../../../components/dashboard/Field.PhoneNumber";

const ProfileIdentityStep = () => {
  return (
    <Fieldset.Root>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
        <Fieldset.Content>
          <FullNameField />
        </Fieldset.Content>
        <Fieldset.Content>
          <NicknameField />
        </Fieldset.Content>

        <Fieldset.Content>
          <PhoneNumberField />
        </Fieldset.Content>
        <Fieldset.Content>
          <DateOfBirthField />
        </Fieldset.Content>

        <Fieldset.Content>
          <JobTitleField />
        </Fieldset.Content>
      </Grid>
    </Fieldset.Root>
  );
};

export default ProfileIdentityStep;
