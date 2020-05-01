import React from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';

import { Button, H1, H2, Image, P, Link, Content, Seo, SocialList } from '../../../../components';

import { teamMembers } from '../../../../data/teamData';

import { gutter, pxToEm } from '../../../../styles/utils';

import AirForceIcon from '../../../../components/icons/military/AirForce';
import ArmyIcon from '../../../../components/icons/military/Army';
import CoastGuardIcon from '../../../../components/icons/military/CoastGuard';
import MarineCorpsIcon from '../../../../components/icons/military/MarineCorps';
import NavyIcon from '../../../../components/icons/military/Navy';

/**
 * Description.
 *
 * @class
 */
const BioPage = (props) => {
  const [teamMember, setTeamMember] = React.useState({});

  React.useEffect(() => {
    const search = props.location?.search || '';
    const query = queryString.parse(search);
    const updatedTeamMember = teamMembers.filter((member) => (
      member.id === query.id
    ))[0];

    setTeamMember(updatedTeamMember);
  }, [teamMember, props.location]);

  const fetchBranchImage = () => {
    const iconSize = 75;
    const iconTitle = `${teamMember.service.branch} (${teamMember.service.status})`;

    switch (teamMember.service.branch?.toLowerCase()) {
      case 'marine corps':
        return <MarineCorpsIcon size={iconSize} title={iconTitle} />;

      case 'navy':
        return <NavyIcon size={iconSize} title={iconTitle} />;

      case 'army':
        return <ArmyIcon size={iconSize} title={iconTitle} />;

      case 'coast guard':
        return <CoastGuardIcon size={iconSize} title={iconTitle} />;

      case 'air force':
        return <AirForceIcon size={iconSize} title={iconTitle} />;

      case 'homeland security':
      default:
        return null;
    }
  }

  return (!isEmpty(teamMember)) ? (
    <main>
      <Seo
        keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
        title={`Team: ${teamMember.name}`}
      />

      <FlexContainer>
        <Aside>
          <Image
            src={teamMember.image}
            alt={teamMember.name}
            skeleton={{ height: 300, width: 300 }}
          />

          <SocialList socialLinks={teamMember.social} />

          <P paragraph>
            <Link href={`mailto:${teamMember.email}`} underline='hover'>{teamMember.email}</Link>
          </P>

          {(teamMember.service.branch !== '') ? (
            <div>
              {fetchBranchImage()}
              <span className='sr-only'>{teamMember.service.branch} ({teamMember.service.status})</span>
            </div>
          ) : null}
        </Aside>

        <MemberInfo>
          <header>
            <H1>{teamMember.name}</H1>
            <H2>{teamMember.title?.full} {(!isEmpty(teamMember.title?.abbr)) && `(${teamMember.title?.abbr})`}</H2>
          </header>

          {teamMember.bio()}

          <Button variant='outlined' component={Link} to='/about/team'>Back To Team</Button>
        </MemberInfo>
      </FlexContainer>
    </main>
  ) : (
    <main>
      <Seo
        keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
        title={'Team: '}
      />

      <FlexContainer>
        <P> </P>
      </FlexContainer>
    </main>
  );
};

const FlexContainer = styled(Content)`
  display: flex;
  justify-content: space-between;
  padding: ${gutter.XXL} 5vw;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Aside = styled.aside`
  width: 18vw;

  img {
    height: auto;
    width: 100%;
    max-width: ${pxToEm(300)};
  }

  .social-list {
    margin: ${pxToEm(25)} 0;

    svg {
      height: ${pxToEm(30)};
      width: auto;
    }
  }

  @media only screen and (max-width: 800px) {
    margin-bottom: ${pxToEm(60)};
    text-align: center;
    width: 100%;

    .social-list {
      justify-content: center;

      li:not(:last-child) {
        margin-right: ${gutter.M};
      }
    }
  }
`;

const MemberInfo = styled.section`
  width: 65vw;

  header {
    margin-bottom: ${pxToEm(40)};
  }

  p:not(:last-child) {
    margin-bottom: 2.5ex;
  }

  a {
    padding: ${pxToEm(10)} ${pxToEm(50)};
  }

  @media only screen and (max-width: 800px) {
    width: 100%;

    button {
      padding: ${pxToEm(20)} ${pxToEm(50)};
    }
  }
`;

export default BioPage;
