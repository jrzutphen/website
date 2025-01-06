/* TODO 3 (see deno.jsonc)
import { AvailableLanguageTag } from "$lib/paraglide/runtime";
import { ParaglideLocals } from "@inlang/paraglide-sveltekit";
*/

declare global {
	namespace App {
		interface Error {}

		interface Locals {
			/* TODO 3 (see deno.jsonc)
			paraglide: ParaglideLocals<AvailableLanguageTag>;
			*/
		}

		interface PageData {}

		interface PageState {}

		interface Platform {}
	}
}

export {};
