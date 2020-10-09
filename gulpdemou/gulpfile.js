const gulp = require('gulp');//

//静态文件的处理
const htmlmin = require('gulp-htmlmin');
gulp.task('copy-html',function(){
    return gulp.src('*.html')//源路径是所有.html的文件
    // .pipe(
    // htmlmin({
    //     removeEmptyAttibutes: true,//移出所有的空属性
    //     collapseWhitespace: true,//压缩 html
    //     })
    // )
    .pipe(gulp.dest('dist/'))//拷贝到dist文件下
    .pipe(connect.reload());//实时刷新
})
gulp.task("images",function(){
    // return gulp.src("images/*.{jpg,png}")
    // 这是只拷贝了images下的图片 images里面文件里面的图片不拷贝
    // return gulp.src("images/*/*")拷贝images下某一个文件的图片
    // .pipe(gulp.dest("dist/images"));
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());//实时刷新
    // 这个是吧images 下面所有东西都拷贝过去了
})

gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());//实时刷新
})

gulp.task("data",function(){
    return gulp.src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());//实时刷新
    // 这就是吧不同文件里面的文件  一块都拷贝到dist下面  
    // 如果不要其中的一个   假如04.xml   就在"xml/*.xml" 后面加"!xml/04.xml"
})
gulp.task("iconfont",function(){
    return gulp.src("*.iconfont")
    .pipe(gulp.dest("dist/iconfont"))
    .pipe(connect.reload());
})
// 一次性执行多个任务操作
gulp.task("build",['copy-html','images', 'scripts', 'data'],function(){
    console.log("运行结束");
})


const sass = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
// 如果涉及到重命名，一个人文件一个任务
gulp.task("sass", function(){
    return gulp.src("./stylesheet/index.scss")//源文件路径
    .pipe(sass())//编译成css代码
    .pipe(gulp.dest("dist/css"))//编译到dist的css目录下
    .pipe(minifycss())//进行压缩
    .pipe(rename("index.min.css"))//重命名
    .pipe(gulp.dest("dist/css"))//再放回来
    .pipe(connect.reload());//实时刷新
})
//监听

gulp.task("watch", function(){
    gulp.watch("*.html", ["copy-html"]);//发生变化时去执行copy-html
    gulp.watch("images/**/*", ["images"]);
    gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
    gulp.watch(["*.json", "!package.json"], ["data"]);
    gulp.watch("./stylesheet/index.scss", ["sass"]);
})


//启动服务
const connect = require("gulp-connect");//引入
gulp.task("server", function(){//一个叫做server的任务
    connect.server({
        root:'dist',//根目录
        port: 8888,//0~65535
        livereload:true
    })
})

gulp.task("default", ["watch", "server"]);//同时执行，后台gulp调用