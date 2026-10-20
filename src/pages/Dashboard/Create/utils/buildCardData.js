import { layouts } from "../config/layouts";

/**
 * Converts RHF form values into the data model
 * consumed by the card renderers.
 */
export const buildCardData = (formData) => {
  // Find the selected layout definition.
  const layout = layouts.find((l) => l.value === formData.backgroundLayout);

  // Fallback if the layout does not exist.
  if (!layout) return null;

  // Keep only the visible content slots.
  const visibleContents = (formData.backgroundContents ?? [])
    .slice(0, layout.slots.length)
    .filter((content) => content?.type);

  // The renderer consumes the same shape as the form state.
  // Preserve the original content shape.
  const mappedContents = visibleContents
    .map((content) => ({
      type: content.type,
      data: content.data,
    }));

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
      backgroundImage: formData.backgroundImage,
      layoutType: formData.backgroundLayout,
      backgroundContents: mappedContents,
    },
  };
};
