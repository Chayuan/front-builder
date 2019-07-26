import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import gulp from 'gulp'
import del from 'del'
import dotenv from 'dotenv'
import imagemin from 'gulp-imagemin'
import mqpacker from 'css-mqpacker'
import twig from 'gulp-twig'
import postcss from 'gulp-postcss'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import webpack from 'webpack-stream'

dotenv.config()

const PATHS = {
  src: {
    views: process.env.SRC_VIEWS,
    styles: process.env.SRC_STYLES,
    scripts: process.env.SRC_SCRIPTS,
    vuefiles: process.env.SRC_VUE,
    img: process.env.SRC_IMAGES,
    assets: process.env.SRC_ASSETS
  },
  dest: {
    global: process.env.DEST,
    views: process.env.DEST_VIEWS,
    styles: process.env.DEST_STYLES,
    scripts: process.env.DEST_SCRIPTS,
    img: process.env.DEST_IMAGES,
    assets: process.env.DEST_ASSETS
  }
}

function cleanDist() {
  return del(PATHS.dest.global + '/')
}

function views(isDev) {
  return gulp
    .src(PATHS.src.views)
    .pipe(twig())
    .pipe(gulp.dest(PATHS.dest.views))
}

function styles(isDev) {
  const postcssPlugins = [
    mqpacker({
      sort: true
    }),
    autoprefixer({
      flexbox: 'no-2009'
    })
  ]

  // Production mode -> minify CSS
  if (!isDev) {
    postcssPlugins.push(
      cssnano({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: false // loud comments are needed to turn autoprefixer off
            }
          }
        ]
      })
    )
  }

  if (isDev) {
    // Development mode
    return gulp
      .src(PATHS.src.styles)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(postcss(postcssPlugins))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(PATHS.dest.styles))
  } else {
    // Production mode
    return gulp
      .src(PATHS.src.styles)
      .pipe(sass())
      .pipe(postcss(postcssPlugins))
      .pipe(gulp.dest(PATHS.dest.styles))
  }
}

function images() {
  return gulp
    .src(PATHS.src.img)
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true, optimizationLevel: 2 }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 4 }),
          imagemin.svgo({
            // https://github.com/svg/svgo#what-it-can-do
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
          })
        ],
        {
          verbose: false
        }
      )
    )
    .pipe(gulp.dest(PATHS.dest.img))
}

function assets() {
  return gulp.src(PATHS.src.assets).pipe(gulp.dest(PATHS.dest.assets))
}

function scripts(isDev) {
  return gulp
    .src('src/js/index.js')
    .pipe(webpack(require(`./webpack.config.${isDev ? 'dev' : 'prod'}.js`)))
    .pipe(gulp.dest(PATHS.dest.scripts))
}

async function build(isDev = true) {
  console.log(`building in ${isDev ? 'DEVELOPPEMENT' : 'PRODUCTION'}`)
  try {
    await cleanDist()
    views(isDev)
    styles(isDev)
    scripts(isDev)
    images()
    assets()
  } catch (err) {
    console.error(err)
  }
}

async function buildProd() {
  await build(false)
}

async function watch() {
  // Launches tasks once before watching (creates files if needed)
  try {
    await cleanDist()
    views(true)
    styles(true)
    scripts(true)
    images()
    assets()
  } catch (err) {
    console.error(err)
  }
  gulp.watch(PATHS.src.styles, styles)
  gulp.watch(PATHS.src.views, views)
  gulp.watch(PATHS.src.scripts, scripts)
  gulp.watch(PATHS.src.vuefiles, scripts)
  gulp.watch(PATHS.src.img, images)
  gulp.watch(PATHS.src.assets, assets)
}

gulp.task('build', build)
gulp.task('build:prod', buildProd)
gulp.task('watch', watch)
