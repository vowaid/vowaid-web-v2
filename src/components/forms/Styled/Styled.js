import styled from 'styled-components';

import { styled as muiStyled } from '@material-ui/core/styles';

import { gutter } from '../../../styles/utils';

const InputGroup = styled.div`
  margin-bottom: ${gutter.L};

  &.input-group--textarea {
    margin-top: ${gutter.XL};
  }

  > * {
    width: 100%;
  }
`;

const Feedback = muiStyled('small')(({ theme }) => {
  const paletteColor = (theme.palette.type === 'dark') ? 'light' : 'dark';

  return {
    color: theme.palette.error[paletteColor],
    display: 'inline-block',
  };
}, {
  withTheme: true,
});

export {
  Feedback,
  InputGroup,
};
