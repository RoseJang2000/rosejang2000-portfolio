export interface Theme {
  bgColor: string;
  titleColor: string;
  descColor: string;
  accentColor: string;
  boxColor: string;
  boxColor2: string;
  pointColor: string;
  lineColor: string;
}

export const lightTheme: Theme = {
  bgColor: '#fefefe',
  titleColor: '#222',
  descColor: '#76778b',
  accentColor: '#111',
  boxColor: '#E4E5F1',
  boxColor2: '#D2D3DB',
  pointColor: '#3772FF',
  lineColor: '#9394A5',
};

export const darkTheme: Theme = {
  bgColor: '#17202A',
  titleColor: '#fff',
  descColor: '#8899A6',
  accentColor: '#fff',
  boxColor: '#25303B',
  boxColor2: '#1C2733',
  pointColor: '#3772FF',
  lineColor: '#8B98A5',
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;