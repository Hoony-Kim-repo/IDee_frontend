import background from "../../../assets/Example/background.webp";
import profileImg from "../../../assets/Example/my-profile-picture.jpg";
import CardBody from "../../../components/IDCard/CardBody";
import CardContainer from "../../../components/IDCard/CardContainer";
import CardFooter from "../../../components/IDCard/CardFooter";
import CardHeader from "../../../components/IDCard/CardHeader";

const footerData = [
  {
    category: "Skills",
    data: ["React", "Python", "JavaScript", "NodeJS", "AI"],
  },
  {
    category: "Keywords",
    data: ["Positive", "Passionate", "Teamwork", "Creative"],
  },
];

const bodyData = [
  {
    label: "Name",
    value: "Gihoon Kim",
  },
  {
    label: "Prefered Name",
    value: "Hoony Kim",
  },
  {
    label: "Address",
    value: "Toronto",
  },
  {
    label: "GitHub Link",
    value: "https://github.com/Hoony-Kim-repo",
  },
  {
    label: "LinkedIn Link",
    value: "https://www.linkedin.com/in/gihoon-kim-532627196/",
  },
];

const ExampleFront = () => {
  return (
    <CardContainer bgImage={background}>
      <CardHeader name={"Hoony Kim"} jobTitle={"Software Engineer"} />
      <CardBody
        profileImage={profileImg}
        list={bodyData}
        bio={"Hi, This is Test Bio"}
      />
      <CardFooter list={footerData} />
    </CardContainer>
  );
};

export default ExampleFront;
