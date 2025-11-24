# Website source code for DBML 2026 Workshop (w/ ICDE)

The previous DBML workshop websites were integrated into the monorepo for TU Delft's Web Information Systems (WIS) group using Jekyll. Starting this year, the website's source code has been refactored out to be its own repository using 11ty+Nunjucks. 

## Building

1. Ensure thata recent version of nodejs is installed. 
2. Run `npm install` at project root the install dependencies. 
3. Run `npx @11ty/eleventy --serve` at project root to start a localhost server. This will build an updated static website at `/docs`. 
4. Push the changes at `/docs` to GitHub. GitHub Pages serves the webstied from the `/docs` directory. 
