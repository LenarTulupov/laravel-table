export type TypeErrorCode = 
  'NAME_TOO_SHORT' | 
  'EMAIL_INVALID' | 
  'PASSWORD_TOO_SHORT' | 
  'PASSWORD_MISMATCH';

const messages: Record<TypeErrorCode, string> = {
  'NAME_TOO_SHORT': 'Please enter a valid name.',
  'EMAIL_INVALID': 'Please enter a valid email address.',
  'PASSWORD_TOO_SHORT': 'Please enter a valid password.',
  'PASSWORD_MISMATCH': 'Passwords do not match.',
};

export const getErrorMessage = (code: TypeErrorCode): string => {
  return messages[code] || 'An unknown error occurred.';
};