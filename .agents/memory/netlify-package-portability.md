---
name: Netlify package portability
description: Prevent internal package registry URLs from breaking external Netlify builds.
---
Check the lockfile after every package installation before handing off changes for Netlify.

**Why:** A package installation wrote Replit-internal tarball URLs into the lockfile. The subsequent Netlify log reported an incomplete npm installation followed by missing build executables. A missing executable does not necessarily mean its dependency is absent from package.json.

**How to apply:** Make locked public npm tarball URLs portable without changing package versions or integrity hashes. Verify representative public downloads against their existing hashes. This is deployment portability, not permission to bypass a package blocked by the security firewall. Keep external Node versions compatible with Netlify's installed build plugins.
