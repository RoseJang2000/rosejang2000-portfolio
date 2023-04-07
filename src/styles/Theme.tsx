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
  descColor: '#6d6d70',
  accentColor: '#111',
  boxColor: '#e9e9e9',
  boxColor2: '#D2D3DB',
  pointColor: '#EF4C51',
  lineColor: '#bcbcc6',
  modeColor: '#f49331',
  commandColor: '#E11E56',
};

export const darkTheme: Theme = {
  bgColor: '#232323',
  titleColor: '#fff',
  descColor: '#a2b3c1',
  accentColor: '#fff',
  boxColor: '#363636',
  boxColor2: '#252525',
  pointColor: '#e1484d',
  lineColor: '#4e545a',
  modeColor: '#f4dd31',
  commandColor: '#E11E56',
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
