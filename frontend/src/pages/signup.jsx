import AuthForm from "../components/AuthForm";

export default function SignUp() {
  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("signup Successfully");
  };

  return (
    <AuthForm
      title="Create an Account"
      buttonText="Sign Up"
      fields={fields}
      onSubmit={handleSignup}
    />
  );
}
