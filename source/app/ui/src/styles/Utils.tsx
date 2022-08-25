export const MQ = (breakpoint: number | string) => {
  return `@media (min-width: ${breakpoint}px)`;
};

export const mq = (breakpoint: number | string) => {
  return `@media (max-width: ${breakpoint}px)`;
};

export const HexToRGB = (hex: string) => {
  if (hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ]
      : null;
  }
  return null;
};
