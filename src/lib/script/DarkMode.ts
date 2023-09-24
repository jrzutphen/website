import { writable } from "svelte/store";

// Update the preload script in `app.html` if you change this

enum Theme {
	System = "system",
	Light = "light",
	Dark = "dark"
}

const watchTheme = (theme: string) =>
	window.matchMedia(`(prefers-color-scheme: ${theme})`);

function getUserPreference(): Theme {
	if (watchTheme("dark").matches) {
		return Theme.Dark;
	} else if (watchTheme("light").matches) {
		return Theme.Light;
	}

	// This shouldn't happen, but just in case, default to light
	return Theme.Light;
}

const LOCAL_STORAGE_KEY = "colour-theme";

const currentTheme = writable<Theme>();

function setAttribute(theme: Theme) {
	document.documentElement.setAttribute("data-theme", theme);
}

function initialise() {
	currentTheme.update(() => {
		const value = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (value && Object.values<string>(Theme).includes(value)) {
			return value as Theme;
		}

		return Theme.System;
	});

	currentTheme.subscribe((theme) => {
		localStorage.setItem(LOCAL_STORAGE_KEY, theme);

		if (theme === Theme.System) {
			setAttribute(getUserPreference());
		} else {
			setAttribute(theme);
		}
	});

	watchTheme("dark").addEventListener("change", (event) => {
		if (event.matches) {
			setAttribute(Theme.Dark);
		}
	});

	watchTheme("light").addEventListener("change", (event) => {
		if (event.matches) {
			setAttribute(Theme.Light);
		}
	});
}

export { Theme, currentTheme, initialise };

export default {
	Theme,
	currentTheme,
	initialise
};
