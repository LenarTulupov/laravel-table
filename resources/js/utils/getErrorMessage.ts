export type TypeErrorCode = 
  'NAME_ERROR' | 
  'EMAIL_INVALID' | 
  'PASSWORD_ERROR' | 
  'PASSWORD_MISMATCH' | 
  'PASSWORD_CONFIRMATION_REQUIRED'; 

const messages: Record<TypeErrorCode, string> = {
  'NAME_ERROR': 'Please enter a valid name.',
  'EMAIL_INVALID': 'Please enter a valid email address.',
  'PASSWORD_ERROR': 'Please enter a valid password.',
  'PASSWORD_MISMATCH': 'Passwords do not match.',
  'PASSWORD_CONFIRMATION_REQUIRED': 'Please confirm your password.', 
};

export const getErrorMessage = (code: TypeErrorCode): string => {
  return messages[code] || 'An unknown error occurred.';
};
