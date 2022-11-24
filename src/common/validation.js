export const VALIDATION = {
  nameRules: [
    v => !!v || 'Name is required',
    v => v.length <= 255 || 'Maximum 255 character'
  ],
};
