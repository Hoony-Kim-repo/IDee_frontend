/**
 * links.js
 *
 * Limits for the profile links, shared by the links field (components/dashboard/Field.Links.jsx)
 * and the Zod schema (pages/Dashboard/Create/schema/createProfileSchema.js)
 */

// Maximum number of links a profile can have.
export const MAX_LINKS = 3;

// The title is shown as the label of the link on the card, keep it short.
export const MAX_LINK_TITLE_LENGTH = 20;
