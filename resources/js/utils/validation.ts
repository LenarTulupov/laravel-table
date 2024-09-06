import { TypeErrorCode } from "./getErrorMessage";

export function validateName(name: string): TypeErrorCode | '' {
  const nonEnglishRegex = /[^a-zA-Z]/;

  if (name.length === 0) {
    return 'NAME_IS_EMPTY';
  } else if (name.length < 3) {
    return 'NAME_IS_TOO_SHORT';
  } else if (nonEnglishRegex.test(name)) {
    return 'NAME_ONLY_ENGLISH';
  }
  return '';
};

export function validateEmail (email: string): TypeErrorCode | '' {
  const emailRegex  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.length === 0) {
    return 'EMAIL_IS_EMPTY';
  } else if (!emailRegex.test(email)) {
    return 'EMAIL_INVALID';
  }
  return '';
};

export function validatePassword (password: string): TypeErrorCode | '' {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?\/\\|`~])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;"'<>,.?\/\\|`~]+$/;

  if (password.length === 0) {
    return 'PASSWORD_IS_EMPTY';
  } else if (password.length < 8) {
    return 'PASSWORD_IS_TOO_SHORT';
  } else if (!/[A-Z]/.test(password)) {
    return 'PASSWORD_MISSING_UPPERCASE';
  } else if (!/[!@#$%^&*()_+{}\[\]:;"'<>,.?\/\\|`~]/.test(password)) {
    return 'PASSWORD_MISSING_SYMBOL';
  } else if (!passwordRegex.test(password)) {
    return 'PASSWORD_ERROR';
  }
  return '';
};

export function validatePasswordConfirmation(
  password: string, 
  passwordConfirmation: string): TypeErrorCode | '' {

  if(passwordConfirmation === '') {
    return 'PASSWORD_CONFIRMATION_REQUIRED';
  } else if(password !== passwordConfirmation) {
    return 'PASSWORD_MISMATCH';
  }
  return '';
};

