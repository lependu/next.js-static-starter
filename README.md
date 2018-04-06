# nextjs-static-starter

Experimental starter for standalone [static](https://github.com/zeit/next.js#static-html-export) [Next.js](https://github.com/zeit/next.js) projects.

**Features:**
- [standard](https://github.com/standard/standard) linting
- [webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [recompose](https://github.com/acdlite/recompose)
- [jest](https://github.com/facebook/jest)
- External markdown
- External global css

**Caveats:**
- There are numerous issues with `next/head`. See [this](https://github.com/zeit/next.js/issues/4044) or [this](https://github.com/zeit/next.js/issues/3527).
- With this kind of setup (One page template serves multiple routes) navigation won't work in development. [Here](https://github.com/zeit/next.js/issues/2823) is a workaround. Links and navigation with static export works as expected.
