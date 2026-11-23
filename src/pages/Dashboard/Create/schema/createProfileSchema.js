/**
 * createProfileSchema.js
 *
 * Zod schema = the single place that describes which data the create-profile form accepts.
 *
 * It is plugged into React Hook Form with 'zodResolver', which means:
 *  - the validation rules written in register(...) are no longer used
 *  - the data passed to onSubmit is the PARSED result of this schema
 *    (so .trim() really trims what gets submitted)
 *
 * z.looseObject keeps keys that are not described here yet (links, bio, tags, ...)
 * A plain z.object would strip them from the submitted data.
 * We add fields to this shcema step by step while reviewing each wizard step.
 */

import { parsePhoneNumberFromString } from "libphonenumber-js";
import z from "zod";
import { MAX_BIO_LENGTH } from "../../../../constants/bio";
import { MAX_LINK_TITLE_LENGTH, MAX_LINKS } from "../../../../constants/links";
import {
  MAX_PROFILE_PICTURE_BYTES,
  MAX_PROFILE_PICTURE_MB,
  PROFILE_PICTURE_ACCEPT,
} from "../../../../constants/profilePicture";
import {
  MAX_TAG_GROUPS,
  MAX_TAG_LENGTH,
  MAX_TAG_TITLE_LENGTH,
  MAX_TAGS_PER_GROUP,
} from "../../../../constants/tags";

// Named constant so the rule is easy to find and change.
export const MIN_FULL_NAME_LENGTH = 2;
export const MAX_NICKNAME_LENGTH = 30;
export const MAX_JOB_TITLE_LENGTH = 30;
// Country assumed when the user types a number WITHOUT a "+" prefix.
// The app targets Canada first. Later this could come from the user's locale.
export const DEFAULT_PHONE_COUNTRY = "CA";

// Convert what the user typed into E.164 (e.g. "+16479289114").
// Returns null when the text is not a valid phone number.
const toE164 = (text) => {
  const parsed = parsePhoneNumberFromString(text, DEFAULT_PHONE_COUNTRY);

  return parsed && parsed.isValid() ? parsed.number : null;
};

const fullNameSchema = z
  .string()
  // Remove leading/trailing spaces BEFORE the length checks run.
  .trim()
  // An empty (or spaces-only) value gets the "required" message first.
  .min(1, "Full name is required")
  .min(
    MIN_FULL_NAME_LENGTH,
    `Name must be at least ${MIN_FULL_NAME_LENGTH} characters`,
  );

// Optional field. an empty string is allowed.
// trim() turns "   " into "", so `nickname || fullName` in the UI falls back to the full name instead of showing a blank name.
const nicknameSchema = z
  .string()
  .trim()
  .max(
    MAX_NICKNAME_LENGTH,
    `Nickname must be at most ${MAX_NICKNAME_LENGTH} characters`,
  );

// Optional field. Accepts any common format, e.g. "(416) 234-5678" or "+82 10 1234 5678", and SUBMITS the normalized E.164 value.
const phoneNumberSchema = z
  .string()
  .trim()
  .refine(
    (value) => value === "" || toE164(value) !== null,
    "Enter a valid phoen number. For numbers outside Canada, start with + and the country code.",
  )
  .transform((value) => (value === "" ? "" : toE164(value)));

const jobTitleSchema = z
  .string()
  .trim()
  .max(
    MAX_JOB_TITLE_LENGTH,
    `Job title must be at most ${MAX_JOB_TITLE_LENGTH} characters`,
  );

// ----------------------- Profile Branding Step -----------------------

// Optional field: a File, or null when there is no picture.
// The upload widget already blocks invalid files; this is the safety net.
// (The server must check type and size again: browser data can be faked.)
const profilePictureSchema = z
  .file()
  .max(
    MAX_PROFILE_PICTURE_BYTES,
    `The image must be ${MAX_PROFILE_PICTURE_MB} MB or smaller.`,
  )
  .mime(PROFILE_PICTURE_ACCEPT, "Please choose a PNG, JPG or WebP image.")
  .nullable();

// True when the text starts with a scheme such as "https:" or "javascript:".
const hasScheme = (text) => /^[a-z][a-z0-9+.-]*:/i.test(text);

