import { TypographyOptions } from '@mui/material/styles/createTypography';

export const fontFamily = {
  DMSans: ['DM Sans', 'sans-serif'].join(','),
  poppins: ['Poppins', 'sans-serif'].join(','),
};

const typography: TypographyOptions = {
  fontFamily: fontFamily.DMSans,
  h1: {
    fontSize: '3.25rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2.25rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.875rem',
    fontWeight: 700,
  },
  h4: {
    fontSize: '1.625rem',
    fontWeight: 700,
  },
  h5: {
    fontSize: '1.375rem',
    fontWeight: 700,
  },
  h6: {
    fontSize: '1.2rem',
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: '1.1rem',
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  body1: {
    fontSize: '1.05rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.975rem', // was 0.875 — kattaroq
    fontWeight: 400,
  },
  caption: {
    fontSize: '0.875rem', // was 0.75 — kattaroq
    fontWeight: 600,
  },
  button: {
    fontSize: '1.05rem',
    fontWeight: 500,
  },
};

export default typography;
