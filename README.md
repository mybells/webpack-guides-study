# Webpack指南学习(https://www.webpackjs.com/guides/) 2019-1-29完成

# 部署环境

**npm install**

# 项目结构
    
    - src
        - AssetManagement //管理资源
            + loadingCss //加载css
            + loadingImages //加载图片
            + loadingFonts //加载字体
            + loadingData //加载数据
        + AuthoringLibraries //创建library
        - Caching //缓存
            + outputFilenames //输出文件的文件名
            + extractingBoilerplate //提取模板
            + moduleIdentifiers //模块标识符
        - CodeSplitting //代码分离
            + entryPoints //入口起点
            + preventDuplication //防止重复
            + danamicImports //动态导入
        - Development //开发
            + watch //观察模式
            + devServer //使用webpack-dev-server
            + devMiddleware //使用webpack-dev-middleware
        - GettingStarted //起步
        - HotModuleReplacement //模块热替换
            + enablingHMR //启用HMR
            + nadeApi //通过Node.js API
            + hmrWithStyle //HMR修改样式表
        + LazyLoading //懒加载
        + OutputManagement //管理输出
        + Production //生成环境构建
        + ProgressiveWebApplication //渐进式网络应用程序
        - Shimming //shimming
            + shimmingGlobals //shimming全局变量
            + granularShimming //细粒度shimming
            + globalExports //全局exports
            + loadingPolyfills //加载polyfills
         + TreeShaking //tree shaking
        + TypeScript //TypeScript
    .gitignore
    package-lock.json
    package.json
    README.md
    
    
# 启动
    
**npm run xxx //xxx为下列对应的key**

    "GettingStarted": "webpack --config ./src/GettingStarted/webpack.config.js",
    "AssetManagement-css": "webpack --config ./src/AssetManagement/loadingCss/webpack.config.js",
    "AssetManagement-images": "webpack --config ./src/AssetManagement/loadingImages/webpack.config.js",
    "AssetManagement-fonts": "webpack --config ./src/AssetManagement/loadingFonts/webpack.config.js",
    "AssetManagement-data": "webpack --config ./src/AssetManagement/loadingData/webpack.config.js",
    "OutputManagement": "webpack --config ./src/OutputManagement/webpack.config.js",
    "Development-watch": "webpack --watch --config ./src/Development/watch/webpack.config.js",
    "Development-devServer": "webpack-dev-server --open --config ./src/Development/devServer/webpack.config.js",
    "Development-devMiddleware": "node ./src/Development/devMiddleware/server.js",
    "HotModuleReplacement-enablingHMR": "webpack-dev-server --open --config ./src/HotModuleReplacement/enablingHMR/webpack.config.js",
    "HotModuleReplacement-nodeApi": "node ./src/HotModuleReplacement/nodeApi/dev-server.js",
    "HotModuleReplacement-hmrWithStyle": "webpack-dev-server --open --config ./src/HotModuleReplacement/hmrWithStyle/webpack.config.js",
    "TreeShaking": "webpack --config ./src/TreeShaking/webpack.config.js",
    "Production-start": "webpack-dev-server --open --config ./src/Production/webpack.dev.js",
    "Production-build": "webpack --config ./src/Production/webpack.prod.js",
    "CodeSplitting-entryPoints": "webpack --config ./src/CodeSplitting/entryPoints/webpack.config.js",
    "CodeSplitting-preventDuplication": "webpack --config ./src/CodeSplitting/preventDuplication/webpack.config.js",
    "CodeSplitting-danamicImports": "webpack --config ./src/CodeSplitting/danamicImports/webpack.config.js",
    "LazyLoading": "webpack --config ./src/LazyLoading/webpack.config.js",
    "Caching-outputFilenames": "webpack --config ./src/Caching/outputFilenames/webpack.config.js",
    "Caching-extractingBoilerplate": "webpack --config ./src/Caching/extractingBoilerplate/webpack.config.js",
    "Caching-moduleIdentifiers": "webpack --config ./src/Caching/moduleIdentifiers/webpack.config.js",
    "AuthoringLibraries": "webpack --config ./src/AuthoringLibraries/webpack.config.js",
    "AuthoringLibraries-example": "webpack-dev-server --open --config ./src/AuthoringLibraries/example/webpack.config.js",
    "Shimming-shimmingGlobals": "webpack --config ./src/Shimming/shimmingGlobals/webpack.config.js",
    "Shimming-granularShimming": "webpack --config ./src/Shimming/granularShimming/webpack.config.js",
    "Shimming-globalExports": "webpack --config ./src/Shimming/globalExports/webpack.config.js",
    "Shimming-loadingPolyfills": "webpack --config ./src/Shimming/loadingPolyfills/webpack.config.js",
    "ProgressiveWebApplication-build": "webpack --config ./src/ProgressiveWebApplication/webpack.config.js",
    "ProgressiveWebApplication-start": "http-server ./src/ProgressiveWebApplication/dist",
    "TypeScript": "webpack --config ./src/TypeScript/webpack.config.js",
    "Shimming": "webpack-dev-server --open --config ./src/Shimming/loadingPolyfills/webpack.config.js"
