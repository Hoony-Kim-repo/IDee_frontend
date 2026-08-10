// Mock card data used for the Example page.
// This follows the exact same shape produced by buildCardData()
import background from "../../../assets/Example/background.webp";
import profileImage from "../../../assets/Example/my-profile-picture.jpg";
import experiences from "./Experiences.json";
import skills from "./Skills.json";

export const exampleCardData = {
  front: {
    backgroundImage: background,
    profileImage: profileImage,
    name: "Hoony Kim",
    jobTitle: "Software Engineer",
    bio: `Hi, I am Gihoon Kim (Hoony Kim).
I am on a journey to find my own happiness.
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
    layoutType: "top-bottom",
    backgroundContents: [
      {
        type: "links",
        data: {
          links: skills,
        },
      },
      {
        type: "text",
        data: {
          text: experiences.map((item) => item.company).join("\n"),
        },
      },
    ],
  },
};
