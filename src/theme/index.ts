import {Colors, colors} from './colors';
import {Spacings, spacings} from './spacings';

export interface Theme {
  colors: Colors;
  spacings: Spacings;
}

const theme: Theme = {
  colors,
  spacings,
};

export default theme;
