/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, prerendered, version } from "$service-worker";
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";

const precache_list = [...build, ...files, ...prerendered]
	.filter((entry) => {
		// Exclude meta image
		if (entry === "/asset/picture/meta.jpg") return false;
		// TODO add filters to ignore certain routes (large static files)

		return true;
	})
	.map((entry) => ({
		url: entry,
		revision: version
	}));

cleanupOutdatedCaches();
precacheAndRoute(precache_list, {
	// Ignore all URL parameters.
	ignoreURLParametersMatching: [/.*/]
});
