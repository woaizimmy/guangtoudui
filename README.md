## 安装依赖
	npm i

## 开发
    npm start -- --m=dev # API接口使用dev开发环境
    npm start -- --m=st # API接口使用st测试环境
	npm start -- --m=prod # API接口使用prod生产环境

## API接口配置（以dev开发环境为例,以下两个文件中的ip+端口要一致）
	components/util/constants.js:
		apiHost[item] = `http://10.75.11.111:8080${_WEBPACK_PUBLIC_PATH}`;
	build/dev-server.js:
		proxy: {
		    '/mock': {
		      	target: 'http://10.75.11.111:8080',
		      	secure: false,
		      	changeOrigin: true,
		      	pathRewrite: {"^/mock" : ""}
		    }
		}

## 打包
    npm run build -- --m=st # 发布到测试环境
    npm run build -- --m=prod # 发布到生产环境
	
	
