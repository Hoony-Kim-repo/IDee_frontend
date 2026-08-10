import { layouts } from "../config/layouts";

/**
 * RHF Form Data -> Card Render Data
 */
export const buildCardData = (formData) => {
  const layout = layouts.find((l) => {
    if (!layout) return;

    l.value === formData.backgroundLayout;
  });

  const contents = formData.backgroundContents || [];

  const visibleContents = contents
    .slice(0, layout.contentCount)
    .filter((c) => c?.type);

  // Convert based on content type
  // RHF methods backgroundContents
  const mappedContents = visibleContents
    .map((content) => {
      switch (content.type) {
        case "text":
          return {
            type: "text",
            value: content.data.text,
          };
        case "image":
          return {
            type: "image",
            src: content.data.url,
          };
        case "links":
          return {
            type: "links",
            links: content.data.links,
          };
        default:
          return null;
      }
    })
    .filter(Boolean);

  return {
    front: {
      backgroundImage: formData.backgroundImage,
      name: formData.fullName,
      jobTitle: formData.jobTitle,
      profileImage: formData.profilePicture,
      bodyList: formData.links,
      footerList: formData.tags,
      bio: formData.bio,
    },
    back: {
      layoutType: formData.backgroundLayout,
      backgroundContents: mappedContents,
    },
  };
};
