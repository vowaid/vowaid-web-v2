import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactSVG } from 'react-svg';
import { P } from '../../index';

import { createTransitionForProperties, pxToEm } from '../../../styles/utils';
import { serviceColors } from '../../../styles/colors';

import AirForceIcon from '../../../assets/icons/military/airForce-white.svg';
import ArmyIcon from '../../../assets/icons/military/army-star.svg';
import CoastGuardIcon from '../../../assets/icons/military/coastGuard.svg';
import MarineCorpsIcon from '../../../assets/icons/military/marineCorps.svg';
import NavyIcon from '../../../assets/icons/military/navy.svg';

/**
 * React component for
 *
 * @class
 */
const ServiceFlag = ({ service }) => {
  const [background, setBackground] = React.useState('');

  /**
   * Description.
   */
  const setServiceFlag = () => {
    let background;

    switch (service.branch?.toLowerCase()) {
      case 'marine corps':
        background = serviceColors.marineCorps.red;
        break;
      case 'navy':
        background = serviceColors.navy.blue;
        break;
      case 'army':
        background = serviceColors.army.black;
        break;
      case 'coast guard':
        background = serviceColors.coastGuard.blue;
        break;
      case 'air force':
        background = serviceColors.airForce.blue;
        break;
      case 'homeland security':
        background = serviceColors.homelandSecurity.darkBlue;
        break;
      default:
        background = '';
    }

    setBackground(background);
  }

  /**
   * Description.
   */
  const fetchBranchImage = () => {
    let svgSrc = null;

    switch (service.branch?.toLowerCase()) {
      case 'marine corps':
        svgSrc = MarineCorpsIcon;
        break;

      case 'navy':
        svgSrc = NavyIcon;
        break;

      case 'army':
        svgSrc = ArmyIcon;
        break;

      case 'coast guard':
        svgSrc = CoastGuardIcon;
        break;

      case 'air force':
        svgSrc = AirForceIcon;
        break;

      case 'homeland security':
      default:
        return;
    }

    return <ReactSVG className='logo' src={svgSrc} />;
  }

  React.useEffect(() => {
    setServiceFlag();
  });

  const status = service.status?.charAt(0).toUpperCase() + service.status?.slice(1);
  const serviceString = `United States ${service.branch} (${status})`;

  return (
    <CardFlag
      backgroundColor={background}
      className='card--flag'
      title={serviceString}
    >
      {fetchBranchImage()}
      <P className='noshow'>{serviceString}</P>
    </CardFlag>
  );
};

ServiceFlag.defaultProps = {
  service: '',
};

ServiceFlag.propTypes = {
  service: PropTypes.objectOf(PropTypes.string).isRequired,
};

const CardFlag = styled.section`
  align-items: center;
  background: ${(props) => props.backgroundColor};
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: right center;
  transform: scaleX(0.15);
  width: ${pxToEm(200)};
  z-index: 2;
  ${createTransitionForProperties(['transform'])};

  .logo {
    height: auto;
    max-height: ${pxToEm(150)};
    max-width: ${pxToEm(150)};
    opacity: 0;
    visibility: hidden;
    width: ${pxToEm(150)};
    ${createTransitionForProperties(['opacity', 'visibility'])};
  }

  .noshow {
    display: none;
  }

  &:hover {
    transform: scaleX(1);

    .logo {
      opacity: 1;
      transition-delay: 0.15s;
      visibility: visible;
    }
  }
`;

export default ServiceFlag;
