import 'styled-components';
import { Theme } from './styles/Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Theme;
  }
}
