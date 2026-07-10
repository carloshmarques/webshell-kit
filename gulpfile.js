const { series } = require('gulp');
const gulp = require('gulp');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps'); // 👈 Integrado dinamicamente para a tarefa styles
const browserSync = require('browser-sync').create();
const jshint = require('gulp-jshint');
const modernizr = require('gulp-modernizr');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');

/* in the future as the files go large, you might want to install
gulp-autoprefixer & gulp-concat
see documentation at:  https://www.npmjs.com/package/gulp-autoprefixer

/*
* Add your variables here
*
*/

var outputDir = "./dist/";
var inputDir = "./assets/"; // 👈 Ajustado para ler da tua pasta assets/ atual sem quebrar os globs

/*
 * by default gulp task are set to a development mode as seen on the line var env = process.env.NODE_ENV || 'development';
 * to run tasks in a production mode, type in terminal NODE_ENV=production and task ex: NODE_ENV=production gulp js
 *
 */

var env = process.env.NODE_ENV || 'development';

var pugConfig = {};

if (env === 'development') {
  pugConfig.pretty = true;
}

if (env === 'production') {
  pugConfig.pretty = false;
}

/// Create your functions here

/* ============================================================
   Task: HTML (Pug → HTML)
   - Compila templates Pug
   - Locals iguais aos teus, mas vazios
============================================================ */
function templates(cb) {

  var pugConfig = {};

  if (env === 'development') {
    pugConfig.pretty = true;   // HTML legível
  }

  if (env === 'production') {
    pugConfig.pretty = false;  // HTML compacto
  }

  gulp
    // Altera a linha do gulp.src na função de templates do teu gulpfile.cjs:
    gulp.src(inputDir + 'templates/*.pug') // 👈 🔥 REMOVE UM ASTERISCO: Lê apenas a index.pug da raiz!
    .pipe(plumber())
    .pipe(require('gulp-pug')({
      pretty: pugConfig.pretty,
      locals: {
        env: '',
        title: '',
        description: '',
        name: '',
        themes: [],
        tags: [],
        theme: null,
        currentPage: '',
        siteName: '',
        pageTitle: ''
      }
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(outputDir))
    .on('end', browserSync.reload);

  cb();
}


/// js 
function js(cb) {
  gulp
  .src(inputDir + 'js/main.js')
  .pipe(plumber())
  .pipe(browserify({debug: env === 'development' }))
  .pipe(gulpif(env === 'production', uglify()))  
  .pipe(plumber.stop())
  .pipe(gulp.dest(outputDir + 'js'));

   cb();      
}

// js_hint to see errors on *.js files
function js_hint(cb) {
  gulp
  .src(outputDir + 'js/**/**/*.js')
  .pipe(plumber())
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(plumber.stop())

  cb();
}

// modernizr options
 function modernizer(cb){

  gulp
  .src(inputDir + 'js/modernizr.js')
  .pipe(plumber())
  .pipe(browserify({debug: env === 'development' }))
  .pipe(gulpif(env === 'production', uglify())) 
  .pipe(modernizr({
    'options': ['setClasses'],
    'tests': [
      'webworkers',
      [
        'cssgrid',
        'cssgridlegacy'
      ]
    ],
    excludeTests: ['csstransforms3d']
    })) 
  .pipe(gulpif(env === 'production', uglify())) 
  .pipe(plumber.stop())
  .pipe(gulp.dest(outputDir + 'js'))
  cb();
};

/// CSS tasks here
function styles(cb) {
  
  var config = {};
  if (env === 'development') {
  config.sourceComments = 'map';
  }
  if (env === 'production') {
    config.outputStyle = 'compressed';
    }
     gulp
     .src(inputDir + 'sass/main.scss')
     .pipe(plumber())
     .pipe(sourcemaps.init({loadMaps: true}))
     .pipe(sourcemaps.init({largeFile: true}))
     .pipe(sass(config))
     .pipe(sourcemaps.write())
     .pipe(plumber.stop())
     .pipe(gulp.dest(outputDir + 'css'))

  cb(); 
};

// minify images
function images(cb){
  gulp
  .src(inputDir + 'img/**/**/*.+(png|jpg|jpeg|gif|svg|ico)') // 👈 Ajustado para ler da tua img/ atual
  .pipe(plumber())
  .pipe(cache(imagemin({ 
    interlaced: true,
    progressive: true,
    optimizationLevel: 10,
   })))
  .pipe(plumber.stop()) 
  .pipe(gulp.dest(outputDir + 'img'));

  cb();
};

/// Web Server & Watch tasks here — Bloqueado para o browser de código interno
function watch(cb) {

  browserSync.init({
    server: outputDir,
    open: false,      // 👈 🔥 Mantém travada a abertura de janelas do Edge
    localOnly: true,  // 👈 Silencia túneis externos de rede
    ui: false,
    notify: true
  });

  gulp.watch(inputDir + 'templates/**/*.pug', series(templates));
  gulp.watch(inputDir + 'js/**/main.js', js).on('change', browserSync.reload);
  gulp.watch(inputDir + 'js/**/modernizr.js', modernizer).on('change', browserSync.reload);
  gulp.watch(inputDir + 'js/**/**/*.js', js_hint).on('change', browserSync.reload);
  gulp.watch(inputDir + 'sass/**/*.scss', styles).on('change', browserSync.reload);
  gulp.watch(inputDir + 'img/**/**/*.+(png|jpg|jpeg|gif|svg|ico)', images).on('change', browserSync.reload);
  gulp.watch(outputDir + '*.html').on('change', browserSync.reload);

  cb();
};

/* ============================================================
   Task: HTML (Pug → HTML)
   - (REMOVIDA DO DEFAULT PARA NÃO DUPLICAR)
============================================================ */
function html(cb) {
  cb(); // 👈 Mantida só para não quebrar exports, mas não compila nada
}

/// ##############################################################################################################

// exports here
exports.templates = templates
exports.js = js
exports.watch = watch
exports.styles = styles
exports.js_hint = js_hint
exports.modernizer = modernizer
exports.images = images
exports.html = html

// set default task here (Adicionado a cadeia estável de processamento inicial antes do watch)
exports.default = series(templates, js, modernizer, styles, images, watch);

function defaultTask(cb) {  
   cb();
}

/*
 * by default gulp task are set to a development mode as seen on the line var env = process.env.NODE_ENV || 'development';
 * to run tasks in a production mode, type in terminal NODE_ENV=production and task ex: NODE_ENV=production gulp 
 * or NODE_ENV=development or just gulp + task
 */
