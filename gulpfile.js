const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const browserSync = require('browser-sync').create();
const del = require('del');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

// Rutas
const paths = {
  styles: {
    src: 'src/less/styles.less',
    dest: 'dist/css/'
  },
  templates: {
    src: ['src/templates/**/*.hbs', 'src/components/**/*.hbs'],
    dest: 'dist/js/templates/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  html: {
    src: 'index.html',
    dest: 'dist/'
  },
  data: {
    src: 'src/data/data.json',
    dest: 'dist/data/'
  }
};

// Limpia la carpeta dist
function clean() {
  return del(['dist']);
}

// Compila LESS
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Compila Handlebars a funciones JS
function templates() {
    return gulp
      .src(paths.templates.src)
      .pipe(handlebars())
      .pipe(wrap(function (data) {
        const filePath = data.file.relative.replace(/\\/g, '/');
  
        // 👉 Si es un componente → partial
        if (filePath.startsWith('components/')) {
          const partialName = filePath.replace('.js', '').replace('.hbs', '');
  
          return `
            Handlebars.registerPartial(
              '${partialName}',
              Handlebars.template(${data.contents})
            );
          `;
        }
  
        // 👉 Si es template principal
        const templateName = filePath
          .replace('templates/', '')
          .replace('.js', '')
          .replace('.hbs', '');
  
        return `
          this.Templates = this.Templates || {};
          this.Templates['${templateName}'] =
            Handlebars.template(${data.contents});
        `;
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('dist/js/'))
      .pipe(browserSync.stream());
  }
  
  
  

// Copia JS
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Copia HTML
function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// Copia JSON
function data() {
  return gulp.src(paths.data.src)
    .pipe(gulp.dest(paths.data.dest))
    .pipe(browserSync.stream());
}

// Servidor local + Watch
function dev() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('src/less/**/*.less', styles);
  gulp.watch('src/templates/**/*.hbs', templates);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch('index.html', html);
  gulp.watch(paths.data.src, data);
}

exports.clean = clean;
exports.styles = styles;
exports.templates = templates;
exports.scripts = scripts;
exports.data = data;
exports.html = html;

exports.build = gulp.series(clean, gulp.parallel(styles, templates, scripts, data, html));
exports.default = gulp.series(exports.build, dev);