import AuthForm from "../components/AuthForm";

export default function LogIn() {
  const fields = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];
  const handleLogIn = (e) => {
    e.preventDefault();
    console.log("login successfully");
  };
  return (
    <AuthForm
      title="LogIn to your Account"
      buttonText="LogIn"
      fields={fields}
      onSubmit={handleLogIn}
    />
  );
}
