import type { PageLoad } from "./$types"

export const load = (({ route }) => {
    return {
        meta: {
            title: "Jongerenraad Zutphen",
            description: "Zutphen beter, mooier en leuker, voor en door jongeren",
            url: `https://nieuw.jrzutphen.nl${route.id ? route.id : ""}`,
        }
    };
}) satisfies PageLoad;
