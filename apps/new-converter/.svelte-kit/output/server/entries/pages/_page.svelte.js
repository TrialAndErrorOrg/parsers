import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>SvelteKit Auth Example</h1>
<p>This is an example site to demonstrate how to use <a href="${"https://kit.svelte.dev/"}">SvelteKit</a>
  with <a href="${"https://sveltekit.authjs.dev"}">SvelteKit Auth</a> for authentication.
</p>`;
});
export {
  Page as default
};
