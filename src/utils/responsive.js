const small = 600;
const medium = 992;
const large = 1200;

export const mediumUp = `@media only screen and (min-width: ${small + 1}px)`;
export const largeUp = `@media only screen and (min-width: ${medium + 1}px)`;
export const extraLargeUp = `@media only screen and (min-width: ${large + 1}px)`;
export const smallDown = `@media only screen and (max-width: ${small}px)`;
export const mediumDown = `@media only screen and (max-width: ${medium}px) and (orientation: portrait)`;
export const mediumOnly = `@media only screen and (min-width : ${small + 1}px) and (max-width : ${medium}px)`;
export const smallLandscape = `@media only screen and (max-height: ${small})`;
