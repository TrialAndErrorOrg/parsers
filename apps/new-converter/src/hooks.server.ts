import SvelteKitAuth from '@auth/sveltekit'
import Azure from '@auth/core/providers/azure-ad'
import { AZURE_ID, AZURE_SECRET, AZURE_TENANT_ID } from '$env/static/private'

console.log({ x: SvelteKitAuth })
//
export const handle = SvelteKitAuth({
  providers: [Azure({ clientId: AZURE_ID, clientSecret: AZURE_SECRET, tenantId: AZURE_TENANT_ID })],
})
