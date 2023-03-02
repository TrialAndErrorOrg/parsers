import { SvelteKitAuth } from "@auth/sveltekit";
import Azure from "@auth/core/providers/azure-ad";
const AZURE_TENANT_ID = "ca1b23a6-8063-4cce-91ec-3c11fdcd5874";
const AZURE_ID = "449542e1-0317-4a4a-bf45-e0678f37d461";
const AZURE_SECRET = "YWT7Q~C0xIRJJx2UmD4JyOit635rxtFXKNJmn";
console.log({ x: SvelteKitAuth });
const handle = SvelteKitAuth({
  providers: [Azure({ clientId: AZURE_ID, clientSecret: AZURE_SECRET, tenantId: AZURE_TENANT_ID })]
});
export {
  handle
};
