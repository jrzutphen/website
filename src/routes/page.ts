import type { PageLoad } from "./$types"

export const load = (({ url }) => {
    return {
        meta: {
            title: "Jongerenraad Zutphen",
            description: "Zutphen beter, mooier en leuker, voor en door jongeren",
            url: url.href
        }
    };
}) satisfies PageLoad;
