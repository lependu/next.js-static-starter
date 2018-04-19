# nextjs-static-starter

Experimental starter for standalone [static](https://github.com/zeit/next.js#static-html-export) [Next.js](https://github.com/zeit/next.js) projects.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/lependu/next.js-static-starter.svg?branch=master)](https://travis-ci.org/lependu/next.js-static-starter)
[![Greenkeeper badge](https://badges.greenkeeper.io/lependu/next.js-static-starter.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/lependu/next.js-static-starter/badge.svg)](https://snyk.io/test/github/lependu/next.js-static-starter)


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
