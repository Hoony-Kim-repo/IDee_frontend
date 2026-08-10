import IDCard from "../../components/IDCard/IDCard";
import ExampleBack from "./back/ExampleBack";
import ExampleFront from "./front/ExampleFront";

const Example = () => {
  return (
    <>
      <IDCard front={ExampleFront} back={ExampleBack} />
    </>
  );
};

export default Example;
