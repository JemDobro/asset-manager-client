//Create synchronous validators which check the following:
//Contains a value: all fields
//The value is non-empty: all fields
//Value cannot start or end with whitespace: badgeId, username, password fields
//Length min is 10, max is 72: password
//Password confirm field should match the password field: passwordConfirm

export const required = value => value ? undefined : 'Required';
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value => value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};
export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim() ? undefined : 'Does not match';