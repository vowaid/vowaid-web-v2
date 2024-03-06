import React from 'react';

import { P } from '../components/Typography/Typography';

import LisaHemmiePhoto from '../assets/images/team/lisaHemmie.jpg';
import AliceWardPhoto from '../assets/images/team/aliceWard.jpg';

// const malePlaceholder = 'https://www.openreality.co.uk/wp-content/uploads/2019/04/Male-Placeholder-Headshot.jpg';
// const femalePlaceholder = 'https://www.openreality.co.uk/wp-content/uploads/2019/04/Female-Placeholder-Headshot.jpg';

const teamMembers = [
  {
    id: 'fe1774f0-5ef1-4bde-b496-c2708129e414',
    name: 'Alice Ward',
    email: 'alice@vowaid.org',
    title: {
      full: 'Founder / Director (Volunteer)',
      abbr: '',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/Alice-ward-a675a288/',
      instagram: 'https://www.instagram.com/vowaidfounder/',
      twitter: 'https://twitter.com/vow_aid',
    },
    service: {
      branch: 'Marine Corps',
      status: 'veteran',
    },
    image: AliceWardPhoto,
    bio: () => (
      <>
        <P paragraph>Throughout my career, I have built a well-earned reputation as an innovative leader who is driven by the challenges of directing complex high profile operations in fast-paced, multi-faceted settings, undeterred by obstacles, and committed to furthering standards of operational excellence.  I have also shown to be an accomplished Veteran advocate, negotiator, problem solver, marketer and planner, with exceptional energy and the ability to build and solidify professional and personal relationships.</P>

        <P paragraph>I am proud United States Marine Corps Veteran and the founder of a successful 501 c 3 charity called Veterans of War Aid Foundation (VOWAID).  I love being a VETPRENEUR and leaving a life changing legacy behind.  I am a person of high standards, integrity and committed to excellent service.</P>

        <P>I speak fluent Portuguese, Spanish and functional Arabic and Italian.</P>
      </>
    ),
  },
  {
    id: '019d1ead-54ef-4f4b-a63d-e20b9c55b056',
    name: 'Lisa Hemmie',
    email: 'lisa@vowaid.org',
    title: {
      full: 'Chief Operating Officer (Volunteer)',
      abbr: 'COO',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/lisa-hemmie-zorn-027aa427/',
      instagram: 'https://www.instagram.com/lisahemmie/',
      twitter: 'https://twitter.com/lisahemmie',
      facebook: 'facebook.com/lisa.zornhemmie',
    },
    service: {
      branch: 'Marine Corps',
      status: 'veteran',
    },
    image: LisaHemmiePhoto,
    bio: () => (
      <>
        <P paragraph>Having studied Advertising and Marketing at Eastern Michigan University, Lisa started her professional career as a Media Assistant at Heil Brice Retail Advertising. Quickly proving her worth, Lisa was reappointed to Account Manager at the same firm, where she was responsible for an annual budget of over $10 million. She excelled in this role because of her extraordinary communication skills, collaborating and coordinating with many other teams to achieve everyone's goals.</P>

        <P paragraph>Always on the lookout for new and exciting opportunities, Lisa moved to ABC Disney radio where she was responsible for introducing radio advertising concepts to both advertising agencies and local clients. While apart of ABC Disney radio she maintained one of the highest average unit sale rates on her team, organized massive event promotions for large clients including McDonalds and TCF Bank, and she developed several successful campaigns for clients with limited budgets to ensure that they could meet their targets and achieve their goals.</P>

        <P paragraph>Simultaneously, Lisa worked in the Marine Corps Reserve as a motor vehicle operator and as a member of the Peacetime Wartime support team during 9/11. During her time with the Marine Corps, Lisa realized her love for country and her desire to help others at home and around the world, especially children. Lisa began spearheading fundraisers and charitable events for local youth and military families.</P>

        <P paragraph>Lisa also started a training center for cheerleaders by the name of Michigan Xtreme Cheer and Dance. Here, kids, teenagers, and special needs children were not only athletically trained, but mentored by Lisa and her staff. Quite the optimist, Lisa believes in living life to the fullest and giving back to the community as much as possible, regularly hosting fundraising events and awareness campaigns for various local charities.</P>

        <P paragraph>Constantly looking for opportunities to help those in need, Lisa discovered the Veterans of War Aid Foundation. A veteran herself, Lisa understood the struggles of veterans and felt compelled to get involved with the Veterans of War Aid Foundation to help provide her fellow countrymen with the help they need to prosper and survive their unique challenges.</P>

        <P>In 2012, Lisa earned the title of Mrs. Michigan which gave her an even larger platform to bring attention to the charitable causes she was passionate about. As an advocate for charity work and an experienced mentor, Lisa believes she can be a highly productive member of the team to help the organization achieve their goals promptly and completely.</P>
      </>
    ),
  },
];

export {
  teamMembers,
};
