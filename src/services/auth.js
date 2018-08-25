/**
 * Just mocking a logged in user. We can update this method later
 * for a proper authentication system.
 */
export const getAuthStatus = () => ({
  user: {
    firstName: 'Andrew',
  },
});
