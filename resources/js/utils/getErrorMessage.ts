export type TypeErrorCode = 
  'NAME_IS_TOO_SHORT' | 'NAME_IS_EMPTY' | 'NAME_ONLY_ENGLISH' |
  'EMAIL_INVALID' | 'EMAIL_IS_EMPTY' | 'PASSWORD_MISSING_UPPERCASE' | 'PASSWORD_MISSING_SYMBOL' |
  'PASSWORD_ERROR' | 'PASSWORD_IS_TOO_SHORT'| 'PASSWORD_IS_EMPTY' |
  'PASSWORD_MISMATCH' | 
  'PASSWORD_CONFIRMATION_REQUIRED'; 

const messages: Record<TypeErrorCode, string> = {
  'NAME_IS_TOO_SHORT': 'Name is too short',
  'NAME_IS_EMPTY': 'Name cannot be empty',
  'NAME_ONLY_ENGLISH': 'Name must use only English letters',
  'PASSWORD_IS_EMPTY': 'Password cannot be empty',
  'PASSWORD_IS_TOO_SHORT': 'Password is too short',
  'PASSWORD_MISSING_UPPERCASE': 'Password must include at least one uppercase letter.',
  'PASSWORD_MISSING_SYMBOL': 'Password must include at least one special character.',
  'EMAIL_INVALID': 'Please enter a valid email address.',
  'EMAIL_IS_EMPTY': 'Email cannot be empty',
  'PASSWORD_ERROR': 'Please enter a valid password.',
  'PASSWORD_MISMATCH': 'Passwords do not match.',
  'PASSWORD_CONFIRMATION_REQUIRED': 'Please confirm your password.', 
};

export const getErrorMessage = (code: TypeErrorCode): string => {
  return messages[code] || 'An unknown error occurred.';
};
