# Anystyle api

Anystyle is a ruby package which is able to parse plaintext citations into CSL.

Extremely useful and not really something we can replicate elsewhere, so I just created a serverless function which, when hosted on Vercel, should "just work"TM.

Just push a post request to `/api/style` with the body containing a list of plaintext referencences and you should get returned an array of CSL formatted references. Works pretty well! See [the main repo](https://github.com/tefkah/anystyle-api).
