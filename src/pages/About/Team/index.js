import { React, styled, uuidv4 } from 'appReact';

import { colors, pxToEm } from 'styles/util';

import Layout from 'components/layout/Layout';
import SEO from 'components/seo';

import Banner from 'components/cta/Banner';
import MemberCard from 'components/team/MemberCard';

import { gutter } from 'styles/util';

import { teamMembers } from 'data/teamData';

/**
 * Description.
 */
const TeamPage = () => (
  <Layout>
    <SEO
      keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
      title='Team'
    />

    <Wrapper>
      <Header>
        <h1>Who we are</h1>
      </Header>

      <StyledTeamList>
        {teamMembers.map((teamMember) => (
          <MemberCard teamMember={teamMember} key={uuidv4()} />
        ))}
      </StyledTeamList>
    </Wrapper>

    <Banner background={colors.blue.default.hex} />
  </Layout>
);

const Header = styled.header`
  margin-bottom: ${gutter.XXL};

  h1 {
    text-transform: capitalize;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  padding: ${gutter.XXL};
`;

const StyledTeamList = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default TeamPage;
