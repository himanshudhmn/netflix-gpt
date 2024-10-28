export const checkLoginValidation = (email, passsword) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPwdValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      passsword
    );
  if (!isEmailValid) return "Invalid email address";
  if (!isPwdValid) return "Password is invalid";
  return null;
};
