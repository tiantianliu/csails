/**
 * Created by chao on 2017/6/9.
 */
var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var ngmin = require('gulp-ngmin');
var stripDebug = require('gulp-strip-debug');
var htmlmin = require('gulp-htmlmin');
var changed = require('gulp-changed');
var babel = require('gulp-babel');
var del = require('del');


var tasksArgs = {

    minifyWeb: {
        taskName: 'minifyWeb',
        src: ['web/modules/modules.js', 'web/modules/app.js'],
        dest: 'www/js/',
        fileName: 'app.js',
    },
    minifycss: {
        taskName: 'minifycss',
        src: [ 'node_modules/bootstrap/dist/css/**.css','web/css/main.css'],
        dest: 'www/css/',
        fileName: 'main.css'
    },
    minifyModuleJs: {
        taskName: 'minifyModuleJs',
        src: ['web/modules/**/*.js', 'web/publish/dev/publishConfig.js', 'web/publish/dev/lib.js', '!web/modules/**.js'],
        dest: 'www/js/',
        fileName: 'modules.js',
    },
    minifyImages: {
        taskName: 'minifyImages',
        src: ['web/images/*.*'],
        dest: 'www/img/',
    },
    moveNode: {
        taskName: 'moveNode',
        src: [
            'node_modules/angular/**',
            'node_modules/angular-route/**',
            'node_modules/angular-ui-router/**',
            'node_modules/angular-resource/**',
            'node_modules/angular-animate/**',
            'node_modules/ng-dialog/**',
            'node_modules/ng-file-upload/**',
            'node_modules/ng-sweet-alert/**',
            'node_modules/sweetalert/dist/**',
            'node_modules/jquery/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js'
        ],
        dest: 'www/lib/'
    },
    minifyTemplates: {
        taskName: 'minifyTemplates',
        src: ['web/modules/**/templates/*.html'],
        dest: 'www/templates/'
    },
    moveIndexHtml: {
        taskName: 'moveIndexHtml',
        src: ['web/index.html'],
        dest: 'www/'
    }
};

var taskNames = [];

for (var key in tasksArgs) {
    var t = tasksArgs[key];
    taskNames.push(t.taskName);
    var doThings = [];
    doThings.push(t.taskName);
    gulp.watch(t.src, doThings);
}

gulp.task('default', taskNames);

// gulp.task(tasksArgs.clean.taskName, function () {
//     return del('www');
// });

gulp.task(tasksArgs.minifyWeb.taskName, function () {
    return gulp.src(tasksArgs.minifyWeb.src)
        .pipe(babel())
        .pipe(stripDebug())
        .pipe(ngAnnotate())
        .pipe(concat(tasksArgs.minifyWeb.fileName))
        .pipe(gulp.dest(tasksArgs.minifyWeb.dest))

        .pipe(ngmin({dynamic: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify({outSourceMap: false}))
        .pipe(gulp.dest(tasksArgs.minifyWeb.dest))
});

gulp.task(tasksArgs.minifyModuleJs.taskName, function () {
    return gulp.src(tasksArgs.minifyModuleJs.src)
        .pipe(babel())
        .pipe(stripDebug())
        .pipe(ngAnnotate())
        .pipe(concat(tasksArgs.minifyModuleJs.fileName))
        .pipe(gulp.dest(tasksArgs.minifyModuleJs.dest))

        .pipe(ngmin({dynamic: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify({outSourceMap: false}))
        .pipe(gulp.dest(tasksArgs.minifyModuleJs.dest))
});

gulp.task(tasksArgs.minifycss.taskName, function () {
    return gulp.src(tasksArgs.minifycss.src)      //压缩的文件
        .pipe(concat(tasksArgs.minifycss.fileName))
        .pipe(gulp.dest(tasksArgs.minifycss.dest))
        .pipe(minifyCss())   //执行压缩
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(tasksArgs.minifycss.dest))
});


gulp.task(tasksArgs.moveNode.taskName, function () {
    return gulp.src(tasksArgs.moveNode.src, {base: "node_modules"})
        .pipe(gulp.dest(tasksArgs.moveNode.dest))
});

gulp.task(tasksArgs.minifyImages.taskName, function () {
    return gulp.src(tasksArgs.minifyImages.src)
        .pipe(gulp.dest(tasksArgs.minifyImages.dest))
});


gulp.task(tasksArgs.minifyTemplates.taskName, function () {
    return gulp.src(tasksArgs.minifyTemplates.src)
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(tasksArgs.minifyTemplates.dest))
});
gulp.task(tasksArgs.moveIndexHtml.taskName, function () {
    return gulp.src(tasksArgs.moveIndexHtml.src)
        .pipe(gulp.dest(tasksArgs.moveIndexHtml.dest))
});