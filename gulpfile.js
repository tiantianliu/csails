/**
 * Created by chao on 2017/6/9.
 */
var gulp = require( 'gulp');
var ngAnnotate = require('gulp-ng-annotate');
var gutil = require('gulp-util');
var uglify = require( 'gulp-uglify');
var concat = require( 'gulp-concat');
var minifyCss = require( 'gulp-minify-css');
var rename = require( 'gulp-rename');
var sh = require( 'shelljs');
var ngmin = require( 'gulp-ngmin');
var stripDebug = require( 'gulp-strip-debug');
var htmlmin = require( 'gulp-htmlmin');
var changed = require( 'gulp-changed');
var babel = require('gulp-babel');



var tasksArgs = {
    minifyWeb: {
        taskName: 'minifyWeb',
        src: ['web/modules/modules.js', 'web/modules/app.js'],
        dest: 'www/js/',
        fileName: 'app.js',
    },
    minifycss: {
        taskName: 'minifycss',
        src: ['web/css/main.css'],
        dest: 'www/css/',
        fileName: 'main.css'
    },
    minifyModuleJs: {
        taskName: 'minifyModuleJs',
        src: ['web/modules/**/*.js','web/publish/dev/publishConfig.js','!web/modules/**.js',],
        dest: 'www/js/',
        fileName: 'modules.js',
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
            'node_modules/ng-file-upload/**'
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

for(var key in tasksArgs){
    var t = tasksArgs[key];
    taskNames.push(t.taskName);
    var doThings = [];
    doThings.push(t.taskName);
    gulp.watch(t.src, doThings);
}

gulp.task('default',taskNames);

gulp.task(tasksArgs.minifyWeb.taskName, function() {
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

gulp.task(tasksArgs.minifyModuleJs.taskName, function() {
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

gulp.task(tasksArgs.minifycss.taskName, function() {
    return gulp.src(tasksArgs.minifycss.src)      //压缩的文件
        .pipe(concat(tasksArgs.minifycss.fileName))
        .pipe(gulp.dest(tasksArgs.minifycss.dest))
        .pipe(minifyCss())   //执行压缩
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(tasksArgs.minifycss.dest))
});


gulp.task(tasksArgs.moveNode.taskName, function() {
    return gulp.src(tasksArgs.moveNode.src,{base:"node_modules"})
        .pipe(gulp.dest(tasksArgs.moveNode.dest))
});
gulp.task(tasksArgs.minifyTemplates.taskName, function() {
    return gulp.src(tasksArgs.minifyTemplates.src)
        .pipe(htmlmin({collapseWhitespace: true,removeComments: true}))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(tasksArgs.minifyTemplates.dest))
});
gulp.task(tasksArgs.moveIndexHtml.taskName, function(){
    return gulp.src(tasksArgs.moveIndexHtml.src)
        .pipe(gulp.dest(tasksArgs.moveIndexHtml.dest))
});