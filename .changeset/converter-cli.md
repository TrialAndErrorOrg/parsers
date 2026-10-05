---
'@trialanderror/converter-cli': minor
---

**Breaking:** move to zod 4, yargs 18, chokidar 5 and js-yaml 5. The JSON schema for config files is now exported as `@trialanderror/converter-cli/schema.json`, generated with zod's own `z.toJSONSchema`. The index stats are returned in the declared `Output` shape.
