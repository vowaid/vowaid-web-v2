import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';

import { Button, Typography } from '@material-ui/core';
import Link from '../../../components/Link/Link';
import Content from '../../../components/Content/Content';
import SEO from '../../../components/seo';
import SocialList from '../../../components/SocialList/SocialList';

import { teamMembers } from '../../../data/teamData';

import { gutter, pxToEm } from '../../../styles/utils';

/**
 * Description.
 *
 * @class
 */
const BioPage = (props) => {
  const [teamMember, setTeamMember] = React.useState({});

  React.useEffect(() => {
    const query = queryString.parse(props.location.search);
    console.log('props.location.search', props.location.search);
    console.log('query', query);

    const teamMember = teamMembers.filter((member) => (
      member.id === query.id
    ))[0];

    console.log(teamMember);

    setTeamMember(teamMember);
  }, [teamMember, props.location.search]);

  return (!isEmpty(teamMember)) ? (
    <main>
      <SEO
        keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
        title={`Team: ${teamMember.name}`}
      />

      <FlexContainer>
        <Aside>
          <img
            src={teamMember.image}
            alt={teamMember.name}
          />

          <SocialList socialLinks={teamMember.social} />

          <Typography component='p' variant='body1'>
            <Link to={`mailto:${teamMember.email}`} underline='hover'>{teamMember.email}</Link>
          </Typography>
        </Aside>

        <MemberInfo>
          <header>
            <Typography component='h1' variant='h2'>{teamMember.name}</Typography>
            <Typography component='h2' variant='h3'>{teamMember.title?.full} {(!isEmpty(teamMember.title?.abbr)) && `(${teamMember.title?.abbr})`}</Typography>
          </header>

          <Typography>{ReactHtmlParser(teamMember.bio)}</Typography>

          <Link to='/about/team'>
            <Button variant='outlined'>Back To Team</Button>
          </Link>
        </MemberInfo>
      </FlexContainer>
    </main>
  ) : (
    <main>
      <SEO
        keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
        title={'Team: '}
      />

      <FlexContainer>
        <p> </p>
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

  button {
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
