import React from 'react';

import Content from '../../components/Content/Content';
import SignInForm from '../../components/auth/SignInForm/SignInForm';
import SignUpForm from '../../components/auth/SignUpForm/SignUpForm';
import SEO from '../../components/Seo/Seo';

/**
 * Description.
 */
const Auth = (props) => {
  const isSignIn = props.location.pathname.includes('signin');

  return (
    <main>
      <SEO title='Sign In' />

      <Content>
        {(isSignIn) ? <SignInForm /> : <SignUpForm />}
      </Content>
    </main>
  );
};

export default Auth;
