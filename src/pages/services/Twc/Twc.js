import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button, P , Link, Seo, TwcHero, Banner, Wrapper } from '../../../components';

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
const TwcPage = () => {
  const classes = useStyles();

  return (
    <main>
      <Seo title='Transitioning Warrior Club' />

      <TwcHero />

      <Wrapper className={classes.wrapper}>
        <section>
          <P paragraph>The VOWAID Transitioning Warrior Club (TWC) provides a personal assistance team that focuses on our Veteran client and their family. We are dedicated to finding state and national resources that will help our Veteran Transitioning Warriors readjust to civilian life. We assist with applications for employment, advocate with non-profits and local groups that connect our Veteran Clients with a solid support system that will help them through their transition post active duty service. Most importantly, VOWAID has a network of successful business owners that have pledged to hire and train our Transitioning Warrior Club Members. Our case managers are seasoned Veterans and Military Spouses who understand the struggles of exiting active duty service. We also advocate for our Veteran clients during difficult times and emergency situations. We make the tough phone calls so they have time to focus on what matters.</P>

          <P paragraph><strong>Want to be part of our Transitioning Warrior Club?</strong></P>

          <Button variant='contained' color='default' to='/contact' component={Link}>Contact Us</Button>
        </section>
      </Wrapper>

      <Banner />
    </main>
  );
};

export default TwcPage;
