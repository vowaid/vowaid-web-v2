import { React, styled } from 'appReact';

import { colors, createTransitionForProperties, gutter, pxToEm } from 'styles/util';
import { inputHeight, sharedStyles } from 'styles/util/enums/formEnums';

/**
 * Description.
 *
 * @param {} props
 */
const Input = (props) => (
  <Label>
    <StyledInput
      {...props}
    />
    <LabelText>{props.placeholder}</LabelText>
  </Label>
);

const Label = styled.label`
  display: inline-block;
  position: relative;
  width: 100%;

  input:focus + span, input:not(:placeholder-shown) + span {
    color: ${colors.blackText.hex};
    transform: translateY(-50%);
  }

  /* For IE Browsers*/
  input:focus + span, input:not(:-ms-input-placeholder) + span {
    color: ${colors.blackText.hex};
    transform: translateY(-50%);
  }
`;

const LabelText = styled.span`
  color: ${colors.whiteShade[5].hex};
  display: inline-block;
  left: 0;
  padding: ${gutter.XS} ${gutter.M};
  pointer-events:  none;
  position: absolute;
  top: 0;
  ${createTransitionForProperties(['color', 'transform'])};
`;

const StyledInput = styled.input`
  ${sharedStyles}

  border-bottom: 1px solid ${colors.black.hex};
  box-shadow: inset 0 0 0 0 rgba(${colors.blue[100].rgb}, 0);
  height: ${inputHeight};
  ${createTransitionForProperties(['border-bottom', 'padding'])};

  &:focus {
    border-bottom: 3px solid ${colors.blue[100].hex};
    padding-bottom: calc(${gutter.XS} - ${pxToEm(2)});
  }

  &::placeholder {
    color: transparent;
  }
`;

export default Input;
