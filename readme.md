# twig-sass-boilerplate

## Installation

Clone the project and run `npm install`

## How to use

Build in production mode

- `npm run build:prod`

Build in developpement mode

- `npm run build`

Start watcher

- `npm run dev`
- `npm run watch`

That's it folks, you can start coding in the `src/` folder and let the magic happen.

> All the folder, srcs and destinations are customizable. Just edit the .env file depending on your needs

## What it does

- Minify and copy image from `src/imgs` to `dist/imgs` (path are editable)

  > You should not rely on gulp minifier to minify your images though, and a pre-minification is strongly recommanded

- Compile scss files to a single `app.css` file (with a sourcemap for developpement)

- Compile Twig templates to html static files

- Bundle scripts to a single `app.js` file

- Scripts will be minified and uglified for production

- A sourcemap will be created while in development

- Supported extensions are `.ts`, `.tsx`, `.js`, `.jsx`, `.vue`

- Support react applications

- Support import syntax and resolve folders indexes

- Support Vue app and Vue file component notation

- Support old browser (targets can be configured in `.babelrc`)

## Under the hood

Using gulp as a task runner.
Webpack as a script bundler, minifier and uglifier
Babel to transpile JavaScript
