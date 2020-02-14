import React from 'react';
import Link from '../components/Link/Link';
import { P } from '../components/Typography/Typography';

const faqs = [
  {
    question: 'When was VOWAID Founded?',
    answer: () => (
      <>
        <P>VOWAID was founded in 2015.</P>
      </>
    ),
  },
  {
    question: 'How was the organization founded and by whom?',
    answer: () => (
      <>
        <P>The organization was founded by Alice Ward. Alice is a Marine Corps Veteran. She founded VOWAID to take action to help Veterans, especially under-served Female Veterans going through a difficult transition post military service.</P>
      </>
    ),
  },
  {
    question: 'Who does VOWAID serve?',
    answer: () => (
      <>
        <P>VOWAID serves Veterans that are survivors of Intimate Partner Violence</P>
      </>
    ),
  },
  {
    question: `Why doesn't VOWAID offer services to ALL Veterans?`,
    answer: () => (null)
  },
  {
    question: 'I am a Veteran. How can I join or get involved?',
    answer: () => (null)
  },
  {
    question: 'How can I help Transitioning Veterans via the VOWAID Foundation?',
    answer: () => (null)
  },
  {
    question: 'How can I help Survivor Warriors via the VOWAID Survivor Warrior Club?',
    answer: () => (null)
  },
  {
    question: 'What types of services does the VOWAID Transitioning Warrior Club Provide?',
    answer: () => (null)
  },
  {
    question: `I don't support (the war a certain politician/ a national policy/ etc.) Why should I get involved with VOWAID?`,
    answer: () => (null)
  },
  {
    question: 'What percentage of my donation goes directly to Veterans eligible for VOWAID services?',
    answer: () => (null)
  },
  {
    question: 'I would like to sign up for a monthly donation, how do I do this?',
    answer: () => (null)
  },
  {
    question: 'Can I make donations to a particular Veteran or their family?',
    answer: () => (null)
  },
  {
    question: 'I would rather mail a check. To whom do I make it out and where do I sent it?',
    answer: () => (null)
  },
  {
    question: 'Can I make a donation in memory or honor of a loved one who has passed away or to honor a veteran family member?',
    answer: () => (
      <>
        <P paragraph>Donations made in honor of a loved one are always welcome. If you wish to make a memorial or honorary donation online, please use our online form. If you wish to mail in your memorial or honorary donation, please be sure to download and fill out a donation form to include with your check or credit card information.</P>

        <P paragraph>When making a memorial donation to VOWAID, please make your check payable to the Veterans of War Aid Foundation If posting our address for an obituary requesting donations be sent to VOWAID in lieu of flowers, please us the following contact information:</P>

        <address>
          <span>Veterans of War Aid Foundation</span>
          <span>2307 S. Rural Road</span>
          <span>Tempe, Arizona 85282</span>
        </address>
      </>
    ),
  },
  {
    question: 'Will the honoree or their family receive a letter notifying them of my donation?',
    answer: () => (
      <>
        <P>VOWAID will notify the family or individual of your gift if the name and address of the honoree is provided. You may enter this information on the bottom of our online and downloadable donation forms.</P>
      </>
    ),
  },
  {
    question: 'Is the donation amount stated in the letter received by the honoree?',
    answer: () => (
        <>
          <P>No, we do not state the donation amount unless specifically requested by the donor.</P>
        </>
      ),
  },
  {
    question: 'How can I join the VOWAID Transitioning Warrior Club (VOWAID TWC)?',
    answer: () => (
      <>
        <P paragraph>Please <Link underline='hover' to='/services'>click here</Link> to join our VOWAID TWC.</P>

        <P paragraph>There is a membership fee required to cover for administrative costs of $99.00 annually. By joining the VOWAID TWC, our Veteran Client will have access to our VOWAID TWC premium account and a seasoned team of Expert Veteran Transitioning Coaches and Mentors that will provide resources for transitional assistance. Veterans that do not have the financial means to pay for a membership, can <Link underline='hover' to=''>apply for a grant</Link>.</P>

        <P paragraph>The VOWAID TWC provides a personal assistance team that focuses on you (our Veteran client) and your family. We are dedicated to finding state and national resources that will help you readjust to civilian life. We can help you apply for unemployment, find non-profits and local groups that will connect you with a solid support system that will help you through your transition. Our case managers are seasoned Veterans and military spouses who understand the struggles of leaving the service. We also advocate for you during difficult times and situations. We make the tough phone calls so you have the time to focus on what matters.</P>

        <P paragraph>To join you must have:</P>

        <ul>
          <li><P>An honorable discharge - DD-214</P></li>
          <li><P>Have a valid VA ID card</P></li>
        </ul>
      </>
    ),
  },
  {
    question: 'If I qualify for veteran benefits’ from the Department of Veterans Affairs (VA) does that mean that I am eligible for veterans’ preference in Federal Employment?',
    answer: () => (
        <>
          <P paragraph><strong>Maybe.</strong>  Eligibility for veterans’ preference in Federal employment is dependent on military service dates or service-connected disability and having served honorably.  The Feds Hire Vets website (<Link underline='hover' href='https://www.fedshirevets.gov' target='_blank'>www.fedshirevets.gov</Link>) provides guidance on veterans’ preference and special hiring authorities for veterans.</P>
        </>
      ),
  },
  {
    question: 'What is Schedule A for persons with disabilities?  ',
    answer: () => (
      <>
        <P paragraph>Schedule A is a special appointing authority that agencies can use to non-competitively appoint individuals, including eligible veterans, who have a severe physical, psychiatric, or intellectual disability.  For more information visit <Link underline='hover' href='https://www.USAJOBS.gov' target='_blank'>www.USAJOBS.gov</Link>, Individuals with Disabilities page.</P>
      </>
    ),
  },
  {
    question: 'What are the criteria to be eligible for a VRA appointment? ',
    answer: () => (
      <>
        <P paragraph>To be eligible, the veteran must be:</P>

        <ul>
          <li><P>in receipt of a campaign badge for service during a war or in a campaign or expedition; OR</P></li>
          <li><P>a disabled veteran, OR</P></li>
          <li><P>in receipt of an Armed Forces Service Medal or Global War on Terrorism Service Medal for participation in a military operation, OR</P></li>
          <li><P>a recently separated veteran (within the last 3 years), AND</P></li>
          <li><P>separated under honorable conditions (this means an honorable or general discharge).</P></li>
        </ul>
      </>
    ),
  },
  {
    question: 'What is 10-point preference and who is eligible?',
    answer: () => (
      <>
        <P paragraph>A 10 point preference eligible is a veteran or eligible family member of a veteran who served at any time, was discharged or released from active duty in the armed forces under honorable conditions and:</P>

        <ul>
          <li><P>has a compensable service connected disability,</P></li>
          <li><P>has a present service-connected disability or is receiving compensation, disability retirement benefits, or pension from the military or the Department of Veterans Affairs OR</P></li>
          <li><P>has received a Purple Heart.</P></li>
        </ul>

        <P>The veteran must have been discharged under an honorable or general discharge. <em>Note: Certain spouses, widows, widowers, or parents of veterans may also be entitled.</em></P>
      </>
    ),
  },
  {
    question: 'I am a 30% or more disabled veteran; can I apply as a Schedule A eligible?',
    answer: () => (
      <>
        <P><strong>It depends.</strong> If the applicant is eligible for both appointing authorities he or she should indicate their desire to receive consideration under both appointing authorities. However, the criteria for 30% or more disabled appointing authority are different from Schedule A Persons with Disabilities appointing authority. For additional information on the eligibility criteria visit <Link underline='hover' href='https://www.fedshirevets.gov/job/shav/index.aspx' target='_blank'>www.fedshirevets.gov/job/shav/index.aspx</Link>.</P>
      </>
    ),
  },
  {
    question: 'What are the criteria for VEOA eligibility?',
    answer: () => (
      <>
        <P paragraph>To be eligible for a VEOA appointment, your latest discharge must be issued under honorable conditions (this means an honorable or general discharge), AND you must be either:</P>

        <ul>
          <li><P>a preference eligible (defined in title 5 U.S.C. 2108(3)), OR</P></li>
          <li><P>a veteran who substantially completed 3 or more years of active service.</P></li>
        </ul>

        <P>Preference eligible under VEOA includes those family members entitled to derived preference.</P>
      </>
    ),
  },
  {
    question: 'How do I obtain a copy of my SF-50? ',
    answer: () => (
      <>
        <P>Visit the <Link underline='hover' href='https://www.archives.gov/st-louis/civilian-personnel' target='_blank'>National Archives website</Link> for information pertaining to replacement of the SF-50 or contact the agency’s Human Resources Office where you worked for assistance.</P>
      </>
    ),
  },
];

export {
  faqs,
};
