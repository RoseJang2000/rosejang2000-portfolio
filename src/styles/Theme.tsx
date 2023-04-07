export interface Theme {
  bgColor: string;
  titleColor: string;
  descColor: string;
  accentColor: string;
  boxColor: string;
  boxColor2: string;
  pointColor: string;
  lineColor: string;
  modeColor: string;
  commandColor: string;
}

export const lightTheme: Theme = {
  bgColor: '#fefefe',
  titleColor: '#222',
  descColor: '#666779',
  accentColor: '#111',
  boxColor: '#E4E5F1',
  boxColor2: '#D2D3DB',
  pointColor: '#3772FF',
  lineColor: '#bcbcc6',
  modeColor: '#f49331',
  commandColor: '#006373',
};

export const darkTheme: Theme = {
  bgColor: '#17202A',
  titleColor: '#fff',
  descColor: '#a2b3c1',
  accentColor: '#fff',
  boxColor: '#25303B',
  boxColor2: '#1C2733',
  pointColor: '#3772FF',
  lineColor: '#4e545a',
  modeColor: '#f4dd31',
  commandColor: '#05A3A6',
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
