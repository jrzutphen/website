import { assertEquals } from "jsr:@std/assert";

Deno.test("hello world", () => {
	const x = 1 + 2;
	assertEquals(x, 3);
});
