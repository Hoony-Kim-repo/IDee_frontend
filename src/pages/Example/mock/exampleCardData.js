// Mock card data used for the Example page.
// This follows the exact same shape produced by buildCardData()
import background from "../../../assets/Example/background.webp";
import profileImage from "../../../assets/Example/my-profile-picture.jpg";
import educationCert from "./EducationCert.json";
import keyProject from "./KeyProjects.json";
import skills from "./Skills.json";
import workHistory from "./WorkHistory.json";

const skillsText = (skills?.list ?? []).map((section) => {
  const items = Array.isArray(section.data) ? section.data.join(", ") : "";

  return `${section.category}\n${items}`;
});

export const exampleCardData = {
  front: {
    backgroundImage: background,
    profileImage: profileImage,
    name: "Hoony Kim",
    jobTitle: "Software Engineer",
    bio: `I am on a journey to find my own happiness.
I know that whatever challenges come my way-now or in the future- I have what it takes to overcome them.`,
    bodyList: [
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
    ],
    footerList: [
      {
        category: "Skills",
        data: ["React", "Python", "JavaScript", "NodeJS", "AI"],
      },
      {
        category: "Keywords",
        data: ["Positive", "Passionate", "Teamwork", "Creative"],
      },
    ],
  },
  back: {
    backgroundImage: background,
    layoutType: "grid",
    backgroundContents: [
      {
        type: "table",
        data: workHistory,
      },
      {
        type: "table",
        data: keyProject,
      },
      {
        type: "table",
        data: educationCert,
      },
      {
        type: "text",
        data: {
          text: skillsText,
        },
      },
    ],
  },
};
