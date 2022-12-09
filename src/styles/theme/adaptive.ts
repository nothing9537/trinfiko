const breakpoints = [
	'560px',
	'768px',
	'992px',
	'1200px',
	'1600px',
	'1920px',
	'2560px'
];

export const mediaQueries = {
	mobile: `@media screen and (max-width: ${breakpoints[0]})`,
	tablet: `@media screen and (max-width: ${breakpoints[1]})`,
	computer: `@media screen and (max-width: ${breakpoints[2]})`,
	desktop: `@media screen and (max-width: ${breakpoints[3]})`,
	hdPlus: `@media screen and (max-width: ${breakpoints[4]})`,
	wideScreen: `@media screen and (max-width: ${breakpoints[5]})`,
	superWideScreen: `@media screen and (max-width: ${breakpoints[6]})`
}