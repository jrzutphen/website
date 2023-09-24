// Adapted from https://gitlab.com/wholegrain/website-carbon-badges

type WebsiteCarbonResponse = {
	c: number;
	p: number;
	url: string;
};

type WebsiteCarbon = {
	gramCarbonPerVisit: number;
	capturedTime: Date;
	percentile: number;
	url: URL;
};

type WebsiteCarbonCache = {
	carbon: number;
	percentile: number;
	url: string;
	time: string;
};

function mapResponse(response: WebsiteCarbonResponse): WebsiteCarbon {
	console.log(`Response: ${JSON.stringify(response)}`);
	return {
		gramCarbonPerVisit: response.c,
		capturedTime: new Date(),
		percentile: response.p,
		url: new URL(response.url)
	};
}

function toCache(response: WebsiteCarbon): WebsiteCarbonCache {
	return {
		carbon: response.gramCarbonPerVisit,
		percentile: response.percentile,
		url: response.url.href,
		time: response.capturedTime.toISOString()
	};
}

function fromCache(cache: WebsiteCarbonCache): WebsiteCarbon {
	return {
		gramCarbonPerVisit: cache.carbon,
		capturedTime: new Date(cache.time),
		percentile: cache.percentile,
		url: new URL(cache.url)
	};
}

const buildLocalStorageKey = (identifier: string): string =>
	`websitecarbon_${identifier}`;

async function requestWebsiteCarbon(
	identifier: string
): Promise<WebsiteCarbon> {
	return await fetch("https://api.websitecarbon.com/b?url=" + identifier)
		.then(function (response) {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		})

		.then(mapResponse)

		.then(function (response) {
			// Save the result into localStorage with a timestamp
			localStorage.setItem(
				buildLocalStorageKey(identifier),
				JSON.stringify(toCache(response))
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

function getWebsiteCarbon(
	url: string = window.location.href
): Promise<WebsiteCarbon> {
	const identifier = encodeURIComponent(url);

	const cachedResponse = localStorage.getItem(
		buildLocalStorageKey(identifier)
	);

	console.log(`Cached: ${cachedResponse}`);

	if (cachedResponse) {
		const parsed = fromCache(JSON.parse(cachedResponse));

		const time = new Date().getTime();
		if (
			time - parsed.capturedTime.getTime() >
			cacheExpirationMilliseconds
		) {
			return requestWebsiteCarbon(identifier);
		}

		return Promise.resolve(parsed);
	} else {
		return requestWebsiteCarbon(identifier);
	}
}

export type { WebsiteCarbon };

export { getWebsiteCarbon };
