import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { H1, Content, Seo, Banner, MemberCard } from '../../../../components';

import { gutter } from '../../../../styles/utils';
import { vowaidColors } from '../../../../styles/colors';

import { teamMembers } from '../../../../data/teamData';

/**
 * Description.
 */
const TeamPage = () => (
  <main>
    <Seo
      keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
      title='Team'
    />

    <Wrapper>
      <Header>
        <H1>Who we are</H1>
      </Header>

      <StyledTeamList>
        {teamMembers.map((teamMember) => (
          <MemberCard teamMember={teamMember} key={uuidv4()} />
        ))}
      </StyledTeamList>
    </Wrapper>

    <Banner background={vowaidColors.blue.default} />
  </main>
);

const Header = styled.header`
  margin-bottom: ${gutter.XXL};

  h1 {
    text-transform: capitalize;
    text-align: center;
  }
`;

const Wrapper = styled(Content)`
  padding: ${gutter.XXL};
`;

const StyledTeamList = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-content: center;
  }
`;

export default TeamPage;
