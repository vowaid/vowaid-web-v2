import React from 'react';

import { Content, SignInForm, SignUpForm, Seo } from '../../components';

/**
 * Description.
 */
const Auth = (props) => {
  const isSignIn = props.location.pathname.includes('signin');

  return (
    <main>
      <Seo title='Sign In' />

      <Content>
        {(isSignIn) ? <SignInForm /> : <SignUpForm />}
      </Content>
    </main>
  );
};

export default Auth;
