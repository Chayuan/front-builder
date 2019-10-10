# twig-sass-boilerplate

## Installation

Clone the project and run `npm install`

## How to use

Build :

- production mode `npm run build:prod`
- developpement mode `npm run build`

Watch :

- `npm run dev` or `npm run watch`

That's it folks, you can start coding in the `src/` folder and let the magic happen.

> All the folder, srcs and destinations are customizable. Just edit the .env file depending on your needs

## List of specific tasks

- `npm run scripts`
- `npm run scripts:prod`
- `npm run styles`
- `npm run styles:prod`
- `npm run imgs`
- `npm run imgs:prod`
- `npm run assets`
- `npm run assets:prod`
- `npm run views`
- `npm run views:prod`

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

## Notes

This project comes with the `.prettierrc` with my configuration. You may want to modify or delete it depending on your team workflow and politic regarding code formatting.

- Deleting the `.prettierrc` will not affect the good working of the project.
