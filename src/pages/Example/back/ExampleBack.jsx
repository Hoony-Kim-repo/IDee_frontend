import background from "../../../assets/Example/background.webp";
import CardBackBottom from "../../../components/IDCard/CardBackBottom";
import CardBackTop from "../../../components/IDCard/CardBackTop";
import CardContainer from "../../../components/IDCard/CardContainer";
import experiences from "./Experiences.json";
import skills from "./Skills.json";

const ExampleBack = () => {
  return (
    <CardContainer bgImage={background}>
      <CardBackTop list={skills} />
      <CardBackBottom data={experiences} />
    </CardContainer>
  );
};

export default ExampleBack;
