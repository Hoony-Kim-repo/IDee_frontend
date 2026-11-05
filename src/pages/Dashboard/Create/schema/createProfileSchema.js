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

export const createProfileSchema = z.looseObject({
  fullName: fullNameSchema,
  nickname: nicknameSchema,
  phoneNumber: phoneNumberSchema,
  jobTitle: jobTitleSchema,
});
