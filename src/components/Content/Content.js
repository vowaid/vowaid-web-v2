import { styled as muiStyled } from '@material-ui/core/styles';

import { vowaidColors } from '../../styles/colors';

const Content = muiStyled('article')(({ theme }) => ({
  background: (theme.palette.type === 'light') ? vowaidColors.grayscale[90] : vowaidColors.grayscale[10],
  color: vowaidColors.fontColor[theme.palette.type],

  '& svg *': {
    fill: vowaidColors.fontColor[theme.palette.type],
  }
}), {
  withTheme: true
});

export default Content;