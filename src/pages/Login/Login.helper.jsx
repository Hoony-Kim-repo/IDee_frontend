// import axios from "axios";

const loginSignupAction = async ({ request }) => {
  const formData = await request.formData();

  console.log(formData.get("email"));
  console.log(formData.get("action"));

  // const userEmail = formData.get("email");

  // const res = await axios;
};

export { loginSignupAction };
