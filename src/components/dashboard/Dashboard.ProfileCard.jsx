import { useProfile } from "../../hooks/useProfile";
import CardBody from "../IDCard/CardBody";
import CardContainer from "../IDCard/CardContainer";
import CardFooter from "../IDCard/CardFooter";
import CardHeader from "../IDCard/CardHeader";
import IDCard from "../IDCard/IDCard";

const DashboardProfileCard = () => {
  const { profile } = useProfile();

  const front = () => {
    return (
      <CardContainer isFront>
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
