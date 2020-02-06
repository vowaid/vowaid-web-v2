import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { Typography } from '@material-ui/core';
import Content from '../../../components/Content/Content';
import SEO from '../../../components/Seo/Seo';
import Banner from '../../../components/cta/Banner/Banner';
import MemberCard from '../../../components/team/MemberCard/MemberCard';

import { gutter } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

import { teamMembers } from '../../../data/teamData';

/**
 * Description.
 */
const TeamPage = () => (
  <main>
    <SEO
      keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
      title='Team'
    />

    <Wrapper>
      <Header>
        <Typography variant='h2' component='h1'>Who we are</Typography>
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
`;

export default TeamPage;
