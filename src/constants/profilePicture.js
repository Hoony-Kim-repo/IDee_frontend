/**
 * profilePicture.js
 *
 * Rules for the profile picture upload, shared by the upload field (components/dashboard/Field.ProfilePicture.jsx)
 * and the Zod schema (pages/Dashboard/Create/schema/createProfileSchema.js).
 * Keep them in one place so the UI and the validation never disagree.
 */

// Image types the browser can show everywhere.
export const PROFILE_PICTURE_ACCEPT = ["image/png", "image/jpeg", "image/webp"];

export const MAX_PROFILE_PICTURE_MB = 5;
export const MAX_PROFILE_PICTURE_BYTES = MAX_PROFILE_PICTURE_MB * 1024 * 1024;
