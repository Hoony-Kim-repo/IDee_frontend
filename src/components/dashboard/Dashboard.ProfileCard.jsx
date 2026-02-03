import { useProfile } from "../../hooks/useProfile";
import CardBody from "../ID/CardBody";
import CardContainer from "../ID/CardContainer";
import CardFooter from "../ID/CardFooter";
import CardHeader from "../ID/CardHeader";
import IDCard from "../ID/IDCard";

const DashboardProfileCard = () => {
  const { profile } = useProfile();

  const front = () => {
    return (
      <CardContainer>
        <CardHeader
          name={profile?.nickname || profile?.fullName}
          jobTitle={"Test"}
        />

        <CardBody
          profileImage={profile?.profileImage.url}
          list={[]}
          bio={profile?.bio}
        />

        <CardFooter list={[]} />
      </CardContainer>
    );
  };

  return <IDCard front={front} back={null} />;
};

export default DashboardProfileCard;
