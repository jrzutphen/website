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

// We wish to expend the remark-hint plugin
// Normally, it would output something like this:
// <p class="hint warn">[content]</p>
// We want to change it to this:
// <details class="hint warn">
//   <summary>[icon] Warning</summary>
//   <p>[content]</p>
// </details>
const remarkExtendedHints = () => (tree) => {
	visit(tree, "paragraph", (node, index, parent) => {
		if (node?.data?.class?.split(" ").includes("hint")) {
			const classes = node.data.class.split(" ");

			let icon = "";
			let title = "";
			let chevron = `
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
					<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
				</svg>
			`;

			if (classes.includes("error")) {
				icon = `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
					</svg>
				`;
				title = "Error";
			} else if (classes.includes("warn")) {
				icon = `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						<path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
					</svg>
				`;
				title = "Warning";
			} else if (classes.includes("tip")) {
				icon = `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						<path fill-rule="evenodd" d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z" clip-rule="evenodd" />
					</svg>
				`;
				title = "Tip";
			}

			const openingNode = {
				type: "html",
				value: `
					<details class="${node.data.class}" open>
						<summary>
							<span class="title">
								${icon}
								${title}
							</span>
							<span class="chevron">
								${chevron}
							</span>
						</summary>
					`
			};
			const closingNode = {
				type: "html",
				value: `
					</details>
				`
			};

			const cleanedClasses = classes
				.filter((c) => !["hint", "error", "warn", "tip"].includes(c))
				.join(" ");
			node.data.class = cleanedClasses;
			node.data.hProperties.class = cleanedClasses;

			parent.children.splice(index, 1, openingNode, node, closingNode);
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
				remarkExtendedHints,
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
