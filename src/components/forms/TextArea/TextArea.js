import { React, styled } from 'appReact';
import { colors, createTransitionForProperties, gutter, pxToEm } from 'styles/util';

import { inputHeight, sharedStyles } from 'styles/util/enums/formEnums';

/**
 * Description.
 *
 * @param {} props
 */
const TextArea = (props) => (
  <Label>
    <StyledTextArea
      {...props}
    />
    <LabelText>{props.placeholder}</LabelText>
  </Label>
);

const Label = styled.label`
  display: inline-block;
  position: relative;
  width: 100%;

  textarea:focus + span, textarea:not(:placeholder-shown) + span {
    color: ${colors.blackText.hex};
    transform: translateY(-80%);
  }

  /* For IE Browsers*/
  textarea:focus + span, textarea:not(:-ms-input-placeholder) + span {
    color: ${colors.blackText.hex};
    transform: translateY(-80%);
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

const StyledTextArea = styled.textarea`
  ${sharedStyles}

  border: 1px solid ${colors.black.hex};
  height: calc(${inputHeight} * 3);
  line-height: 1.5;
  max-height: calc(${inputHeight} * 10);
  min-height: calc(${inputHeight} * 1.5);
  overflow-x: hidden;
  overflow-y: scroll;
  resize: vertical;
  ${createTransitionForProperties(['border', 'padding'])};

  &:focus {
    border: 3px solid ${colors.blue[100].hex};
    padding: calc(${gutter.XS} - ${pxToEm(2)}) calc(${gutter.M} - ${pxToEm(2)});
  }

  &::placeholder {
    color: transparent;
  }
`;

export default TextArea;
