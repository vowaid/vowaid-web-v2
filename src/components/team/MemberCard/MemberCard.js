import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import isEmpty from 'lodash/isEmpty';

import { Button, Card, Typography } from '@material-ui/core';
import Link from '../../Link/Link';
import SocialList from '../../SocialList/SocialList';
import ServiceFlag from '../../team/ServiceFlag/ServiceFlag';

import { createTransitionForProperties, gutter, pxToEm } from '../../../styles/utils';
import { vowaidColors } from '../../../styles/colors';

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
        <Typography component='h1' variant='h2'>{teamMember.name}</Typography>
        <Typography component='h2' variant='h3'>{teamMember.title.full}</Typography>
      </header>

      <Link className='link--reset' to={`/about/team/member?id=${teamMember.id}`}>
        <Button
          variant='contained'
          color='secondary'
          disabled={isEmpty(teamMember.bio)}
        >Read Bio</Button>
      </Link>

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
  height: ${pxToEm(200)};
  margin-bottom: ${gutter.XXL};
  min-width: ${pxToEm(525)};
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

  button {
    margin-bottom: ${pxToEm(20)};
    padding: ${gutter.S} ${gutter.M};
  }

  .card--content {
    padding: ${gutter.XS} ${gutter.L};
    position: relative;
    width: 60%;

    &:after {
      border-color: transparent transparent ${vowaidColors.grayscale[100]} transparent;
      border-style: solid;
      border-width: 0 0 ${pxToEm(200)} ${gutter.XXL};
      content: '';
      height: 0;
      left: -${gutter.XXL};
      position: absolute;
      top: 0;
      width: 0;
    }

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
`;

export default MemberCard;
