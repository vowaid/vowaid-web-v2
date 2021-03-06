import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, P , Link, Seo, SwcHero, Banner, Wrapper } from '../../../components';

import { gutter } from '../../../styles/utils';

const useStyles = makeStyles(theme => ({
  wrapper: {
    paddingBottom: gutter.XXL,
    paddingTop: gutter.XXL,
  },
}));

/**
 * Description.
 */
const SwcPage = () => {
  const classes = useStyles();

  return (
    <main>
      <Seo title='Survivor Warrior Club' />

      <SwcHero />

      <Wrapper className={classes.wrapper}>
        <section>
          <P paragraph>Our team is here to offer our Veteran Survivor Warriors with all the tools necessary to aid in rebuilding after experiencing Intimate Partner Violence and/or Military Sexual Trauma (MST). Our trained case managers will connect our Veteran client with local resources, community groups that are vetted and deliver evidence based results, and above all, a stigma and judgmental free environment to help the recovery process. Our seasoned and experienced team has been handpicked to be able to care, relate and understand what it takes to transition from being a Victim of Domestic Violence and/or MST  to becoming a Survivor Warrior that breaks the cycle of violence. We have a strict confidentiality policy where information that is shared is maintained with the highest level of discretion and care. We also reach out to local agencies and advocate on behalf of our Survivor Warriors to avoid re-victimization. We provide a support system that has wrap - around services and we understand how difficult and scary it can be to come forward and share a story of trauma. Most of our case managers are survivors as well and relate 110% with our Veteran Clients. Delivering a service that is tailored to each individual need with the utmost respect, love and compassion.</P>

          <P paragraph><strong>Are you a Veteran that is or has experienced Intimate Partner Violence and/or Military Sexual Trauma?</strong></P>

          <Button variant='contained' color='default' to='/contact' component={Link}>Contact Us</Button>
        </section>
      </Wrapper>

      <Banner />
    </main>
  );
};

export default SwcPage;
