import { Link, React } from 'appReact';

import Layout from 'components/layout/Layout';
import SEO from 'components/Seo/Seo';
import Hero from 'components/services/SwcHero.js';
import Banner from 'components/cta/Banner';

/**
 * Description.
 */
const SwcPage = () => (
  <Layout>
    <SEO title='Survivor Warrior Club' />

    <Hero />

    <header>
      <h1>Survivor Warrior Club</h1>
    </header>

    <main>
      <p>Our team is here to offer our Veteran Survivor Warriors with all the tools necessary to aid in rebuilding after experiencing Intimate Partner Violence and/or Military Sexual Trauma (MST). Our trained case managers will connect our Veteran client with local resources, community groups that are vetted and deliver evidence based results, and above all, a stigma and judgmental free environment to help the recovery process. Our seasoned and experienced team has been handpicked to be able to care, relate and understand what it takes to transition from being a Victim of Domestic Violence and/or MST  to becoming a Survivor Warrior that breaks the cycle of violence. We have a strict confidentiality policy where information that is shared is maintained with the highest level of discretion and care. We also reach out to local agencies and advocate on behalf of our Survivor Warriors to avoid re-victimization. We provide a support system that has wrap - around services and we understand how difficult and scary it can be to come forward and share a story of trauma. Most of our case managers are survivors as well and relate 110% with our Veteran Clients. Delivering a service that is tailored to each individual need with the utmost respect, love and compassion.</p>

      <p><strong>Are you a Veteran that is or has experienced Intimate Partner Violence and/or Military Sexual Trauma? <Link href='/signup'>Sign up here</Link> to join our Survivor Warrior Club.</strong></p>
    </main>

    <Banner />
  </Layout>
);

export default SwcPage;
