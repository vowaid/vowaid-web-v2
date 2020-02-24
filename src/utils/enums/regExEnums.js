const PhoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Complex Password: Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
const PasswordComplexRegExp = /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

// Moderate Password: Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
const PasswordModerateRegExp =
/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;

export {
  PhoneRegExp,
  PasswordComplexRegExp,
  PasswordModerateRegExp,
};
