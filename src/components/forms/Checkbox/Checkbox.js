import { PropTypes, React, styled } from 'appReact';

import CheckboxSvg from 'assets/svg/checkbox.svg';

import { colors, createTransitionForProperties, gutter, pxToEm } from 'styles/util';
import { inputHeight, sharedStyles } from 'styles/util/enums/formEnums';

/**
 * Description.
 *
 * @param {} props
 */
const Checkbox = (props) => {
  return (
    <Label>
      <input
        {...props}
        type='checkbox'
        value={props.label}
      />
      <CheckboxSvg />

      <LabelText>{props.label}</LabelText>
    </Label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const checkboxHeight = pxToEm(30);

const Label = styled.label`
  align-content: center;
  display: flex;
  margin-bottom: ${gutter.S};
  text-transform: capitalize;

  .svg--checkbox {
    height: auto;
    margin-right: ${gutter.XS};
    width: ${checkboxHeight};

    .check {
      animation: hideCheck 0.45s linear forwards;
      fill: none;
      stroke: ${colors.red.default.hex};
      stroke-dasharray: 400;
      stroke-dashoffset: 400;
      stroke-width: calc(${checkboxHeight} / 2);
    }

    .box {
      animation: showBox 0.35s linear forwards;
      fill: none;
      stroke: ${colors.blue.default.hex};
      stroke-dasharray: 400;
      stroke-dashoffset: 400;
      stroke-width: calc(${checkboxHeight} / 2);
    }
  }

  input[type='checkbox'] {
    display: none;

    &:checked + .svg--checkbox {
      .box {
        animation: hideBox 0.35s linear forwards;
      }

      .check {
        animation: showCheck 0.45s linear forwards;
      }
    }
  }

  @keyframes showBox {
    0% { stroke-dashoffset: -400; }
    100% { stroke-dashoffset: 0; }
  }

  @keyframes hideBox {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 400; }
  }

  @keyframes showCheck {
    0% { stroke-dashoffset: -400; }
    100% { stroke-dashoffset: 0; }
  }

  @keyframes hideCheck {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -400; }
  }
`;

const LabelText = styled.span`
  display: inline-block;
  line-height: ${checkboxHeight};
`;

export default Checkbox;
