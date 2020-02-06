import { Formik, React } from 'appReact';

import Layout from 'components/layout/Layout';
import Button from 'components/buttons/Button';
import SignUpForm from 'components/auth/SignUpForm';
import SEO from 'components/Seo/Seo';

/**
 * Description.
 */
const SignUpPage = () => (
  <Layout>
    <SEO title='Sign Up' />

    <h1>Sign Up</h1>

    <SignUpForm />
  </Layout>
);

export default SignUpPage;
