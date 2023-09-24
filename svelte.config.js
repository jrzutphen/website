import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import remarkBehead from "remark-behead";
import remarkBreaks from "remark-breaks";
import remarkFootnotes from "remark-footnotes";
import remarkGemoji from "remark-gemoji";
import remarkGFM from "remark-gfm";
import remarkHeadingID from "remark-heading-id";
import remarkHint from "remark-hint";
import rehypeKaTeXSvelte from "rehype-katex-svelte";
import remarkLicense from "remark-license";
import remarkMath from "remark-math";
import remarkMentions from "remark-mentions";
import remarkToc from "remark-toc";
import { visit } from "unist-util-visit";

const remarkMermaidCustom = () => (tree) => {
	visit(tree, "code", (node) => {
		if (node.lang === "mermaid") {
			const str = node.value;

			// Output in <pre class="mermaid">...</pre>

			node.type = "html";
			node.value = `<pre class="mermaid">${str}</pre>`;
		}
	});
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx"],

	preprocess: [
		mdsvex({
			smartypants: {
				dashes: "oldschool"
			},
			layout: {
				news: "./src/lib/layout/news.svelte",
				event: "./src/lib/layout/event.svelte",
				_: "./src/lib/layout/fallback.svelte"
			},
			remarkPlugins: [
				[remarkBehead, { depth: 1 }],
				remarkBreaks,
				remarkFootnotes,
				remarkGemoji,
				[remarkGFM, { singleTilde: false }],
				[remarkHeadingID, { defaults: true }],
				remarkHint,
				[
					remarkMentions,
					{
						usernameLink: (u) =>
							`https://community.jrzutphen.nl/u/${u}`
					}
				],
				remarkLicense,
				remarkMath,
				remarkMermaidCustom,
				[remarkToc, { heading: "Inhoudsopgave" }]
			],
			rehypePlugins: [rehypeKaTeXSvelte]
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter({
			// TODO: re-enable strict mode when we have all pages
			strict: false
		}),
		prerender: {
			handleHttpError: "warn",
			handleMissingId: "warn"
		}
	}
};

export default config;
