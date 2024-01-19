const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: [/node_modules[/\\\\]vue2-components[/\\\\]/],
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("node_modules", path.resolve(__dirname, "./node_modules"))
      .set("assets", resolve("src/assets"))
      .set("router", resolve("src/route/router"))
      .set("components", resolve("src/components"))
      .set("scss", resolve("src/scss"))
      .set("public", resolve("src/public"))
      .set("utility", resolve("src/utility"))
      .set("pages", resolve("src/pages"))
      .set("@vue2-components", "@/../node_modules/vue2-components/src")
      .set(
        "vue2-components.styles",
        "@/../node_modules/vue2-components/src/scss"
      )
      .set(
        "vue2-components.components",
        "@/../node_modules/vue2-components/src/components"
      );
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "vue2-components.styles/global.variables.scss";`,
      },
    },
  },
});