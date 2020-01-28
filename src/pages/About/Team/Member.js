import { _, Component, Link, queryString, React, ReactHtmlParser, styled } from 'appReact';

import Layout from 'components/layout/Layout';
import SEO from 'components/seo';

import Button from 'components/buttons/Button';
import SocialList from 'components/social/SocialList';

import { teamMembers } from 'data/teamData';

import { colors, createTransitionForProperties, gutter, pxToEm } from 'styles/util';

/**
 * Description.
 *
 * @class
 */
export default class BioPage extends Component {
  state = {
    teamMember: {},
  }

  componentWillMount() {
    const query = queryString.parse(this.props.location.search);
    console.log('this.props.location.search', this.props.location.search);
    console.log('query', query);

    const teamMember = teamMembers.filter((member) => (
      member.id === query.id
    ))[0];

    console.log(teamMember);

    this.setState({
      teamMember,
    });
  }

  render() {
    const { teamMember } = this.state;

    return (teamMember) ? (
      <Layout>
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

            <p>
              <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
            </p>
          </Aside>

          <MemberInfo>
            <header>
              <h1>{teamMember.name}</h1>
              <h2>{teamMember.title.full} {(!_.isEmpty(teamMember.title.abbr)) && `(${teamMember.title.abbr})`}</h2>
            </header>

            {ReactHtmlParser(teamMember.bio)}

            <Link className='link--reset' to='/about/team'>
              <Button>Back To Team</Button>
            </Link>
          </MemberInfo>
        </FlexContainer>
      </Layout>
    ) : (
      <Layout>
        <SEO
          keywords={['vowaid', 'veteran', 'nonprofit', 'charity', 'react']}
          title={'Team: '}
        />

        <FlexContainer>
          <p> </p>
        </FlexContainer>
      </Layout>
    );
  }
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${gutter.XXL} auto;
  width: 90vw;

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
      ${createTransitionForProperties(['fill'])};

      &:not(:hover) {
        * {
          fill: ${colors.blackText.hex};
        }
      }

      * {
        ${createTransitionForProperties(['fill'])};
      }
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
