const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
		/*
		Add sass-resource-loader: for including global scss files in all vue files, for sass variables/mixins/etc.
		https://www.npmjs.com/package/sass-resources-loader#vuejs-webpack-templatevue-cli3
		*/
		config.module.rule('scss').oneOfs.store.forEach((item) => {
			item.use('sass-resources-loader').loader('sass-resources-loader').options({
				resources: ['./src/assets/styles/globals/*.scss']
			}).end()
		});

		/*
		Add import-glob-loader which allows us to include our utilities folder directly from App.vue
		*/
		config.module.rule("scss").test(/\.scss/).pre().use("import-glob-loader").loader("import-glob-loader");

		/*
		Add vue-svg-inline-loader which allows us to replace svg images with actual content of svg files
		*/
		config.module.rule("vue").use("vue-svg-inline-loader").loader("vue-svg-inline-loader").options({
			svgo: {
				plugins: [
					{ inlineStyles: true },
					{ removeStyleElement: true },
					{ removeViewBox: false },
				],
			},
		});
	},
})
