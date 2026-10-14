---
name: Performance auditing
description: Audit conditions and analytics constraints for PageSpeed work.
---
Audit the production build, stating whether HTTP compression was enabled, and distinguish local Lighthouse results from published PageSpeed results.

**Why:** The Eleventy development server adds reload scripts and serves uncompressed output; its performance score is not a reliable prediction of the deployed static build. Perfect scores cannot be guaranteed across runs.

**How to apply:** Use a production build for final measurements, report actual measured scores, and do not claim a local compressed-server test proves the live site's compression or score.

Keep the user's requested MyWebsiteVisits analytics enabled during performance work.

**Why:** The user explicitly requested the tracker. Its script endpoint sends a cookie that triggered Lighthouse's third-party-cookie warning; the endpoint supports anonymous CORS loading.

**How to apply:** Preserve analytics rather than removing it to improve a score. Recheck the endpoint's CORS support if anonymous loading ever stops working.
