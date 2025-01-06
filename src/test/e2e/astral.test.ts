import { assertEquals } from "jsr:@std/assert";
import { launch } from "jsr:@astral/astral";

Deno.test("hello world", async () => {
	const browser = await launch();
	const page = await browser.newPage("http://deno.com");
	const title = await page.$("title");
	assertEquals(
		await title?.innerHTML(),
		"Deno, the next-generation JavaScript runtime",
	);
	await browser.close();
});
