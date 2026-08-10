import CardFrontRenderer from "../../../components/IDCard/renderer/CardFrontRenderer";
import { exampleCardData } from "../mock/exampleCardData";

const ExampleFront = () => {
  return <CardFrontRenderer data={exampleCardData.front} />;
};

export default ExampleFront;
