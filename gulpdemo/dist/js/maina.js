// console.log("加载成功");

// //配置我们要引入的模块的路径 jquery 遵从AMD规范，parabola.js：抛物线方程不支持AMD规范
// require.config({
//     paths: {
//         jquery: "jquery-1.10.1.min",
//         "jquery-cookie" : "jquery.cookie",
//         parabola: "parabola",
//         index1: "index1" ,
//         // startMove: "startMove",
//         // tool:"tool",
//     },
//     //jquery-cookie 依赖于jquery
//     shim: {
//         //设置以来关系
//         "jquery-cookie": ["jquery"],
//         //某一个模块， 不遵从AMD
//         parabola: {
//             exports: "_",
//         }
//     }
// })

// //当前页面引用首页的代码
// // require(["index"], function(index){
// //     index.body();
// // })

// require(["index1"], function(index1){
//     index1.body();
// })

// // require(["index2"], function(index2){
// //     index2.body();
// // })