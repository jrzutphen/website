import { create } from "@storybook/theming";

const colourPalette = {
	raisin: "#211f20",
	rum: "#49392d",
	crustacean: "#f7f9ef",
	cream: "#efebdc",
	sapphire: "#27647f",
	starryNight: "#325795",
	madder: "#ce353a",
	mahogany: "#ba2e29",
	artichoke: "#426b3b",
	asparagus: "#4b7b2f",
};

export default create({
	base: "light",

	brandTitle: "Jongerenraad Zutphen",
	brandUrl: "https://jrzutphen.nl",
	brandImage: "/asset/picture/banner-dark.svg",
	brandTarget: "_blank",

	fontBase: "'Lexend Deca Variable', sans-serif",
	fontCode: "'Fira Code Variable', monospace",

	colorPrimary: colourPalette.cream,
	colorSecondary: colourPalette.raisin,

	appBg: colourPalette.cream,
	appContentBg: colourPalette.crustacean,
	appPreviewBg: colourPalette.crustacean,
	appBorderColor: colourPalette.raisin,
	appBorderRadius: 0,

	textColor: colourPalette.raisin,
	textInverseColor: colourPalette.crustacean,
	textMutedColor: colourPalette.rum,

	barTextColor: colourPalette.crustacean,
	barHoverColor: colourPalette.artichoke,
	barSelectedColor: colourPalette.asparagus,
	barBg: colourPalette.raisin,

	buttonBg: colourPalette.sapphire,
	buttonBorder: colourPalette.raisin,

	booleanBg: colourPalette.cream,
	booleanSelectedBg: colourPalette.crustacean,

	inputBg: colourPalette.cream,
	inputBorder: colourPalette.raisin,
	inputTextColor: colourPalette.raisin,
	inputBorderRadius: 0,

	gridCellSize: 8,
});
