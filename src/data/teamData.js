import React from 'react';

import { P } from '../components/Typography/Typography';

import AustinThomasPhoto from '../assets/images/team/austinThomas.jpg';
import BritneyGrouxPhoto from '../assets/images/team/britneyGroux.jpg';
import CandyBrazilPhoto from '../assets/images/team/candyBrazil.jpg';
import HunterNunneryPhoto from '../assets/images/team/hunterNunnery.jpg';
import JacobTaylorPhoto from '../assets/images/team/jacobTaylor.jpg';
import LisaHemmiePhoto from '../assets/images/team/lisaHemmie.jpg';
import NateAcevedoPhoto from '../assets/images/team/nateAcevedo.jpg';
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
    id: 'e281ab2c-46a3-4be0-a85a-f0d55c3c1de3',
    name: 'Nate Acevedo',
    email: 'naceacevedo@vowaid.org',
    title: {
      full: 'Chief Executive Officer',
      abbr: 'CEO',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/nateacevedo/',
    },
    service: {
      branch: 'Marine Corps',
      status: 'active',
    },
    image: NateAcevedoPhoto,
    bio: () => (
      <>
        <P paragraph>Nathaniel Acevedo, a New York native enlisted in the Marine Corps in 1997 and has served almost 23 years as an active duty Chief Warrant Officer Four, Signals Intelligence and Electronic Warfare Officer. Through his career Nate has been assigned across the nation, to include oversees deployments and multiple combat tours. In his current military assignment, Nate serves as the Operations Officer for Company H, Marine Cryptologic Support Battalion, San Antonio. Nate is presently assigned as the Deputy Chief, Digital Crime Division, National Security Agency (NSA)-Texas, San Antonio. As a team member of the NSA, he serves as a Leadership Development Champion, member of the Hispanic/Latin American Employee Resource Group, and NSA Professional Mentor to the University of Texas San Antonio (Society of Hispanic Professional Engineers).</P>

        <P>Nate holds an MS in Cybersecurity, BS in Criminal Justice/Homeland Security, and additional industry certifications. Nate considers himself a philanthropist and dedicates himself to veterans and their families as the Chief Executive Officer for the Veterans of War Aid Foundation.</P>
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
  {
    id: '94de5018-82a3-4377-bf4a-42d9a18b169d',
    name: 'Candy Brazil',
    email: 'candy@vowaid.org',
    title: {
      full: 'Chief Financial Officer',
      abbr: 'CFO',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/candybrazil/',
    },
    service: {
      branch: '',
      status: '',
    },
    image: CandyBrazilPhoto,
    bio: () => (null),
  },
  {
    id: '5240e765-acac-4560-accc-34673bf1a197',
    name: 'Hunter Nunnery',
    email: 'hunter@vowaid.org ',
    title: {
      full: 'Jr. Web Developer',
      abbr: '',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/hunternunnery/',
      instagram: 'https://www.instagram.com/ hunternunnery/',
      twitter: 'https://twitter.com/hunternunnery',
      facebook: 'https://www.facebook.com/hunternunnery',
      github: 'https://github.com/hnunnery',
    },
    service: {
      branch: 'Marine Corps',
      status: 'active',
    },
    image: HunterNunneryPhoto,
    bio: () => (
        <>
          <P>Hunter is an active-duty Master Sergeant in the United States Marine Corps. He is a combat veteran, of Operation Enduring Freedom, who has served for over 15 years as an Electronic Warfare operator, team leader, instructor, and chief. Hunter is currently a part-time web developer and plans to go full-time after retirement from the Marine Corps. The ability to aid military veterans while leveraging his programming skills is a great opportunity for him and the organization.</P>
        </>
      ),
  },
  {
    id: '0b350b01-7f96-443b-9933-cc4ca35a8b2e',
    name: 'Britney Groux',
    email: 'britney@vowaidfoudation.org',
    title: {
      full: 'Brand Ambassador',
      abbr: '',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/britneygroux/',
    },
    service: {
      branch: 'Marine Corps',
      status: 'veteran',
    },
    image: BritneyGrouxPhoto,
    bio: () => (
      <>
        <P paragraph>I was born and raised in Everett, Mass., a small city just outside of Boston. I am the middle child with an older brother and a little sister. During my senior year of high school I had no idea what I wanted to do. I knew almost nothing about the Armed Services, but I felt like I needed to join the military in order to get anywhere in life (at the time). I made the decision to enlist in the United Stated Marine Corps at the end of my Senior year and that was the first, best decision I ever made for myself. I was always athletic, an All-Star cheerleader, coach, and very competitive!</P>

        <P paragraph>During my Four years Active Duty, I began as a Private and received an Honorable Discharge as a Corporal. I held the billet of Regimental Armory Chief for majority of my enlistment and, overall, I grew as a disciplined, hard-working, and more motivated individual.</P>

        <P paragraph>I decided not to re-enlist because I am also a mother. I want to give my son more of my time without the restrictions of being enlisted. I love the military, especially the Corps, and I am passionate about assisting others going through the trials and tribulations that come with transitioning into civilian life, no matter the circumstance.</P>

        <P paragraph>Since transitioning, I’ve earned a Bachelor of Science Degree in Criminal Justice with a focus on juvenile corrections and I am in my 2L year as a full-time law school student. During Undergrad I earned multiple academic awards (Presidents List with Distinction and Deans List with Distinction) and I believe the military instills certain characteristics in people that sometimes they don’t realize for themselves. I’ve applied these same acquired skills, like origination and discipline, into my law school journey and I will continue to progress, while motivating others to pursue their dreams, too.</P>

        <P paragraph>I’ve completed an internship with the Massachusetts Department of Corrections, where I worked with women from the work-release program on their interviewing strategies, strengths and weaknesses, resume building, and other transiting skills to succeed in civilian life. This taught me how different we all are and that how we react to our own situations, makes all the difference. I enjoy making an impact on the lives of others, especially women, mothers, and mother figures alike.</P>

        <P paragraph>I also completed an internship with the Massachusetts Department of Revenue Litigation Bureau. I worked through tax law cases and analyzed individual’s needs, on a case-by-case basis. It taught me how to work with attorneys and how to apply my military thought process in an office environment. From the Department of Revenue, I applied to law school and got accepted! Another great decision (to actually apply).</P>

        <P>My son is now 7-years-old and when I am not reading cases, outlining, and studying, I am the team mom for my son’s football team. I, like most moms, need to ensure he’s at all the practices for every sport on the planet and homework is done everyday. It can be stressful, trust me, I understand. So, it’s important for veterans, mothers, and families to connect and motivate each other through non-profits, like Veterans of War Aid, of which I am the Ambassador of, and I believe in the foundation’s vision for the future of our veterans.</P>
      </>
    ),
  },
  {
    id: 'e5e73b8a-7c57-445d-98c4-0a27c526f707',
    name: 'Austin Thomas',
    email: 'austin@vowaid.org',
    title: {
      full: 'Photographer',
      abbr: '',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/austinlthomasjr/',
      facebook: 'https://www.facebook.com/austinleethomas',
    },
    service: {
      branch: 'Army',
      status: 'retired',
    },
    image: AustinThomasPhoto,
    bio: () => (
        <>
          <P paragraph>Sergeant 1st Class Thomas is a native of South Central Los Angeles, CA. He originally enlisted into the United States Army August of 1988 straight out of high school, as a Field Artillery Fire Finder Radar Operator. Thomas had a love for Art and Animation from a very early age and this was his opportunity to pay for college and pursue a Art Degree. After 3 years in 1991 and a deployment in support of Desert Shield/Storm Thomas’s initial enlist was up and he got out, had a Family, and worked to support them but he never lost his love for Animation. Finally In 2003, with the support of his family Thomas enlisted in the National Guard for one year to begin training as a 25M or Multimedia Illustrator at the Defense Information School (DINFOS) at Fort Meade, MD. With a solid portfolio and the GI Bill Thomas enrolled at the Art Institute of Seattle to study Computer Animation. After graduation in 2006 the job market crashed and work in the computer graphics and animation industry were few and far between in the Seattle area. So Thomas did what had to be done, he worked in construction and as a low voltage electrician for a few months to support his family until with his families support Thomas re-enlisted back onto Active Duty as a Multimedia Illustrator in 2007. Shortly after re-enlisting Thomas used his previous combat experience and new computer animation skills to quickly advance in rank and responsibility. Thomas became an Instructor at the Non-Commissioned Officers Academy on Fort Meade and developed training curriculum and taught advanced leadership, animation and motion graphic techniques. Upon completion of this assignment he deployed to Kuwait and Afghanistan in support of Operation Enduring Freedom as a Photojournalist and Combat Cameraman. After re-deployment Thomas was selected to be in charge of the historic 3d U.S. Infantry Regiment (The Old Guard) Public Affairs section and Graphics department in Washington D.C., from there, he was promoted to Deputy Command Information Chief/Command Photographer for Joint Force Headquarters National Capital Region-Military District of Washington during the 58 th Presidential Inauguration. His final assignment as an Army recruiter took him back home to Los Angeles. Sergeant 1st Class Thomas served honorable for 16 years on Active Duty before being medically retired October 25 th 2019.</P>

          <P>Sergeant 1st Class Thomas&#39;s military education includes, Fire Finder Radar School, Fort Sill Oklahoma; Basic Multimedia Illustrators Course, the Digital Multimedia Course and the Visual Information Management Course, Fort Meade, Maryland; US Army Recruiter School, Fort Knox Kentucky; Warrior Leader Course, Fort Bliss, Texas; Advanced Leaders Course and Senior Leader Course, Fort Meade, Maryland. Sergeant 1st Class Thomas&#39;s awards include: Meritorious Service Medal; Army Commendation Medal (5th award); Army Achievement Medal (3 rd award); Good Conduct Medal (5th award); National Defense Medal; (2 bronze devices) Southwest Asia Service Medal (3 bronze devices); Global War on Terrorism Expeditionary Medal; Global War on Terrorism Service Medal; Afghanistan Campaign Medal; NCO Professional Development Ribbon (3th device); Overseas Service Ribbon; Humanitarian Service Medal; Saudi Arabia Kuwait Liberation Medal; and Kuwait Liberation Medal. Sergeant 1st Class Thomas has also been awarded the Bronze Instructor Badge, Recruiter Badge. He holds an Associates Degree in Computer Animation from the Art Institute of Seattle and is in the process of enrolling in the New York Film Academy of Los Angeles&#39;s Bachelors Degree program for Film and Television with an emphasis on Directing and Cinematography.</P>
      </>
    ),
  },
  {
    id: '74dee288-941b-4ee4-80b6-b493c0f3e88b',
    name: 'Jacob Taylor',
    email: 'jacob@vowaid.org',
    title: {
      full: 'Public Relations',
      abbr: '',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/jacobtaylorgroup/',
      instagram: 'https://www.instagram.com/jacobtaylorman/',
      twitter: 'https://twitter.com/jacobtaylorman/',
    },
    service: {
      branch: 'Air Force',
      status: 'veteran',
    },
    image: JacobTaylorPhoto,
    bio: () => (null),
  },
];

export {
  teamMembers,
};
