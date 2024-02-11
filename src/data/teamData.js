import React from 'react';

import { P } from '../components/Typography/Typography';

import LisaHemmiePhoto from '../assets/images/team/lisaHemmie.jpg';
import AliceWardPhoto from '../assets/images/team/aliceWard.jpg';
import HollySpringsteenPhoto from '../assets/images/team/hollySpringsteen.jpg';

// const malePlaceholder = 'https://www.openreality.co.uk/wp-content/uploads/2019/04/Male-Placeholder-Headshot.jpg';
// const femalePlaceholder = 'https://www.openreality.co.uk/wp-content/uploads/2019/04/Female-Placeholder-Headshot.jpg';

const teamMembers = [
  {
    id: 'fe1774f0-5ef1-4bde-b496-c2708129e414',
    name: 'Alice Ward',
    email: 'alice@vowaid.org',
    title: {
      full: 'Founder / Director',
      abbr: '',
      status: 'Volunteer',
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
      full: 'Chief Operating Officer',
      abbr: 'COO',
      status: 'Volunteer',
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
  {
    id: 'f5d6c6a4-c268-4b48-a7b8-3f030b22e63a',
    name: 'Holly Springsteen',
    email: 'holly@vowaid.org',
    title: {
      full: 'Chief Technology Officer',
      abbr: 'CTO',
      status: 'Volunteer',
    },
    social: {
      linkedin: 'https://www.instagram.com/hollyos7/',
      instagram: 'https://www.instagram.com/hollyos7/',
      twitter: 'https://twitter.com/hollyos7',
      github: 'https://github.com/hollyos',
    },
    service: {
      branch: 'Marine Corps',
      status: 'veteran',
    },
    image: HollySpringsteenPhoto,
    bio: () => (
      <>
        <P paragraph>Born and raised in New York, Holly comes with that determined, never slow down attitude. Holly joined the United States Marine Corps at 18, serving her country for 5 years. During which time, she was afforded many incredible, awe-inspiring, humbling opportunities. One such opportunity was leading approximately 120 Marines to respond to the 2011 Tōhoku earthquake and prepare relief mission essential equipment.</P>

        <P paragraph>After the military Holly spent time working as a designer and photographer for several years having been published in What Digital Camera as well as several smaller publications. During this time she really began to hone her skill sets and broaden into additional verticals.</P>

        <P paragraph>After a request from a client to build a website, an entirely new concept for her at the time, Holly began digging in and learning the basics on how to accomplish this task. She was able to put together a basic site. This journey intrigued an interest and passion like never before. Two weeks later, Holly was at Full Sail University, where she began her journey towards getting her degree in Web Design and Development.</P>

        <P paragraph>From there Holly has continued to work within design as well as development on an ongoing basis. Working with companies such as IBM, Fjord, Accenture, ExxonMobil, Frontier Communications, Cox, and several others Holly has always strived to bridge the gap between design and development. Her passion for quality interfaces and experiences has led to innovations and developments that have re-shaped multi-million dollar industries.</P>

        <P paragraph>Other than her contributions in the work-force Holly is passionate about giving back and sharing her knowledge with those around her. Having served on advisory boards for Full Sail University as well as The Iron Yard she strives to aim educational opportunities in the right direction for the largest impact on students. Not one to lead from the outside alone Holly has also spent time teaching at The Coding Bootcamp at The University of Texas at Austin. During her time as an instructor Holly contributed to changing the lives of her students through rapid education and career growth assistance.</P>

        <P>Holly is a passionate and empowering individual that strives to not only better herself but also those around her.</P>
      </>
    ),
  },
];

export {
  teamMembers,
};
