/**
 * defaultValues.js
 *
 * Initial values of the create-dashboard form (React Hook Form).
 * This object describes the SHAPE of the form: every field name used by any wizard step should appear here.
 *
 * Why a module-level constant?
 *  - It is created once instead of on every render.
 *  - It can be reused, e.g., reset(DEFAULT_VALUES) after a successful save.
 *
 * Conventions:
 *  - Use "" for empty text and null for an empty file/object.
 *    Avoid 'Undefined': React Hook Form treats it as "no default value".
 */
export const DEFAULT_VALUES = {
  // Step 1: Basic Information
  fullName: "",
  nickName: "",
  phoneNumber: "",
  dob: "",
  jobTitle: "",

  // Step 2: Profile Branding
  profilePicture: null,
  // TODO: the empty first row has required url, which blocks the final submit even though links are optional.
  // Fix when we review this step.
  links: [{ title: "", url: "" }],

  // Step 3: Profile Highlight
  bio: "",
  tags: [{ tagTitle: "", items: [] }],

  // Step 4: Background Layout
  // Must match one of the 'value' fields in config/layouts.js.
  backgroundLayout: "single",

  // Step 5: Background Contents
  // The number of entries must match the slot count of the selected layout.
  backgroundContents: [
    {
      type: "",
      data: {},
    },
  ],
};
