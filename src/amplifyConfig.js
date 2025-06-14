// amplifyConfig.js
import { Amplify } from 'aws-amplify'

export default {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-us-east-1_jU2ZIl9hI',
    userPoolWebClientId: '5mafgcqdjjmr4gnb2asv84qej2',
    oauth: {
      domain: 'yourdomain.auth.us-east-1.amazoncognito.com',
      redirectSignIn: 'https://d2htxmmjh15g38.cloudfront.net/callback',
      redirectSignOut: 'https://your-app.com/',
      responseType: 'code',
      scope: ['email', 'openid', 'profile'],
    }
  }
}
