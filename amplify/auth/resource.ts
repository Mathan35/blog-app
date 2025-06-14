// amplify/auth/resource.js
import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    // You can choose to log in with username OR email.
    // If you want username as the primary login and email as an additional attribute:
    // username: true, // Uncomment if you want users to choose a separate username
    // If you want to allow users to log in with their email instead of a separate username:
    email: true // This makes email a login alias and a required attribute
  },
  userAttributes: {
    // Define additional attributes you want to collect and their properties
    // These map to standard Cognito attributes (use camelCase in your config)
    givenName: { // Corresponds to 'given_name' in Cognito
      required: true, // Make first name a required field
      mutable: true,  // Allow users to change it later
    },
    familyName: { // Corresponds to 'family_name' in Cognito
      required: true, // Make last name a required field
      mutable: true,  // Allow users to change it later
    },
    // If you only set `username: true` above, but still want to collect email:
    // email: {
    //   required: true, // Make email a required field
    //   mutable: true,  // Allow users to change it later
    // },
    // You can add other attributes like phoneNumber, address, etc.
  },
  // Other configurations like multiFactor, accountRecovery etc.
});