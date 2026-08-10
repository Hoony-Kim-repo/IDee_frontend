import CardBody from "../CardBody";
import CardContainer from "../CardContainer";
import CardFooter from "../CardFooter";
import CardHeader from "../CardHeader";

const CardFrontRenderer = ({ data }) => {
  if (!data) return null;

  const {
    backgroundImage,
    name,
    jobTitle,
    profileImage,
    bodyList,
    bio,
    footerList,
  } = data;

  return (
    <CardContainer bgImage={backgroundImage} isFront>
      <CardHeader name={name} jobTitle={jobTitle} />

      <CardBody profileImage={profileImage} list={bodyList} bio={bio} />

      <CardFooter list={footerList} />
    </CardContainer>
  );
};

export default CardFrontRenderer;
