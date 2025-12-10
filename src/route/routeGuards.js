import { redirect } from "@tanstack/react-router";
import { auth } from "../Firebase";

const requireAuth = async () => {
  const user = auth.currentUser;

  if (!user) throw redirect({ status: 302, headers: { Location: "/login" } });

  return user;
};

const requireVerified = async () => {
  const user = auth.currentUser;

  if (!user) throw redirect({ status: 302, headers: { Location: "/login" } });

  if (!user.emailVerified)
    throw redirect({ status: 302, headers: { Location: "/verify-email" } });

  return user;
};

export { requireAuth, requireVerified };
