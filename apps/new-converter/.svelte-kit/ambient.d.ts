
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const AUTH_SECRET: string;
	export const LC_FIG_SET_PARENT: string;
	export const FIG_PID: string;
	export const NX_CLI_SET: string;
	export const NX_LOAD_DOT_ENV_FILES: string;
	export const nvm_default_version: string;
	export const TERM_PROGRAM: string;
	export const OJS_TOKEN: string;
	export const PYENV_ROOT: string;
	export const TERM: string;
	export const SHELL: string;
	export const NEXTAUTH_URL: string;
	export const FIGTERM_SESSION_ID: string;
	export const NEXT_PUBLIC_OJS_TOKEN: string;
	export const TMPDIR: string;
	export const _tide_prompt_and_frame_color: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const PNPM_HOME: string;
	export const _tide_color_truncated_dirs: string;
	export const _tide_reset_to_color_dirs: string;
	export const NX_CACHE_DIRECTORY: string;
	export const USER: string;
	export const NEXT_PUBLIC_OJS_API: string;
	export const COMMAND_MODE: string;
	export const YARN_CACHE_FOLDER: string;
	export const NX_TASK_HASH: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const AZURE_TENANT_ID: string;
	export const nvm_current_version: string;
	export const _tide_color_anchors: string;
	export const NX_TASK_TARGET_PROJECT: string;
	export const NPM_TOKEN: string;
	export const PATH: string;
	export const OJS_API: string;
	export const NX_WORKSPACE_ROOT: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const TTY: string;
	export const PWD: string;
	export const EDITOR: string;
	export const LANG: string;
	export const NODE_PATH: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const NX_VERBOSE_LOGGING: string;
	export const NEXT_PUBLIC_STYLE_DEV_URL: string;
	export const FORCE_COLOR: string;
	export const XPC_SERVICE_NAME: string;
	export const NX_VERCEL_REMOTE_CACHE_TOKEN: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const FIG_PARENT: string;
	export const PYENV_SHELL: string;
	export const SHLVL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const NEXTAUTH_SECRET: string;
	export const FIG_SET_PARENT: string;
	export const LOGNAME: string;
	export const PNPM_PACKAGE_NAME: string;
	export const XDG_DATA_DIRS: string;
	export const LC_CTYPE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const AZURE_ID: string;
	export const PKG_CONFIG_PATH: string;
	export const BUN_INSTALL: string;
	export const LERNA_PACKAGE_NAME: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const NX_VERCEL_REMOTE_CACHE_TEAM: string;
	export const AZURE_SECRET: string;
	export const _ZL_DATA: string;
	export const FIG_TERM: string;
	export const COLORTERM: string;
	export const _tide_location_color: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		AUTH_SECRET: string;
		LC_FIG_SET_PARENT: string;
		FIG_PID: string;
		NX_CLI_SET: string;
		NX_LOAD_DOT_ENV_FILES: string;
		nvm_default_version: string;
		TERM_PROGRAM: string;
		OJS_TOKEN: string;
		PYENV_ROOT: string;
		TERM: string;
		SHELL: string;
		NEXTAUTH_URL: string;
		FIGTERM_SESSION_ID: string;
		NEXT_PUBLIC_OJS_TOKEN: string;
		TMPDIR: string;
		_tide_prompt_and_frame_color: string;
		TERM_PROGRAM_VERSION: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		PNPM_HOME: string;
		_tide_color_truncated_dirs: string;
		_tide_reset_to_color_dirs: string;
		NX_CACHE_DIRECTORY: string;
		USER: string;
		NEXT_PUBLIC_OJS_API: string;
		COMMAND_MODE: string;
		YARN_CACHE_FOLDER: string;
		NX_TASK_HASH: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		AZURE_TENANT_ID: string;
		nvm_current_version: string;
		_tide_color_anchors: string;
		NX_TASK_TARGET_PROJECT: string;
		NPM_TOKEN: string;
		PATH: string;
		OJS_API: string;
		NX_WORKSPACE_ROOT: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		TTY: string;
		PWD: string;
		EDITOR: string;
		LANG: string;
		NODE_PATH: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		NX_VERBOSE_LOGGING: string;
		NEXT_PUBLIC_STYLE_DEV_URL: string;
		FORCE_COLOR: string;
		XPC_SERVICE_NAME: string;
		NX_VERCEL_REMOTE_CACHE_TOKEN: string;
		VSCODE_INJECTION: string;
		HOME: string;
		FIG_PARENT: string;
		PYENV_SHELL: string;
		SHLVL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		NEXTAUTH_SECRET: string;
		FIG_SET_PARENT: string;
		LOGNAME: string;
		PNPM_PACKAGE_NAME: string;
		XDG_DATA_DIRS: string;
		LC_CTYPE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		AZURE_ID: string;
		PKG_CONFIG_PATH: string;
		BUN_INSTALL: string;
		LERNA_PACKAGE_NAME: string;
		npm_config_user_agent: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		NX_VERCEL_REMOTE_CACHE_TEAM: string;
		AZURE_SECRET: string;
		_ZL_DATA: string;
		FIG_TERM: string;
		COLORTERM: string;
		_tide_location_color: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
