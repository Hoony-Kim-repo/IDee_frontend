/**
 * tags.js
 *
 * Limits for the profile tags, shardd by the tag fields (components/dashboard/Field.Tags.jsx)
 * and the Zod schema (pages/Dashboard/Create/schame/createProfileSchema.js).
 * The card footer is small, so keep these values short.
 */

// A tag group is a title plus its tags, e.g., "Skills": React. Vue
export const MAX_TAG_GROUPS = 2;
export const MAX_TAGS_PER_GROUP = 5;

export const MAX_TAG_TITLE_LENGTH = 20;
export const MAX_TAG_LENGTH = 24;
