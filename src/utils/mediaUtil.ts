export const mediaQueryString = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const breakpoints = {
  xl: 1024,
  lg: 992,
  md: 768,
  sm: 480,
  xs: 320,
};
const device = {
  xl: mediaQueryString(breakpoints.xl),
  lg: mediaQueryString(breakpoints.lg),
  md: mediaQueryString(breakpoints.md),
  sm: mediaQueryString(breakpoints.sm),
  xs: mediaQueryString(breakpoints.xs),
};

export default device;
