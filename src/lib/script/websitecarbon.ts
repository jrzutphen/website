// Adapted from https://gitlab.com/wholegrain/website-carbon-badges

export type WebsiteCarbonResponse = {
	// No clue tbh
};

const buildLocalStorageKey = (identifier: string): string =>
	`websitecarbon_${identifier}`;

async function requestWebsiteCarbon(
	identifier: string
): Promise<WebsiteCarbonResponse> {
	return await fetch("https://api.websitecarbon.com/b?url=" + identifier)
		.then(function (response) {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		})

		.then(function (response) {
			// Save the result into localStorage with a timestamp
			response.capturedTime = new Date().getTime();
			localStorage.setItem(
				buildLocalStorageKey(identifier),
				JSON.stringify(response)
			);
			return response;
		})

		// Handle error responses
		.catch(function (error) {
			localStorage.removeItem(buildLocalStorageKey(identifier));
			throw error;
		});
}

// 24 hours
const cacheExpirationMilliseconds = 24 * 60 * 60 * 1000;

export function getWebsiteCarbon(): Promise<WebsiteCarbonResponse> {
	const identifier = encodeURIComponent(window.location.href);

	const cachedResponse = localStorage.getItem(
		buildLocalStorageKey(identifier)
	);

	console.log(`Cached: ${cachedResponse}`);

	if (cachedResponse) {
		const time = new Date().getTime();
		const cachedTime = JSON.parse(cachedResponse).capturedTime;

		if (time - cachedTime > cacheExpirationMilliseconds) {
			return requestWebsiteCarbon(identifier);
		}

		return Promise.resolve(JSON.parse(cachedResponse));
	} else {
		return requestWebsiteCarbon(identifier);
	}
}