// "linkedin.com/in/me" --> "https://linkedin.com/in/me"
// Text that already has a scheme is NOT touched, so "javascript:..." stays as it is and is rejected by the check below.
const addHttpsIfMissing = (text) =>
  text === "" || hasScheme(text) ? text : `https://${text}`;

// Only web addresses are allowed:
//  - "javascript:" and similar links would run code when a visitor clicks them on the card (XSS), so every non-web scheme is rejected.
//  - plain "http://" is rejected too: browsers (Chrome 154+) warn visitors before opening public http sites.
//    To also allow http, change the protocol below to /^https?$/.
const webUrlSchema = z.url({
  protocol: /^https$/,
  hostname: z.regexes.domain,
});

// A link row is either completely empty or completely filled in (title AND url). Empty rows are dropped by the array transform below.
const linkSchema = z
  .object({
    title: z
      .string()
      .trim()
      .max(
        MAX_LINK_TITLE_LENGTH,
        `Title must be at most ${MAX_LINK_TITLE_LENGTH} characters`,
      ),
    url: z.string().trim().transform(addHttpsIfMissing),
  })
  // A title without a URL makes no sense. `path` puts the error on the URL input.
  .refine((link) => !(link.title !== "" && link.url === ""), {
    path: ["url"],
    message: "Enter a URL for this link.",
  })
  .refine((link) => !(link.url !== "" && link.title === ""), {
    path: ["title"],
    message: "Enter a title for this link.",
  })
  // Empty rows are fine (they are dropped below); filled rows must be valid.
  .refine(
    (link) => link.url === "" || webUrlSchema.safeParse(link.url).success,
    {
      path: ["url"],
      message: "Enter a valid web address (https://...)",
    },
  );

// Optional field: rows without a URL are removed from the submitted data.
const linksSchema = z
  .array(linkSchema)
  .max(MAX_LINKS)
  .transform((links) => links.filter((link) => link.url !== ""));

// ----------------------- Profile Highlight Step -----------------------

// maxLength on the textarea already limits typing; this is the safety net.
const bioSchema = z
  .string()
  .trim()
  .max(MAX_BIO_LENGTH, `Bio must be at most ${MAX_BIO_LENGTH} characters`);

// A tag group is either completely empty or has a title AND at least one tag (same idea as the link rows).
// Empty groups are dropped by the transform below.
const tagGroupSchema = z
  .object({
    tagTitle: z
      .string()
      .trim()
      .max(
        MAX_TAG_TITLE_LENGTH,
        `Title must be at most ${MAX_TAG_TITLE_LENGTH} characters`,
      ),
    items: z
      .array(
        z
          .string()
          .trim()
          .min(1, "A tag cannot be empty")
          .max(
            MAX_TAG_LENGTH,
            `A tag must be at most ${MAX_TAG_LENGTH} characters`,
          ),
      )
      .max(MAX_TAGS_PER_GROUP, `You can add up to ${MAX_TAGS_PER_GROUP} tags`)
      // The tags input already refuses duplicates; this is the safety net.
      .refine(
        (items) =>
          new Set(items.map((item) => item.toLowerCase())).size ===
          items.length,
        "Tags must be unique",
      ),
  })
  .refine((group) => !(group.items.length > 0 && group.tagTitle === ""), {
    path: ["tagTitle"],
    message: "Enter a title for this tag group",
  })
  .refine((group) => !(group.tagTitle !== "" && group.items.length === 0), {
    path: ["items"],
    message: "Add at least one tag to this group",
  });

// Optional field: groups without tags are removed from the submitted data.
const tagsSchema = z
  .array(tagGroupSchema)
  .max(MAX_TAG_GROUPS)
  .transform((groups) => groups.filter((group) => group.items.length > 0));

export const createProfileSchema = z.looseObject({
  fullName: fullNameSchema,
  nickname: nicknameSchema,
  phoneNumber: phoneNumberSchema,
  jobTitle: jobTitleSchema,
  profilePicture: profilePictureSchema,
  links: linksSchema,
  bio: bioSchema,
  tags: tagsSchema,
});
