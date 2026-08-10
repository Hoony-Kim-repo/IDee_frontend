import CardBackRenderer from "../../../components/IDCard/renderer/CardBackRenderer";
import { exampleCardData } from "../mock/exampleCardData";

const ExampleBack = () => {
  return <CardBackRenderer data={exampleCardData.back} />;
};

export default ExampleBack;
