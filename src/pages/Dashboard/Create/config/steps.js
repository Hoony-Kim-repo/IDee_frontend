/**
 * steps.js
 *
 * Single souce of truth for the create-dashboard wizzard steps.
 *
 * Each step has:
 *  - id        : stable identifier (used as React key)
 *  - title     : text shown in the step header
 *  - component : the React component rendered as the step content
 *  - fields    : form field names that belong to this step. They are validated when the user presses "Next",
 *                and used to jump back to the right step if the final submit finds an error.
 *
 * Change this file when you add, remove, reorder or rename steps / fields.
 * TODO: fill in 'fields' for the other steps when we review each of them.
 */
import BackgroundContentStep from "../BackgroundContentStep";
import BackgroundLayoutStep from "../BackgroundLayoutStep";
import DashboardReviewStep from "../DashboardReviewStep";
import ProfileBrandingStep from "../ProfileBrandingStep";
import ProfileHighlightStep from "../ProfileHighlightStep";
import ProfileIdentityStep from "../ProfileIdentityStep";

export const STEPS = [
  {
    id: "identity",
    title: "Basic Information",
    component: ProfileIdentityStep,
    fields: ["fullName", "nickname", "phoneNumber", "jobTitle"],
  },
  {
    id: "branding",
    title: "Profile Branding",
    component: ProfileBrandingStep,
    fields: [],
  },
  {
    id: "hightlight",
    title: "Profile Hightlight",
    component: ProfileHighlightStep,
    fields: [],
  },
  {
    id: "backgroundLayout",
    title: "Background Layout",
    component: BackgroundLayoutStep,
    fields: [],
  },
  {
    id: "backgroundContent",
    title: "Background Contents",
    component: BackgroundContentStep,
    fields: [],
  },
  {
    id: "review",
    title: "Dashboard Review",
    component: DashboardReviewStep,
    fields: [],
  },
];
