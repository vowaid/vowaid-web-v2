import React from 'react';

import { Content, SignInForm, SignUpForm, Seo } from '../../components';

/**
 * Description.
 */
const Auth = (props) => {
  const isSignIn = window.location.pathname.includes('signin');
  const title = (isSignIn) ? 'Sign In' : 'Sign Up';

  return (
    <main>
      <Seo title={title} />

      <Content>
        {(isSignIn) ? <SignInForm /> : <SignUpForm />}
      </Content>
    </main>
  );
};

export default Auth;
