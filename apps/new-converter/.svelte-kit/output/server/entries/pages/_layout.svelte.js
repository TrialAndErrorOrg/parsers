import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,\n      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,\n      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n      "Noto Color Emoji";padding:0 1rem 1rem 1rem;max-width:680px;margin:0 auto;background:#fff;color:#333}li,p{line-height:1.5rem}a{font-weight:500}hr{border:1px solid #ddd}iframe{background:#ccc;border:1px solid #ccc;height:10rem;width:100%;border-radius:0.5rem;filter:invert(1)}.nojs-show.svelte-1y2yc9c{opacity:1;top:0}.signedInStatus.svelte-1y2yc9c{display:block;min-height:4rem;width:100%}.loaded.svelte-1y2yc9c{position:relative;top:0;opacity:1;overflow:hidden;border-radius:0 0 0.6rem 0.6rem;padding:0.6rem 1rem;margin:0;background-color:rgba(0, 0, 0, 0.05);transition:all 0.2s ease-in}.signedInText.svelte-1y2yc9c,.notSignedInText.svelte-1y2yc9c{position:absolute;padding-top:0.8rem;left:1rem;right:6.5rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:inherit;z-index:1;line-height:1.3rem}.signedInText.svelte-1y2yc9c{padding-top:0rem;left:4.6rem}.avatar.svelte-1y2yc9c{border-radius:2rem;float:left;height:2.8rem;width:2.8rem;background-color:white;background-size:cover;background-repeat:no-repeat}.button.svelte-1y2yc9c,.buttonPrimary.svelte-1y2yc9c{float:right;margin-right:-0.4rem;font-weight:500;border-radius:0.3rem;cursor:pointer;font-size:1rem;line-height:1.4rem;padding:0.7rem 0.8rem;position:relative;z-index:10;background-color:transparent;color:#555}.buttonPrimary.svelte-1y2yc9c{background-color:#346df1;border-color:#346df1;color:#fff;text-decoration:none;padding:0.7rem 1.4rem}.buttonPrimary.svelte-1y2yc9c:hover{box-shadow:inset 0 0 5rem rgba(0, 0, 0, 0.2)}.navItems.svelte-1y2yc9c{margin-bottom:2rem;padding:0;list-style:none}.navItem.svelte-1y2yc9c{display:inline-block;margin-right:1rem}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div><header><div class="${"signedInStatus svelte-1y2yc9c"}"><p class="${"nojs-show loaded svelte-1y2yc9c"}">${$page.data.session ? `${$page.data.session.user?.image ? `<span style="${"background-image: url('" + escape($page.data.session.user.image, true) + "')"}" class="${"avatar svelte-1y2yc9c"}"></span>` : ``}
          <span class="${"signedInText svelte-1y2yc9c"}"><small>Signed in as</small><br>
            <strong>${escape($page.data.session.user?.email ?? $page.data.session.user?.name)}</strong></span>
          <a href="${"/auth/signout"}" class="${"button svelte-1y2yc9c"}" data-sveltekit-preload-data="${"off"}">Sign out</a>` : `<span class="${"notSignedInText svelte-1y2yc9c"}">You are not signed in</span>
          <a href="${"/auth/signin"}" class="${"buttonPrimary svelte-1y2yc9c"}" data-sveltekit-preload-data="${"off"}">Sign in</a>`}</p></div>
    <nav><ul class="${"navItems svelte-1y2yc9c"}"><li class="${"navItem svelte-1y2yc9c"}"><a href="${"/"}">Home</a></li>
        <li class="${"navItem svelte-1y2yc9c"}"><a href="${"/protected"}">Protected</a></li></ul></nav></header>
  ${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
