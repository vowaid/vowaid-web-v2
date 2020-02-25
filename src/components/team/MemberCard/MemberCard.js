import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import isEmpty from 'lodash/isEmpty';

import { Button, Card } from '@material-ui/core';
import { H1, H2, Link, SocialList, ServiceFlag } from '../../index';

import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';

/**
 * React component for the application global header. The header transitions between the "full"
 * (desktop) version and the mobile version. The nav type is based on the full header width compared
 * to the screen width.
 *
 * @class
 */
const MemberCard = ({ teamMember }) => (
  <StyledMemberCard>
    <img
      className="card--image"
      src={teamMember.image}
      alt={teamMember.name}
    />

    <section className="card--content">
      <header>
        <H1>{teamMember.name}</H1>
        <H2>{teamMember.title.full}</H2>
      </header>

      <Button
        variant='contained'
        color='secondary'
        disabled={isEmpty(teamMember.bio())}
        component={Link}
        to={`/about/team/member?id=${teamMember.id}`}
      >Read Bio</Button>

      <SocialList socialLinks={teamMember.social} />
    </section>

    {(!isEmpty(teamMember.service.branch)) && <ServiceFlag service={teamMember.service} />}
  </StyledMemberCard>
);

MemberCard.propTypes = {
  teamMember: PropTypes.objectOf(PropTypes.any).isRequired,
};

MemberCard.defaultProps = {
  teamMember: {},
};

const StyledMemberCard = styled(Card)`
  display: flex;
  max-width: 100%;
  min-height: ${pxToEm(200)};
  margin-bottom: ${gutter.XXL};
  overflow: hidden;
  position: relative;
  width: calc((100vw - ${pxToEm(150)}) / 2);
  ${createTransitionForProperties(['width'])};

  &.active {
    height: auto;
    width: 100%;

    .card--bio {
      opacity: 1;
      position: initial;
      transform: scaleY(1);
      visibility: visible;
    }
  }

  a {
    margin-bottom: ${gutter.M};
  }

  .card--content {
    padding: ${gutter.XS} ${gutter.L};
    position: relative;
    width: 60%;

    h1,
    h2 {
      margin: 0;
    }

    h1 {
      font-size: 1.953em;
      margin-bottom: ${gutter.XS};
    }

    h2 {
      font-size: 1.25em;
      margin-bottom: ${gutter.XS};
    }
  }

  .card--image {
    height: ${pxToEm(200)};
    object-fit: cover;
    width: ${pxToEm(200)};
  }

  @media only screen and (max-width: 1150px) {
    width: calc(100vw - ${pxToEm(100)});
  }

  @media only screen and (max-width: 600px) {
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: ${pxToEm(300)};

    .card--image {
      height: ${pxToEm(300)};
      width: ${pxToEm(300)};
    }

    .card--content {
      width: 100%;
    }

    .card--flag {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export default MemberCard;
