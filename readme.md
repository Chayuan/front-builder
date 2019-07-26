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

- Minify and copy image from `src/imgs` to `dist/imgs`
  > You should not rely on gulp minifier to minify your images though, and a pre-minification is strongly recommanded
- Compile scss files to a single `app.css` file (with a sourcemap for developpement)
- Compile Twig templates to html static files
  - Only twig files matching `src/views/*.twig` will result in compiled views. Twig files stored under subfloders (such as `src/views/components/*.twig`) won't result in a compiled html file.
- Bundle scripts to a single `app.js` file
  - Scripts will be minified and uglified for production
  - A sourcemap will be created while in production
- Support JSX and react applications
- Support import syntax and resolve folders indexes
- Support Vue app and Vue file component notation

## Under the hood

Using gulp to watch and compile scss and twigs. Gulp is also in charge of img minification and copy in the dist folder thanks to the powerful `gulp-imagemin` package.

Scripts are bundled using webpack and transpiled with babel.

Vue `<style></style>` tags will be converted in inline script.
