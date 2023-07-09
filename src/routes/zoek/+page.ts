import type { PageLoad } from "./$types";

export const load = (({ url, route }) => {
	const query = url.searchParams.get("naar");

	let title = "Jongerenraad Zutphen | Zoek";
	if (query) {
		title += ` naar "${query}"`;
	}

	return {
		meta: {
			title,
			description:
				"Zutphen beter, mooier en leuker, voor en door jongeren",
			url: `https://nieuw.jrzutphen.nl${route.id ? route.id : ""}`
		},
		query
	};
}) satisfies PageLoad;
