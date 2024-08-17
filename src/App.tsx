import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_AWS_USER_POOLS_ID ?? '',
      userPoolClientId: import.meta.env.VITE_AWS_USER_POOLS_CLIENT_ID ?? '',
      identityPoolId: import.meta.env.VITE_AWS_IDENTITY_POOL_ID ?? '',
      // // 必須ではない、defaultで以下が有効になる
      // loginWith: {
      //   email: true,
      // },
      
    }
  }
});

export default function App() {
  // {console.log(import.meta.env.VITE_AWS_USER_POOLS_ID)}
  return (
    <Authenticator socialProviders={['google']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username ?? 'Guest'}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}