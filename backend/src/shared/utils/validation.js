const fullNameRegex = /^[a-zA-ZÀ-ÖØ-öø' \-\.]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegx = /^([a-zA-Z0-9@_$!]){6,15}$/;

/****************
NOTE:: incase of required field we don't want to show errorMsg 
       rather than highlight the field so always return true
       as we did in line Number 12, 22, 32 ....
*****/
export const nameValidation = (name, value) => {
  if (value === "") {
    return true;
  }
  if (fullNameRegex.test(value) === false) {
    return `${name} is not valid`;
  }
  return false;
};

export const emailValidation = (email, value) => {
  if (value === "") {
    return true;
  }
  if (emailRegex.test(value) === false) {
    return `${email} is not valid`;
  }
  return false;
};

export const passwordValidation = (pwd, value) => {
  if (value === "") {
    return true;
  }
  if (passwordRegx.test(value) === false) {
    return `${pwd} should be of min 8 alphanumeric characters with special characters $_!@`;
  }
  return false;
};

export const requiredValidation = (name, value) => {
  if (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "")
  ) {
    // Handle null, undefined, and empty strings
    return true;
  } else if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  } else {
    return false;
  }
};
